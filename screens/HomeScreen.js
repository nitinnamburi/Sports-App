import React, { useState } from 'react'; // brings in React and lets us use "state" to remember things
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // pieces from React Native to build the screen

export default function HomeScreen({ navigation }) { // makes a screen called "HomeScreen", gets navigation so we can move around
  const [selected, setSelected] = useState(null); // keeps track of which sport was picked (starts as nothing)

  const sports = [ // a list of sports with their emoji and names
    { id: 'Tennis', label: '🎾 Tennis', color: "#fd0000ff"},
    { id: 'Pickleball', label: '🏓 Pickleball', color:"#10b981"},
    { id: 'Basketball', label: '🏀 Basketball', color: '#ffbc02ff'},
    { id: 'Volleyball', label: '🏐 Volleyball', color: '#fa0ceeff'},
  ];

  const handleSelect = (sportId) => { // when you click a sport
    setSelected((prev) => (prev === sportId ? null : sportId)); // if it’s already picked, unpick it. If not, pick it
  };

  const handleContinue = () => { // when you press the green button
    if (!selected) return; // if no sport is picked, do nothing
    navigation.navigate('EventList', {sport:selected}); // otherwise, go to EventList screen and send the chosen sport
  };

  return ( // this is what the screen looks like
    <View style={styles.container}> {/* main box that holds everything */}
      <Text style={styles.title}>Choose a Sport</Text> {/* big title text */}

      <View style={styles.grid}> {/* box for the sports in a grid */}
        {sports.map((sport) => { // go through each sport in the list
          const isSelected = selected === sport.id; // check if this sport is picked
          return ( // show a button for each sport
            <TouchableOpacity
              key={sport.id} // unique ID for React
              activeOpacity={0.8} // makes it fade a little when you press
              style={[styles.sportCard, {backgroundColor: sport.color}, isSelected && styles.selectedCard]} // normal card, but purple if picked
              onPress={() => handleSelect(sport.id)} // when pressed, pick this sport
            >
              <Text style={[styles.sportText, isSelected && styles.selectedText]}>
                {sport.label} {/* show the emoji and sport name */}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, !selected && styles.continueDisabled]} // green if ready, gray if no sport
        onPress={handleContinue} // runs the continue function
        disabled={!selected} // button can’t be pressed if no sport
      >
        <Text style={styles.continueText}>
          {selected ? 'Continue' : 'Select a sport to continue'} {/* shows different text depending if you picked something */}
        </Text>
      </TouchableOpacity>

      {/* Back Button (your old style) */}
      <TouchableOpacity
        style={styles.button} // style for back button
        onPress={() => navigation.replace('Welcome')} // when pressed, go back to Welcome screen
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Back</Text> {/* word "Back" */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({ // styles = how things look
  container: {
    flex: 1, // takes up whole screen
    backgroundColor: '#f7ededff', // dark red background
    justifyContent: 'center', // center things up and down
    alignItems: 'center', // center things left to right
    paddingHorizontal: 20, // add space on the sides
  },
  title: {
    fontSize: 28, // big text
    fontWeight: 'bold', // thick letters
    color: 'black', // white letters
    marginBottom: 28, // space under title
  },
  grid: {
    flexDirection: 'row', // put sports in a row
    flexWrap: 'wrap', // let them wrap to new lines
    justifyContent: 'center', // center them
  },
  sportCard: {
    width: 120, // box width
    height: 120, // box height
    margin: 12, // space around each box
    borderRadius: 20, // rounded corners
    justifyContent: 'center', // center text up and down
    alignItems: 'center', // center text left to right
    elevation: 5, // shadow on Android
    shadowColor: '#000', // shadow color
    shadowOpacity: 0.15, // how see-through the shadow is
    shadowOffset: { width: 0, height: 4 }, // where the shadow sits
    shadowRadius: 6, // how blurry the shadow is
  },
  selectedCard: {
    backgroundColor: '#4946e4', // purple when picked
  },
  sportText: {
    color: '#222', // dark gray text
    fontSize: 16, // medium size
    fontWeight: '700', // bold
    textAlign: 'center', // in the middle
  },
  selectedText: {
    color: '#fff', // white letters when picked
  },
  continueButton: {
    marginTop: 28, // space above button
    backgroundColor: '#10b981', // green button
    paddingVertical: 12, // space inside top and bottom
    paddingHorizontal: 28, // space inside left and right
    borderRadius: 24, // rounded button
    alignItems: 'center', // text in middle
  },
  continueDisabled: {
    backgroundColor: '#6b7280', // gray button if not ready
  },
  continueText: {
    color: 'white', // white letters
    fontWeight: '700', // bold
    fontSize: 16, // medium size
  },
  // your old back button style
  button: {
    marginTop: 40, // space above
    backgroundColor: '#4946e4ff', // purple background
    paddingVertical: 12, // space inside top/bottom
    paddingHorizontal: 32, // space inside left/right
    borderRadius: 20, // rounded button
    alignItems: 'center', // text in middle
  },
});
