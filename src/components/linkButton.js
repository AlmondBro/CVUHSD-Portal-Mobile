import React from "react";
import { StyleSheet, Image, TouchableHighlight, Linking } from "react-native";

import AppLink from 'react-native-app-link';

const serviceButton_styles = StyleSheet.create({
    touchableHighlight: {
       alignSelf: 'center',
       marginTop: 13,
       marginBottom: 13
    },

    image: {
        
    }
});

const LinkButton = (props) => {
    imagePathString = `./../assets/images/Buttons/${props.imagePath}`;

    openLink = () => {
        Linking.openURL(props.deepLink)
    };

    return (
        <TouchableHighlight 
            style={serviceButton_styles.touchableHighlight}
            onPress={this.openLink}
        >
            <Image  style={serviceButton_styles.image}
                    source={require(`./../assets/images/Buttons/CVUHSD-Course-Resources.png`)}  
                    accessibilityLabel={props.name}
                    accessible={props.name ? true : false}
            />
        </TouchableHighlight>
    );
};

export default LinkButton;