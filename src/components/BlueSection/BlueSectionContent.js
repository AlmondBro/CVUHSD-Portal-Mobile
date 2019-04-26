import React, { Component } from "react";
import { StyleSheet, View, Button, Linking, Animated } from "react-native";

import AppLink from "react-native-app-link";

import LinkButton from "./../linkButton.js";

const blueSectionContent_styles = StyleSheet.create({
    blueSection_Content: {
       flexDirection: 'column',
       justifyContent: 'center'
    }
});

class BlueSectionContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            expanded: this.props.expanded,
            animation: new Animated.Value()
        }
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    componentWillReceiveProps(newProps) {
        if (this.state.expanded !== newProps.expanded) {
          this.setState({expanded: newProps.expanded});
        }
      }

    render() {
        return (
            <View style={[
                blueSectionContent_styles.blueSection_Content,
                    { height: this.state.expanded ? 300 : 0,
                        opacity: this.state.expanded ? 1.0 : 0}
                ]}

                onLayout={this._setMinHeight.bind(this)}
            >
                    {/* <WebView 
                        style={styles.webView}
                        originWhitelist={['*']}
                        source={{html: "<iframe src='https://www.site24x7.com/sv.do?id=-lTskTIBFC99AjBdJTzdd22ylcZvGBYnfGhcgwvt1-27W89lFFvf7WICSx8TdzUT6kB92hYLWdGYIInKaxcmHcJTzDPBf7IFLjpWmnUEJ18%3D&st=false' scrolling='yes'></iframe>"}}
                        
                    /> */}
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
                    </View>
        );
    } //end render()
  
} //end BlueSectionContent class

export default BlueSectionContent;