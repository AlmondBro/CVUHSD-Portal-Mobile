import React, { Component } from "react";
import { StyleSheet, View, WebView, Button, Linking, Animated } from "react-native";

import AppLink from "react-native-app-link";
import Collapsible from 'react-native-collapsible';

import LinkButton from "./../linkButton.js";

const blueSectionContent_styles = StyleSheet.create({
    blueSection_Content: {
       flexDirection: 'column',
       justifyContent: 'center'
    },
    webView: {
       flex: 1,
       alignSelf: 'center'
    }
});

class BlueSectionContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            expanded: this.props.expanded,
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.state.expanded !== newProps.expanded) {
            this.setState({expanded: newProps.expanded});
        }
      }
        /* 
        { maxHeight: this.state.expanded ? "100%" : "0%",
        opacity: this.state.expanded ? 1.0 : 0}
        */
    render() {
        return (
            <Collapsible 
                style={blueSectionContent_styles.blueSection_Content}
                collapsed={this.state.expanded}
                duration={750}
            >
                <View>
                    <WebView 
                            style={blueSectionContent_styles.webView}
                            originWhitelist={['*']}
                            source=
                            {{html: "<iframe src='https://www.site24x7.com/sv.do?id=-lTskTIBFC99AjBdJTzdd22ylcZvGBYnfGhcgwvt1-27W89lFFvf7WICSx8TdzUT6kB92hYLWdGYIInKaxcmHcJTzDPBf7IFLjpWmnUEJ18%3D&st=false' scrolling='yes'></iframe>"}}
                            scalesPageToFit={false}
                            javaScriptEnabled={true}
                        />  
                </View>
                
                        <LinkButton 
                            name="Spiceworks"
                            imagePath="CVUHSD-Course-Resources.png"
                            deepLink="spiceworks://"
                        />
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
                    </Collapsible>
        );
    } //end render()
  
} //end BlueSectionContent class

export default BlueSectionContent;