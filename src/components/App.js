import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import BlueSection from "./BlueSection/BlueSection.js"
import Header from "./Header.js"


const app_styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F4F7F9'
  }
});

class App extends Component {
  render() {
    return (
      <View style={app_styles.container}>
        <Header />
        <BlueSection />
      </View>
    );
  }
}

export default App;