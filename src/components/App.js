import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, WebView, Linking } from 'react-native';

import AppLink from 'react-native-app-link';

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
    backgroundColor: 'rgb(30, 108, 147)'
  },

  blueSection_HeaderText: {
    color: "white",
    fontSize: 20
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
        
        <View style={styles.blueSection}>
          <View style={styles.blueSection_Header}>
            <Text style={styles.blueSection_HeaderText}>System</Text>
            <Button style={styles.blueSection_ExpandButton}
                    onPress={() => { console.log("Test")} }
                    title="+"
                    accessibilityLabel="Press this button to expand"
            />
          </View>

          <View style={styles.blueSection_Content}>
            {/* <WebView 
              style={styles.webView}
              originWhitelist={['*']}
              source={{html: "<iframe src='https://www.site24x7.com/sv.do?id=-lTskTIBFC99AjBdJTzdd22ylcZvGBYnfGhcgwvt1-27W89lFFvf7WICSx8TdzUT6kB92hYLWdGYIInKaxcmHcJTzDPBf7IFLjpWmnUEJ18%3D&st=false' scrolling='yes'></iframe>"}}
              
            /> */}
            <Button 
                    onPress={ () => { 
                                      Linking.openURL("spiceworks://")
                                    } 
                            }
                    title="Spiceworks"
                    accessibilityLabel="Press this button to open Lyft"
            />
              <Button 
                    onPress={ () => { 
                                      let titanHST_config = {
                                        appName: "titan-hst",
                                        appStoreId: "855732889",
                                        appStoreLocale: "us",
                                        playStoreId: "swipe.android.swipe.android.titanHst"
                              
                                      };

                                      //Linking.openURL("855732889://");
                                      //Open in App Store:
                                      AppLink.openInStore(titanHST_config);
                                    } 
                            }
                    title="Titan"
                    accessibilityLabel="Press this button to open Lyft"
            />
          </View>
          
        </View>
      </View>
    );
  }
}

export default App;