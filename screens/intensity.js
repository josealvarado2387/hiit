import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CountUp } from 'use-count-up'



export default function App() {
  return (
    
    <View style={styles.container}>
    <View>
    <Text>Choose your level of Intensity</Text>
    </View>
    
    <View style={styles.workout}>
    
    <View style={styles.buttonView}>
    <Button
    title="Low"
    
    />
    
    </View>
    </View>
    <View style={styles.workout}>
    
    <View style={styles.buttonView}>
    <Button
    title="Medium"
    
    />
    
    </View>
    </View>
    <View style={styles.workout}>
    
    <View style={styles.buttonView}>
    <Button
    title="High"
    
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
    }
    
  });
  