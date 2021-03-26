import React, { Component } from 'react';
import { Button, View, StyleSheet, Alert, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';



const App = createStackNavigator({

  FirstPage: { screen: FirstPage },

  SecondPage: { screen: SecondPage },

},
  {

    headerMode: "none"
  }
);


export default createAppContainer(App);

