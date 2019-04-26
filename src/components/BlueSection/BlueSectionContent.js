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
            heightAnimation: this.props.expanded ? new Animated.Value(300) : new Animated.Value(0) ,
            opacityAnimation: this.props.expanded ? new Animated.Value(1.0) : new Animated.Value(0) 
        }
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : 300
        });
    }

    _setMinHeight(event){
        // event.nativeEvent.layout.height
        this.setState({
            minHeight   : 0
        });
    }

    heightAnimationToggle(){
        console.log("animationToggle");
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        // this.setState({
        //     expanded : !this.state.expanded
        // });

        this.state.heightAnimation.setValue(0);
        Animated.spring(
            this.state.heightAnimation,
            {
                toValue: 300
            }
        ).start();
    }

    opacityAnimationToggle(){
        console.log("animationToggle");
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        // this.setState({
        //     expanded : !this.state.expanded
        // });

        this.state.opacityAnimation.setValue(0);
        Animated.timing(
            this.state.opacityAnimation,
            {
                toValue: 1.0,
                duration: 1000
            }
        ).start();
    }

    componentWillReceiveProps(newProps) {
        if (this.state.expanded !== newProps.expanded) {
            this.setState({expanded: newProps.expanded});
            this.heightAnimationToggle();
            this.opacityAnimationToggle();
        }
      }
/* 
    { maxHeight: this.state.expanded ? "100%" : "0%",
    opacity: this.state.expanded ? 1.0 : 0}
*/
    render() {
        return (
            <Animated.View style={[
                blueSectionContent_styles.blueSection_Content,
                    { maxHeight: this.state.heightAnimation,
                    opacity: this.state.opacityAnimation}
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
                    </Animated.View>
        );
    } //end render()
  
} //end BlueSectionContent class

export default BlueSectionContent;