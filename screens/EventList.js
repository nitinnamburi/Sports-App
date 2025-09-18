import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// This gives us the phone's screen width (used for card sizing later)
const { width } = Dimensions.get('window');

export default function EventList({ route, navigation }) {
    // This comes from the HomeScreen when you pick a sport. It will route to the specific sport's events.

  const { sport } = route.params;

  // Dummy data for now (later: fetch from backend/DB)
  const events = [
    {
      id: '1',
      sport: sport,
      title: `${sport} Match at Central Park`,
      players: 4,
      time: '6:00 PM',
      coordinate: { latitude: 40.785091, longitude: -73.968285 }, // NYC Central Park
    },
    {
      id: '2',
      sport: sport,
      title: `${sport} Friendly Game at Riverside`,
      players: 6,
      time: '7:30 PM',
      coordinate: { latitude: 40.800677, longitude: -73.958055 }, // Riverside
    },
  ];
  // This keeps track of which event is currently "selected"

  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <View style={styles.container}>
      {/* The MapView takes up the whole screen */}
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 40.785091,
          longitude: -73.968285,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Markers show each event on the map */}
        {events.map((event) => (
          <Marker
            key={event.id}
            coordinate={event.coordinate}
            title={event.title}
            description={`${event.players} players • ${event.time}`}
            onPress={() => setSelectedEvent(event.id)}
          />
        ))}
      </MapView>

    {/* Cards at the bottom — scrollable horizontally to show all events in the area */}
      <View style={styles.cardList}>
        <FlatList
          data={events}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDetails}>
                👥 {item.players} players • 🕒 {item.time}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // makes the container fill the screen
  },
  cardList: {
    position: 'absolute', // float on top of the map
    bottom: 30, // push up a little from the bottom
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 10,
    width: width * 0.8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDetails: {
    marginTop: 8,
    color: '#555',
  },
});
