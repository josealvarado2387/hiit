import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, ScrollView, StyleSheet, Text, View,Image } from 'react-native';
import { CountUp } from 'use-count-up'



export default function App() {
  return (
    
      <View style={styles.container}>
        
    <View style={styles.container1}>
    <Text>Leg Raises</Text>
    <Text>
    <CountUp isCounting start={0} end={20} duration={20} easing="linear" />
    </Text>
    <View style={styles.workout}>
    <Image style={styles.types} source={require('./assets/raises.png')}
    />
    <View style={styles.buttonView}>
            <Button
              title="GO!"
              
            />
            
          </View>

    </View>
    </View>
    </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'slateblue',
    },
    container1: {
      flexDirection: "column",
      flex: 1,
      backgroundColor: 'slateblue',
      alignItems: 'center',
      justifyContent: 'center',
    },

    workout: {
      position:'relative',
      margin:4,
      padding:40,
      borderWidth: 1,
      borderColor: 'red'
    },
    types:{
      width: 400,
    height: 280,
    }
    
  });
  