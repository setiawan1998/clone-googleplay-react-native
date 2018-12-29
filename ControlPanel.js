import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import Drawer from 'react-native-drawer';
import { Container, Header, Content, Text, Left, Right, Body, Accordion, Item, Input, List, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { createStackNavigator, createAppContainer, withNavigation, NavigationActions, StackActions } from 'react-navigation'; 


export default class ControlPanel extends Component{
dataProfile = {
	name: 'Steve Jobs',
	email: 'stevejobs@gmail.com'
}
	render(){
		return(	<Container>
				<ScrollView>
					<Image source={require('./images_controlpanel/background.jpg')} style={{width: '100%',height: 150, resizeMode: 'cover'}} />
					<Header style={{height: 0}}>
						<Content style={{height: 150, marginTop: -150, padding: 20}}>
							<Image
								source={require('./images_controlpanel/user.jpg')}
								style={{height: 75, resizeMode: 'cover', width: 75, borderRadius: 100}}
							/>
							<Content style={{marginTop: 5}}>
								<Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>{this.dataProfile.name}</Text>
								<Text style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>{this.dataProfile.email}</Text>
							</Content>
						</Content>
					</Header>
					<Content style={{backgroundColor: '#fff'}}>
							<List style={styles.ListBorderBottom}>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Left>
											<Icon name="md-apps" size={20} />
										</Left>
										<Body>
												<Text style={styles.FontSizeList}>Aplikasi & game saya</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Left>
											<Icon name="md-notifications" size={20} />
										</Left>
										<Body>
												<Text style={styles.FontSizeList}>Notifikasi</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Left>
											<Icon name="md-refresh" size={20} />
										</Left>
										<Body>
												<Text style={styles.FontSizeList}>Langganan</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Left>
											<Icon name="md-bookmark" size={20} />
										</Left>
										<Body>
												<Text style={styles.FontSizeList}>Wishlist</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
							</List>

							<List style={styles.ListBorderBottom}>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Left>
											<Icon name="md-contact" size={20} />
										</Left>
										<Body>
												<Text style={styles.FontSizeList}>Akun</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Left>
											<Icon name="md-card" size={20} />
										</Left>
										<Body>
												<Text style={styles.FontSizeList}>Metode pembayaran</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Left>
											<Icon name="md-play" size={20} />
										</Left>
										<Body>
												<Text style={styles.FontSizeList}>Play Protect</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Left>
											<Icon name="md-settings" size={20} />
										</Left>
										<Body>
												<Text style={styles.FontSizeList}>Setelan</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
							</List>

							<List style={styles.ListBorderBottom}>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Left>
											<Icon name="md-play" size={20} color='#d62d20' />
										</Left>
										<Body>
												<Text style={styles.FontSizeList}>Buka aplikasi Film</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Left>
											<Icon name="md-play" size={20} color='#0057e7' />
										</Left>
										<Body>
												<Text style={styles.FontSizeList}>Buka aplikasi Buku</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
							</List>

							<List>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Body>
												<Text style={styles.FontSizeList}>Tukarkan</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Body>
												<Text style={styles.FontSizeList}>Bantuan & masukan</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Body>
												<Text style={styles.FontSizeList}>Panduan Orang Tua</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
								<ListItem noBorder icon style={styles.ListItemWidth}>
									<TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										<Body>
												<Text style={styles.FontSizeList}>Tentang Google Play</Text>
										</Body>
									</TouchableOpacity>
								</ListItem>
							</List>
					</Content>
				</ScrollView>
				</Container>
		)
	}
}

const styles = StyleSheet.create({
	ListItemWidth: {
		width: '100%'
	},
	FontSizeList: {
		fontSize: 13
	},
	ListBorderBottom: {
		borderBottomWidth: 0.5,
		borderColor: '#eee'
	}
})