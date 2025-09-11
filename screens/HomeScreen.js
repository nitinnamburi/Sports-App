import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

//  Home screen
export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#cfcfcfff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Home Screen</Text>
      
      {/*Back Buttom*/}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Welcome')}
      >
        <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
    </View>
  );
}


// styles
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d354dfff' },
  title: { color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#4946e4ff', paddingVertical: 10, paddingHorizontal: 24, borderRadius: 12 },
  buttonText: { color: 'white', fontWeight: '700' }
});