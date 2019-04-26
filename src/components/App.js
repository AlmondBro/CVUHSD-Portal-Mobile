import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';

import BlueSection from "./BlueSection/BlueSection.js"
import Header from "./Header.js"

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#F4F7F9',
    padding: 0,
    margin: 0
  },

  scrollView: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    padding: 0
  },

  blueSectionContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0
  }
});

class App extends Component {

  getWidth = () => {
    return {
        width: Dimensions.get('window').width
    }
  }

  getHeight= () => {
    return {
        height: Dimensions.get('window').height
    }
  }

  render() {
    return (
      <View style={appStyles.container}>
        <ScrollView contentContainerStyle={appStyles.scrollView}>
          <Header />
          {/*  Had to hardcode the width of this view to get it to stretch horizontally
                using the Dimensions module 
            */}
          <View style={[appStyles.blueSectionContainer, this.getWidth()]}>
            <Text style={{backgroundColor: 'red', alignSelf: 'stretch'}}>Test</Text>
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