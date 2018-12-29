import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Container, Header, Content, Text, Left, Right, Body, Accordion, Item, Input, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';

class ArrFilm extends Component{

data = [
	{
		jenis: 'Terkini',
		title: 'Coba salah satu',
		detail: [
			{
				image: require('./images/1-1.jpg'),
				detailTitle: 'Ant-Man',
				price: 25000,
				ratting: '4.0'
			},
			{
				image: require('./images/1-2.jpg'),
				detailTitle: 'Jurassic World',
				price: 29000,
				ratting: '4.5'
			},
			{
				image: require('./images/1-3.jpg'),
				detailTitle: 'Avengers',
				price: 79000,
				ratting: '4.1'
			},
			{
				image: require('./images/1-4.jpg'),
				detailTitle: 'DeadPool2',
				price: 29000,
				ratting: '4.7'
			},
			{
				image: require('./images/1-5.jpg'),
				detailTitle: 'Black Panther 2018',
				price: 79000,
				ratting: '4.8'
			}
		]
	},
	{
		jenis: 'Populer',
		title: 'Disarangkan untuk anda',
		detail: [
			{
				image: require('./images/2-1.jpg'),
				detailTitle: 'Resident Evil',
				price: 19000,
				ratting: '4.0'
			},
			{
				image: require('./images/2-2.jpg'),
				detailTitle: 'SpiderMan',
				price: 19000,
				ratting: '4.5'
			},
			{
				image: require('./images/2-3.jpg'),
				detailTitle: 'Fast & Furious',
				price: 25000,
				ratting: '4.1'
			},
			{
				image: require('./images/2-4.jpg'),
				detailTitle: 'Mortal Kombat',
				price: 19000,
				ratting: '3.9'
			},
			{
				image: require('./images/2-5.jpg'),
				detailTitle: 'Transformers',
				price: 25000,
				ratting: '4.8'
			}
		]
	},
	{
		jenis: 'Film Kartun Terbaik',
		title: '',
		detail: [
			{
				image: require('./images/3-1.jpg'),
				detailTitle: 'Boss Baby',
				price: 25000,
				ratting: '4.0'
			},
			{
				image: require('./images/3-2.jpg'),
				detailTitle: 'Hotel Transylvania',
				price: 25000,
				ratting: '4.5'
			},
			{
				image: require('./images/3-3.jpg'),
				detailTitle: 'Moana',
				price: 79000,
				ratting: '4.1'
			},
			{
				image: require('./images/3-4.jpg'),
				detailTitle: 'Brave',
				price: 19000,
				ratting: '4.4'
			},
			{
				image: require('./images/3-5.jpg'),
				detailTitle: 'Wreck-it Ralph',
				price: 89000,
				ratting: '4.5'
			}
		]
	},
	{
		jenis: 'Romantis',
		title: 'Coba salah satu',
		detail: [
			{
				image: require('./images/4-1.jpg'),
				detailTitle: 'Titanic',
				price: 25000,
				ratting: '5.0'
			},
			{
				image: require('./images/4-2.jpg'),
				detailTitle: 'Habibie Ainun',
				price: 79000,
				ratting: '4.5'
			},
			{
				image: require('./images/4-3.jpg'),
				detailTitle: 'Ayat ayat Cinta',
				price: 25000,
				ratting: '4.5'
			},
			{
				image: require('./images/4-4.jpg'),
				detailTitle: '5 cm',
				price: 59000,
				ratting: '4.7'
			},
			{
				image: require('./images/4-5.jpg'),
				detailTitle: 'Filosopi Kopi',
				price: 39000,
				ratting: '4.5'
			}
		]
	}
]

	render(){
		return(
			<ScrollView style={{backgroundColor: '#f1f1f1'}}>
					{this.data.map((item, i)=> (
						<Card key={i} style={{padding: 10, borderRadius: 2}}>
							<View style={{flexDirection: 'row'}}>
								<View style={{flex: 2}}>
									<Text style={{fontSize: 13, color: '#555'}}>{item.jenis}</Text>
									<Text style={{fontSize: 10, color: '#555'}}>{item.title}</Text>
								</View>
								<View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
									<Text style={{color: '#d62d20', fontSize: 13}}>Lainnya</Text>
								</View>
							</View>
							<ScrollView horizontal={true}>
								{item.detail.map((itemdetail, i)=>(
									<View key={i} style={{margin: 10}}>
										<Image style={{width: 80, height: 120, borderRadius: 5}} source={itemdetail.image}/>
										<View style={{flexDirection: 'row'}}>
											<View style={{flex: 2, marginTop: 10}}>
												<Text style={{fontSize: 13, color: '#333'}}>{itemdetail.detailTitle.substring(0,12)}..</Text>
												<Text style={{fontSize: 13, color: '#d62d20', marginTop: 5}}>Rp. {itemdetail.price}</Text>
							        		</View>
											<View style={{flex: 1, marginTop: 10, flexDirection: 'row', justifyContent: 'flex-end'}}>
												<Icon
													name='md-more'
													size={20}
													style={{color: '#333'}}
												/>
											</View>
							        	</View>
							        </View>
								))}
							</ScrollView>
						</Card>
					))}
			</ScrollView>
		)
	}
}

export default ArrFilm;
