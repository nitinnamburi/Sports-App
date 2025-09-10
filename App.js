import React from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SportsApp!</Text>
      <Button title="Get Started" onPress={() => alert('Button clicked!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 
    justifyContent: 'center', 
    alignItems: 'center',     
    backgroundColor: '#7d3fb1ff', 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  }


});
