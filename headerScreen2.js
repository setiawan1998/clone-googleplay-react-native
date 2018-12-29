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
import { Container, Header, Content, Text, Left, Right, Body, Accordion, Item, Input, Button } from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ControlPanel from './ControlPanel';
import TopNavBar from 'top-bar-nav';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation'; 

class HeaderScreen extends Component {

tabs = [
    {
      key: 1,
      label: 'BERANDA',
      barColor: '#008744',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      link: 'BerandaScreen'
    },
    {
      key: 2,
      label: 'GAME',
      barColor: '#008744',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      link: 'GameScreen'
    },
    {
      key: 3,
      label: 'FILM',
      barColor: '#d62d20',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      link: 'FilmScreen'
    },
    {
      key: 4,
      label: 'BUKU',
      barColor: '#0057e7',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      link: 'BukuScreen'
    }
  ]

renderTab = ({ tab, isActive }) => (
  <Text 
    style={{textAlign: 'center', flex: 1, color: '#fff', fontSize: 15, alignSelf: "center"}} 
    onPress={() => this.props.navigation.navigate(tab.link),  { transition: 'vertical' }}>
    {tab.label}
  </Text>
)

  render() {
    return (
      <Drawer
        type="overlay"
        tapToClose={true}
        ref={(ref) => this._drawer = ref}
        content={<ControlPanel />}    
        openDrawerOffset={0.2}
        open={false}
        tweenHandler={(ratio) => ({
          main: { opacity: (1.9-ratio ), backgroundColor: '#000' }
        })}
        >
          <Header searchBar style={{height: 65}}>
            <Item style={{padding: 0, borderRadius: 2, height: 50}}>
              <TouchableOpacity onPress={ ()=> {this._drawer.open() }}>
                <Icon
                  name='md-menu'
                  size={25}
                  style={{padding: 20}}
                />
              </TouchableOpacity>
              <Input placeholder="Search"/>
              <Icon
                name='ios-mic'
                size={25}
                style={{padding: 20}}
              />
            </Item>
          </Header>
          <BottomNavigation
            style={{height: 40, paddingLeft: 15}}
            onTabPress={newTab => this.setState({ activeTab: newTab.key, color: newTab.barColor })}
            renderTab={this.renderTab}
            tabs={this.tabs}
          />
          {this.props.children}
      </Drawer>
    );
  }
}
export default withNavigation(HeaderScreen);