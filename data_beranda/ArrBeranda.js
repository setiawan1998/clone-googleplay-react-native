import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Container, Header, Content, Text, Left, Right, Body, Accordion, Item, Input, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';

class ArrBeranda extends Component{

data = [
	{
		jenis: 'Game diinstall sebelumnya',
		title: 'Coba salah satu',
		detail: [
			{
				image: require('./images/1-1.png'),
				detailTitle: 'Mobile Legends',
				size: '96 MB',
				ratting: '4.0'
			},
			{
				image: require('./images/1-2.png'),
				detailTitle: 'Dream League Soccer',
				size: '326 MB',
				ratting: '4.5'
			},
			{
				image: require('./images/1-3.png'),
				detailTitle: 'Garena Free Fire',
				size: '386 MB',
				ratting: '4.1'
			},
			{
				image: require('./images/1-4.png'),
				detailTitle: 'Garena AOV',
				size: '256 MB',
				ratting: '4.7'
			},
			{
				image: require('./images/1-5.png'),
				detailTitle: 'BASEBALL',
				size: '86 MB',
				ratting: '4.8'
			}
		]
	},
	{
		jenis: 'Rilis Terkini',
		title: 'Disarangkan untuk anda',
		detail: [
			{
				image: require('./images/2-1.png'),
				detailTitle: 'Clash Royale',
				size: '88 MB',
				ratting: '4.0'
			},
			{
				image: require('./images/2-2.png'),
				detailTitle: 'Shadow Fight',
				size: '709 MB',
				ratting: '3.5'
			},
			{
				image: require('./images/2-3.png'),
				detailTitle: 'PUBG',
				size: '460 MB',
				ratting: '4.1'
			},
			{
				image: require('./images/2-4.png'),
				detailTitle: 'Mortal Kombat',
				size: '103 MB',
				ratting: '3.9'
			},
			{
				image: require('./images/2-5.png'),
				detailTitle: '8 Ball Pool',
				size: '80 MB',
				ratting: '3.8'
			}
		]
	},
	{
		jenis: 'Disarankan unruk anda',
		title: '',
		detail: [
			{
				image: require('./images/3-1.png'),
				detailTitle: 'Shopee',
				size: '35 MB',
				ratting: '4.0'
			},
			{
				image: require('./images/3-2.png'),
				detailTitle: 'Garb',
				size: '42 MB',
				ratting: '4.5'
			},
			{
				image: require('./images/3-3.png'),
				detailTitle: 'JD.id',
				size: '15 MB',
				ratting: '4.1'
			},
			{
				image: require('./images/3-4.png'),
				detailTitle: 'TokoPedia',
				size: '17 MB',
				ratting: '4.4'
			},
			{
				image: require('./images/3-5.png'),
				detailTitle: 'BukaLapak',
				size: '20 MB',
				ratting: '4.5'
			}
		]
	},
	{
		jenis: 'Apl diinstall sebelumnya',
		title: 'Coba salah satu',
		detail: [
			{
				image: require('./images/4-1.png'),
				detailTitle: 'Whatsapp',
				size: '19 MB',
				ratting: '5.0'
			},
			{
				image: require('./images/4-2.png'),
				detailTitle: 'HAGO',
				size: '30 MB',
				ratting: '3.5'
			},
			{
				image: require('./images/4-3.png'),
				detailTitle: 'Adobe Photoshop',
				size: '200 MB',
				ratting: '4.5'
			},
			{
				image: require('./images/4-4.png'),
				detailTitle: 'Twitter',
				size: '17 MB',
				ratting: '4.7'
			},
			{
				image: require('./images/4-5.png'),
				detailTitle: 'Facebook',
				size: '52 MB',
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
									<Text style={{color: '#008744', fontSize: 13}}>Lainnya</Text>
								</View>
							</View>
							<ScrollView horizontal={true}>
								{item.detail.map((itemdetail, i)=>(
									<View key={i} style={{margin: 10}}>
										<Image style={{width: 80, height: 80, borderRadius: 5}} source={itemdetail.image}/>
										<View style={{flexDirection: 'row'}}>
											<View style={{flex: 2, marginTop: 10}}>
												<Text style={{fontSize: 13, color: '#333'}}>{itemdetail.detailTitle.substring(0,12)}..</Text>
												<Text style={{fontSize: 10, color: '#555', marginTop: 5}}><Icon name='md-play' size={10} style={{color: '#008744'}}/> {itemdetail.size}</Text>
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

export default ArrBeranda;
