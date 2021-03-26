import React, { Component } from "react";
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
import { LogBox } from 'react-native';



LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
class SecondPage extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { navigation } = this.props;
        const source = navigation.getParam('data', '');
        var result = []
        result.push(source)
        return (
            <Container>
                {source.success != false ?
                    <FlatList
                        data={result}
                        showsVerticalScrollIndicator={false}

                        style={{ marginTop: 16 }}

                        renderItem={({ item, index }) => (

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
                                    <Text>{item.original_title}</Text>
                                </CardItem>
                                <CardItem bordered style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: 'grey', alignSelf: 'flex-start' }}>overview:  </Text>
                                    <Text style={{ alignSelf: 'flex-start' }}>{item.overview}</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Text style={{ color: 'grey' }}>Budget:  </Text>
                                    <Text>{item.budget}</Text>
                                </CardItem>
                                <CardItem>
                                    <Text style={{ color: 'grey' }}>Genres:  </Text>
                                    {item.genres.map((a) => {
                                        return (

                                            <Text>{a.name}{' '}</Text>

                                        )
                                    })}
                                </CardItem>





                            </Card>

                        )
                        }
                    />
                    : <Text style={{ alignSelf: 'center', marginTop: 50 }}>No data found for this film</Text>}
            </Container>

        );
    }
}


export default SecondPage;














