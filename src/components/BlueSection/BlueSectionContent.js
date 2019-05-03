import React, { Component } from "react";
import { StyleSheet, View, WebView} from "react-native";

import AppLink from "react-native-app-link";
import Collapsible from 'react-native-collapsible';

import LinkButton from "../LinkButton.js";

const blueSectionContent_styles = StyleSheet.create({
    blueSection_Content: {
       flexDirection: 'column',
       justifyContent: 'center'
    },
    webView: {
       flex: 1,
       alignSelf: 'center',
       height: 150,
       width: 250,
       backgroundColor: "#F4F7F9"
    }
});

class BlueSectionContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            expanded: this.props.expanded,
        } //end this.state object
    } //end constructor(props)

    /* 
        { maxHeight: this.state.expanded ? "100%" : "0%",
        opacity: this.state.expanded ? 1.0 : 0}
        */
    componentWillReceiveProps = (newProps) => {
        if (this.state.expanded !== newProps.expanded) {
            this.setState({expanded: newProps.expanded});
        }
      } //end componentWillReceiveProps(newProps)
        
    generateBlueSectionButtons = () => {
        console.log("generateBlueSectionButtons()");

        if ( ( typeof(this.props.buttons) !== "undefined" ) ) {

                    let buttonsArray = Object.values(this.props.buttons);

                    return [...buttonsArray].map( (buttonObject, index) => {
                            
                            /* Group buttons in tabs of four */
                            if (index %4 === 0 && index >= 4 ) {
                                return (
                                    <View key={index}></View>
                                    ); 
                            }  

                    return (<LinkButton 
                                key={index} 
                                buttonLink={buttonObject.buttonLink} 
                                buttonImg={buttonObject.buttonImg} 
                                description={buttonObject.description}
                            />); 
                    }); 

            /* For loop can work here, but it does not return any new values whereas map does: 
                Source: https://stackoverflow.com/questions/45576223/why-are-for-loops-not-allowed-in-react-jsx
            */
           /*
            let buttonsArray = [];
            for (let i=0; i < props.buttons.length; i++) {
                buttonsArray.push(<BlueSectionButton 
                                    key={i} 
                                    buttonLink={props.buttons.buttonLink} 
                                    buttonImg={props.buttons.buttonImg} 
                                />);
            }
            
            return buttonsArray; */
        
        } //end else-statement
    };

    render() {
        return this.props.serviceStatuses ? (
            <Collapsible 
                style={blueSectionContent_styles.blueSection_Content}
                collapsed={this.state.expanded}
                duration={750}
            >
                <WebView 
                        style={blueSectionContent_styles.webView}
                        originWhitelist={['*']}
                        source=
                        {{html: "<iframe src='https://www.site24x7.com/sv.do?id=-lTskTIBFC99AjBdJTzdd22ylcZvGBYnfGhcgwvt1-27W89lFFvf7WICSx8TdzUT6kB92hYLWdGYIInKaxcmHcJTzDPBf7IFLjpWmnUEJ18%3D&st=false' scrolling='yes'></iframe>"}}
                        scalesPageToFit={false}
                        javaScriptEnabled={true}
                        injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=0.5, maximum-scale=0.5, user-scalable=2.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
                        useWebKit={false}
                />  
                </Collapsible>
        ) : (
                <Collapsible 
                    style={blueSectionContent_styles.blueSection_Content}
                    collapsed={this.state.expanded}
                    duration={750}
                >

                    { this.generateBlueSectionButtons() }
                    {/* <LinkButton 
                        name="Spiceworks"
                        imagePath="CVUHSD-Course-Resources.png"
                        deepLink="spiceworks://"
                    /> */}
                    {/* <Button 
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
                    />  */}
                </Collapsible>
        );
    } //end render()
  
} //end BlueSectionContent class

export default BlueSectionContent;