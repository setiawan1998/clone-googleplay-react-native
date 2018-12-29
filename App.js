/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity} from 'react-native';
import Drawer from 'react-native-drawer';
import { Container, Header, Content, Text, Left, Right, Body, Accordion, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ControlPanel from './ControlPanel';
import TopNavBar from 'top-bar-nav';
import BerandaScreen from './berandaScreen';
import GameScreen from './gameScreen';
import FilmScreen from './filmScreen';
import BukuScreen from './bukuScreen';
import HeaderScreen from './headerScreen';
import LoginScreen from './loginScreen';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

const RootStack = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    BerandaScreen: BerandaScreen,
    GameScreen: GameScreen,
    FilmScreen: FilmScreen,
    BukuScreen: BukuScreen,
    HeaderScreen: HeaderScreen,
    ControlPanel: ControlPanel
  },{
    initialRouteName: 'LoginScreen'
  }
);

export default AppContainer = createAppContainer(RootStack);