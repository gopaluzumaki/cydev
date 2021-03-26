
import { Image, Dimensions, TouchableOpacity, ScrollView, FlatList, RefreshControl, StyleSheet, TextInput, } from "react-native";
import {

    Container,
    Header,
    View,
    DeckSwiper,
    Accordion,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Item,
    Body,
    Icon,
    Right,
    Input,
    Content,
    Button
} from "native-base";
import { Alert, Modal, TouchableWithoutFeedback, UIManager, Platform } from 'react-native';
import React, { Component } from 'react';
import SecondPage from './SecondPage';

export default class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            dataSource: [],
            id: "",
            status: [],
            show: false,
            searchText: "",
            filtered: [],
            data: [],
            expanded: false,
        }

    }

    componentDidMount = () => {

        fetch("https://api.themoviedb.org/3/movie/550/lists?api_key=0cee45aa91f39f64cd811c01974a7c47")//Getting the data from API

            .then(response => response.json())
            .then(data => {

                this.setState({
                    dataSource: data.results
                })

                this.setState({ data: data })
            })


    }

    changeHandler = (text) => {

        this.state.dataSource = this.state.data.results
        let filtered = this.state.dataSource
        filtered = filtered.filter(
            (m) =>
                m.name
                    .toUpperCase()
                    .indexOf(text.toUpperCase()) >= 0
        );

        this.setState({ dataSource: filtered })

    }

    handleData = (item) => {

        const { navigation } = this.props
        console.log(item.id)

        fetch(`https://api.themoviedb.org/3/movie/${item.id}?api_key=0cee45aa91f39f64cd811c01974a7c47`)//Once a movie is clicked, it will navigate to the second screen and show the details of the movie that was clicked

            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.props.navigation.navigate('SecondPage', { data: data })
            }
            )
    }
    render() {
        const { navigate } = this.props.navigation;

        return (

            <Container style={{ backgroundColor: '#f0f8ff' }} >

                <Header style={{ backgroundColor: "orange", height: 70 }}>
                    <Body style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Text style={{ color: 'white', fontSize: 22 }}>{'Movies List'}</Text>

                    </Body>
                </Header>
                <Content padder>

                    <Body style={{ flexDirection: 'row' }}>
                        <Body style={styles.SectionStyle}>
                            <TouchableOpacity><Image source={require('C:/temp/native/MAPS/search.png')} style={styles.ImageStyle} /></TouchableOpacity>

                            <TextInput

                                style={{ flex: 1, width: 30 }}
                                placeholder="Search Movie"
                                underlineColorAndroid="transparent"
                                onChangeText={(text) => {

                                    this.changeHandler(text)
                                }
                                }
                            />

                        </Body>
                    </Body>
                    <FlatList
                        data={this.state.dataSource}
                        showsVerticalScrollIndicator={false}
                        extraData={this.state}
                        style={{ marginTop: 16 }}

                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this.handleData(item)}>
                                <Card
                                    style={{
                                        elevation: 10,

                                        marginBottom: 15,


                                    }}
                                >
                                    <CardItem bordered >

                                        <Thumbnail circular source={require('C:/temp/native/MAPS/w.jpg')} style={{ backgroundColor: 'orange' }}></Thumbnail>
                                        <Body style={{ flexDirection: 'column', marginTop: 5 }}><Text style={{ marginLeft: 10 }}>{item.title}</Text>
                                            <Text style={{ marginLeft: 10 }}>{item.subtitle}</Text></Body>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Text style={{ color: 'grey' }}>Movie name:  </Text>
                                        <Text>{item.name}</Text>
                                    </CardItem>
                                    <CardItem bordered style={{ flexDirection: 'column' }}>
                                        <Text style={{ color: 'grey', alignSelf: 'flex-start' }}>Description:  </Text>
                                        <Text style={{ alignSelf: 'flex-start' }}>{item.description}</Text>
                                    </CardItem>

                                    {this.state.id == item.id ?
                                        this.state.expanded &&
                                        <Body>
                                            <CardItem bordered>
                                                <Text>{item.long_desc}</Text>
                                            </CardItem>
                                            <CardItem style={{ justifyContent: 'center', alignItems: 'center' }} bordered>
                                                <TouchableOpacity onPress={() => { this.setState({ id: item.id }), this.setState({ expanded: false }) }}><Image source={require('C:/temp/native/MAPS/up.png')} style={{ height: 30, width: 30 }}></Image></TouchableOpacity>
                                            </CardItem>
                                        </Body>

                                        :

                                        <CardItem style={{ justifyContent: 'center', alignItems: 'center' }} bordered>

                                            <TouchableOpacity onPress={() => { this.setState({ id: item.id }), console.log(this.state.id), this.setState({ expanded: true }) }}><Image source={require('C:/temp/native/MAPS/down.png')} style={{ height: 30, width: 30 }}></Image></TouchableOpacity>
                                        </CardItem>
                                    }
                                    {
                                        this.state.id == item.id ?
                                            this.state.expanded ?

                                                null
                                                : <CardItem style={{ justifyContent: 'center', alignItems: 'center' }} bordered>

                                                    <TouchableOpacity onPress={() => { this.setState({ id: item.id }), console.log(this.state.id), this.setState({ expanded: true }) }}><Image source={require('C:/temp/native/MAPS/down.png')} style={{ height: 30, width: 30 }}></Image></TouchableOpacity>
                                                </CardItem>
                                            : null

                                    }
                                </Card>
                            </TouchableOpacity>
                        )
                        }
                    />

                </Content>
            </Container >

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 250
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: 'white',
        elevation: 5,
        height: 45,
        borderRadius: 5,
        marginBottom: 4,
        width: 50

    },
});


