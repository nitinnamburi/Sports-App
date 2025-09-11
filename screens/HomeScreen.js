import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const sports = [
    { name: 'Tennis' },
    { name: 'Pickleball' },
    { name: 'Basketball' },
    { name: 'Volleyball' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Sport</Text>

      <View style={styles.grid}>
        {sports.map((sport) => (
          <TouchableOpacity
            key={sport.name}
            style={styles.sportCard}
            onPress={() => navigation.navigate('EventList', { sport: sport.name })}
          >
            <Text style={styles.sportText}>{sport.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Welcome')}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#220606ff' },
  title: { fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 40 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  sportCard: {
    width: 120,
    height: 120,
    backgroundColor: '#4946e4ff',
    margin: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 5, // for Android shadow
  },
  sportText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    marginTop: 40,
    backgroundColor: '#4946e4ff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    alignItems: 'center',
  },
});
