import React from "react";
import { StyleSheet, View, Button, Linking } from "react-native";
import AppLink from 'react-native-app-link';

const blueSectionContent_styles = StyleSheet.create({
    blueSectionContent_styles: {
        justifyContent: 'center'
    }
});

const BlueSectionContent = (props) => {
    return (
        <View style={blueSectionContent_styles.blueSection_Content}>
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
                                            playStoreId: "swipe.android.titanHst"
                                    
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
    );
}; //end BlueSectionContent

export default BlueSectionContent;