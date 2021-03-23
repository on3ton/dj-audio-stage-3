import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av'

class PlayButton1 extends React.Component{
 playSound = async()=>{
    await Audio.Sound.createAsync(
      {uri :  "http://onj3.andrelouis.com/phonetones/unzipped/Meizu%20MX4/notifications/Meteor.mp3" },
      {shouldPlay : true}
    );
  }
  render(){
    return(
      <TouchableOpacity style = {{
        backgroundColor : "red",
        marginLeft : 100,
        borderWidth : 1,
        borderColor : "black",
        alignItems : 'center',
        justifyContent : 'center',
        width : 100,
        height : 50,
        borderRadius : 100
      }}>
        <Text style = {{
          fontSize : 20,
          fontWeight : 'bold'
        }}>
          Sound 1
        </Text>
      </TouchableOpacity>
    )
  }
}

class PlayButton2 extends React.Component{
 playSound = async()=>{
    await Audio.Sound.createAsync(
      {uri : "http://cs.fenix.lt/cstrike/sound/misc/sound.wav"},
      {shouldPlay : true}
    );
  }
  render(){
    return(
      <TouchableOpacity style = {{
        backgroundColor : "orange",
        marginLeft : 100,
        borderWidth : 1,
        borderColor : "black",
        alignItems : 'center',
        justifyContent : 'center',
        width : 100,
        height : 50,
        borderRadius : 100
      }}>
        <Text style = {{
          fontSize : 20,
          fontWeight : 'bold'
        }}>
          Sound 2
        </Text>
      </TouchableOpacity>
    )
  }
}

class PlayButton3 extends React.Component{
 playSound = async()=>{
    await Audio.Sound.createAsync(
      {uri : "http://onj3.andrelouis.com/phonetones/unzipped/Nokia/N95/visualradiostartsound.wav"},
      {shouldPlay : true}
    );
  }
  render(){
    return(
      <TouchableOpacity style = {{
        backgroundColor : "lightblue",
        marginLeft : 100,
        borderWidth : 1,
        borderColor : "black",
        alignItems : 'center',
        justifyContent : 'center',
        width : 100,
        height : 50,
        borderRadius : 100
      }}>
        <Text style = {{
          fontSize : 20,
          fontWeight : 'bold'
        }}>
          Sound 3
        </Text>
      </TouchableOpacity>
    )
  }
}

class PlayButton4 extends React.Component{
 playSound = async()=>{
    await Audio.Sound.createAsync(
      {uri : "http://onj3.andrelouis.com/phonetones/unzipped/Alcatel%20Idol%20X/ringtones/Sunny%20Day.mp3"},
      {shouldPlay : true}
    );
  }
  render(){
    return(
      <TouchableOpacity style = {{
        backgroundColor : "lightgreen",
        marginLeft : 100,
        borderWidth : 1,
        borderColor : "black",
        alignItems : 'center',
        justifyContent : 'center',
        width : 100,
        height : 50,
        borderRadius : 100
      }}>
        <Text style = {{
          fontSize : 20,
          fontWeight : 'bold'
        }}>
          Sound 4
        </Text>
      </TouchableOpacity>
    )
  }
}

class PlayButton5 extends React.Component{
 playSound = async()=>{
    await Audio.Sound.createAsync(
      {uri : "http://onj3.andrelouis.com/phonetones/unzipped/Meizu%20MX4/notifications/The_North_Star.mp3"},
      {shouldPlay : true}
    );
  }
  render(){
    return(
      <TouchableOpacity style = {{
        backgroundColor : "#2196f3",
        marginLeft : 100,
        borderWidth : 1,
        borderColor : "black",
        alignItems : 'center',
        justifyContent : 'center',
        width : 100,
        height : 50,
        borderRadius : 100
      }}>
        <Text style = {{
          fontSize : 20,
          fontWeight : 'bold'
        }}>
          Sound 5
        </Text>
      </TouchableOpacity>
    )
  }
}



export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop: 10}}>
      <PlayButton1/>
      <br/>
      <PlayButton2/>
      <br/>
      <PlayButton3/>
      <br/>
      <PlayButton4/>
      <br/>
      <PlayButton5/>
      </View>
    );
  }
}