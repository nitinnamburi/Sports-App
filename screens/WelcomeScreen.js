
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';




// Welcome screen (where you start)
export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SportsApp!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}



// styles
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d354dfff' },
  title: { color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#4946e4ff', paddingVertical: 12, paddingHorizontal: 32, borderRadius: 24 },
  buttonText: { color: 'white', fontWeight: '700' }
});
