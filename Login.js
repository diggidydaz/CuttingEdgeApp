import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import { createStackNavigator } from 'react-navigation';

// Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDWZ2ecC2n5pn-g4W2WjZEv8KqcYl7Ztas",
    authDomain: "cutting-edge-d09d2.firebaseapp.com",
    databaseURL: "https://cutting-edge-d09d2.firebaseio.com",
    projectId: "cutting-edge-d09d2",
    storageBucket: "cutting-edge-d09d2.appspot.com",
    messagingSenderId: "291531068472"
  };
  firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  signUpUser = (email,password) => {
    try {
      if(this.state.password.length<6)
      {
        alert("Please enter at least 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email,password)
    }
    catch(error){
      console.log(error.toString())
    }
  }

  loginUser = (email,password) => {
      try{
        firebase.auth().signInWithEmailAndPassword(email,password).then(function (user) {
          console.log(user)
        })
      }

      catch(error)
      {
        console.log(error.toString())
      }
  }


  render() {
    return (
      <Container style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require('./img/icons/xhdpi.png')}
          style={styles.image}
        />
      </View>
        <Form>
          <Item floatingLabel>
          <Label>Email</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email) => this.setState({email})}
          />
          </Item>
          <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(password) => this.setState({password})}
          />
          </Item>

          <Button style={{marginTop: 10}}
            full
            rounded
            warning
            onPress={()=> this.loginUser(this.state.email, this.state.password)}
            >
            <Text> Login </Text>
          </Button>
          <Button style={{marginTop: 10, backgroundColor:'black'}}
            full
            rounded
            primary
            onPress={()=> this.signUpUser(this.state.email, this.state.password)}
            >
            <Text style={{ color: 'white'}}> Sign Up </Text>
          </Button>

        </Form>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    padding: 40,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 40,
  }
});
