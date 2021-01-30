import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { CountUp } from 'use-count-up'



export default function App() {
  return (
    
    <View style={styles.container}>
    <View>
    <Text>Choose your Body Type</Text>
    <Image style={styles.types} source={require('./assets/types.jpg')}
    />
    </View>
    
    <View style={styles.workout}>

    
    <View style={styles.buttonView}>
    <Button
    title="mesomorph"
    
    />
    
    </View>
    </View>
    <View style={styles.workout}>
    
    <View style={styles.buttonView}>
    <Button
    title="ectomorph"
    
    />
    
    </View>
    </View>
    <View style={styles.workout}>
    
    <View style={styles.buttonView}>
    <Button
    title="Endomorph"
    
    />
    
    </View>
    </View>
    
    <StatusBar style="auto" />
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
    workout: {
      position:'relative',
      margin:4,
      padding:40,
      borderWidth: 1,
      borderColor: 'red',
      
    },
    types:{
      width: 400,
    height: 230,
    }
    
  });
  