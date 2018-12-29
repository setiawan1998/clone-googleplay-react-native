import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import { Container, Header, Content, Text, Left, Right, Body, Accordion, Item, Input, Card } from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import HeaderScreen from './headerScreen';
import ArrBeranda from './data_beranda/ArrBeranda';


 class BerandaScreen extends React.Component {

 	arr_menu = [
 		{
 			icon: 'md-compass',
 			title: 'Untuk Anda',
 			color: '#008744'
 		},
 		{
 			icon: 'md-trending-up',
 			title: 'Populer',
 			color: '#555'
 		},
 		{
 			icon: 'md-apps',
 			title: 'Kategori',
 			color: '#555'
 		},
 		{
 			icon: 'md-bookmark',
 			title: 'Pilihan Edior',
 			color: '#555'
 		},
 		{
 			icon: 'md-star',
 			title: 'Keluarga',
 			color: '#555'
 		},
 		{
 			icon: 'md-lock',
 			title: 'Akses Awal',
 			color: '#555'
 		}
 	]

 	static navigationOptions = {
 		header: null
 	}

	render(){
		return(
			<HeaderScreen> 
				<View style={{flex: 1}}>
					<Card style={{position: 'absolute', top: 0, left: 0, right: 0}}>
						<ScrollView horizontal={true} style={{paddingLeft: 2, shadowColor: '#555', elevation: 3, backgroundColor: '#fff'}}>
						{this.arr_menu.map((data, i)=>(
							<TouchableOpacity key={i} style={{alignItems: 'center', justifyContent: 'center', padding: 13}}>
								<Icon
									name={data.icon}
									size={20}
									style={{color: data.color}}
								/>
								<Text style={{fontSize: 13, color: data.color}}>{data.title}</Text>
							</TouchableOpacity>
						))}

						</ScrollView>
					</Card>
				</View>
				<View style={{flex: 9, marginTop: 20}}>
						<ArrBeranda/>
				</View>
			</HeaderScreen>
		);
	}
}
export default BerandaScreen;