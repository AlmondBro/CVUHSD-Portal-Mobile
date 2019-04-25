import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, WebView, Linking } from 'react-native';

import BlueSection from "./BlueSection.js"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F4F7F9'
  },

  portalLogoContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 40
  },

  portalLogo: {
    width: 200,
    height: 200
  },

  blueSection: {
    alignItems: "center",
    alignSelf: 'stretch',
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 15
  },

  blueSection_Header: {
    flexDirection: 'row',
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: 'rgb(30, 108, 147)',
    paddingTop: 8,
    paddingBottom: 8
  },

  blueSection_HeaderText: {
    color: "white",
    fontSize: 20,
    marginRight: 12
  },

  blueSection_ExpandButton: {
    color: 'rgb(30, 108, 147)',
    backgroundColor: 'white'
  },
  
  webView: {
  
  }
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.portalLogoContainer}>
          <Image  source={require("./../assets/images/CV-600x600-portal.png")} 
                  style={styles.portalLogo}
          />
        </View>
      <BlueSection />
      </View>
    );
  }
}

export default App;