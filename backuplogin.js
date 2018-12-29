import React, { Component } from 'react';
import { Image, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { Container, Header, Content, Text, Left, Right, Body, Accordion, Item, Input, Card } from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { createStackNavigator, createAppContainer, withNavigation, NavigationActions, StackActions } from 'react-navigation'; 


export default class LoginScreen extends Component {

state = ({
  username: 'admin',
  password: 'admin',
  inputUsername: '',
  inputPassword: '',
})

  submitLogin(){
    if (this.state.inputUsername == this.state.username && this.state.inputPassword == this.state.password) {
      this.setState({inputUsername: "", inputPassword: ""});
      this.props.navigation.dispatch(StackActions.reset({
      	index: 0,
      	actions: [NavigationActions.navigate({routeName: 'BerandaScreen'})]
      }))
    }else{
      alert("Username atau password salah, silahkan pilih lupa password untuk melihat username dan password");
    }
  }

  static navigationOptions = ({
    header: null
  })
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <Text style={{marginBottom: 10, color: '#999'}}>Sign in with your Google Account</Text>
      <Card style={{width: '90%', padding: 15}}>
      	  <View style={{justifyContent: 'center', alignItems: 'center'}}>
	      	  <View style={{borderRadius: 100, backgroundColor: '#ccc', height: 100, width: 100, justifyContent: 'center', alignItems: 'center'}}>
	      	  	<Icon
	      	  		name="md-person"
	      	  		size={80}
	      	  		style={{color: '#999',borderRadius: 100}}
				/>
			  </View>
      	  </View>
	      <View style={{marginTop: 10}}>
		      <TextInput
		        value={this.state.inputUsername}
		        placeholder="Username"
		        style={{
		          marginTop: 5,
		          backgroundColor: "#fff",
		          width: '100%',
		          height: 45,
		          borderColor: "#ccc",
		          borderWidth: 1,
		          borderRadius: 3
		        }}
		        onChangeText={(username) => this.setState({ inputUsername: username })}
		      />
		      <TextInput
		        value={this.state.inputPassword}
		        placeholder="Password"
		        secureTextEntry={true}
		        style={{
		          marginTop: 5,
		          backgroundColor: "#fff",
		          width: '100%',
		          height: 45,
		          borderColor: "#ccc",
		          borderWidth: 1,
		          borderRadius: 3
		        }}
		        onChangeText={(password) => this.setState({ inputPassword: password })}
		      />
	      </View>
	      <View style={{marginTop: 15}}>
		      <Button
		        title="Masuk"
		        titleStyle={{ fontWeight: "700" }}
		        buttonStyle={{
		          backgroundColor: "#f90",
		          width: '100%',
		          height: 50,
		          borderColor: "transparent",
		          borderWidth: 0,
		          borderRadius: 5
		        }}
		        containerStyle={{ marginTop: 20 }}
		        onPress={() => this.submitLogin()}
		      />
	      </View>
	      <TouchableOpacity style={{margin: 10}}>
	      	<Text style={{color: '#09f', fontSize: 15}} onPress={()=>(alert('Username "admin", password "admin"'))}>Lupa Password?</Text>
	      </TouchableOpacity>
      </Card>
      <View style={{alignItems: 'center'}}>
	      <TouchableOpacity style={{margin: 10}}>
	      	<Text style={{color: '#09f', fontSize: 15}}>Buat Akun</Text>
	      </TouchableOpacity>
	   </View>
      </View>
    );
  }
}

