import React, { Component } from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';




const Routing = createStackNavigator({

    FirstPage: { screen: FirstPage },
    //First entry by default be our first screen if we do not define initialRouteName
    // SecondPage: { screen: SecondPage },
    // ThirdPage: { screen: ThirdPage }
},
    {

        headerMode: "none"
    }
);
export default createAppContainer(Routing);