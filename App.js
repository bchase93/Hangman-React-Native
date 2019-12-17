import React, { Component } from 'react';
import {Button, Image, Text, View } from 'react-native';


//C:\Users\Brandon Chase\Documents\SideProjects\HangmanNative\HangmanNative\Images\hangman0.png
//Images\hangman0.png
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Brandon's App!</Text>
        <Image source={require('./Images/hangman0.png')}/>
        <Button
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Press Me"
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
