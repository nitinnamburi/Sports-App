// 👇 this MUST be the very first line
import 'react-native-gesture-handler';

// core React imports
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import screens
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import EventList from './screens/EventList';

// create stack
const Stack = createNativeStackNavigator();





// main app with navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EventList" component={EventList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
