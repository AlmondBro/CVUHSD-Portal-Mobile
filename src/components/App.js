import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import BlueSection from "./BlueSection/BlueSection.js"
import Header from "./Header.js"


const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F4F7F9',
  },

  scrollView: {
    flexDirection: 'column',
    alignSelf: 'stretch'
  },

  blueSectionContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'flex-start'
  }
});

class App extends Component {
  render() {
    return (
      <View style={appStyles.container}>
        <ScrollView contentContainerStyle={appStyles.scrollView}>
          <Header />
          <View style={appStyles.blueSectionContainer}>
            <BlueSection 
              title="Quick Links" 
              expanded={false}
            />
            <BlueSection 
              title="Hi" 
              expanded={true}
            />
              <BlueSection 
              title="Hello" 
              expanded={false}
            />
              <BlueSection 
              title="Bonjour" 
              expanded={true}
            />
              <BlueSection 
              title="Bom dia" 
              expanded={false}
            />
          </View>
          
        </ScrollView>
      </View>
     
    );
  }
}

export default App;