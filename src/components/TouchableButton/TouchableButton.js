import React from 'react';
import { Platform } from 'react-native';

// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Text } from './TouchableButtonStyledComponents';

/*
    TODO: 
    Find out why react-native-gesture-handler's 
    TouchableOpacity does not work in Android. 
    Conditional requiring is the workaround for 
    now.
*/
const TouchableButton = ({ renderAsStudent, districtPosition, buttonTitle, color, bgColor, width, children, onPress }) => {
   let TouchableOpacity;

    if (Platform.OS === "ios") {
        TouchableOpacity = require("react-native-gesture-handler").TouchableOpacity;
    } else {
        TouchableOpacity = require("react-native").TouchableOpacity;
    }

    return (
        <TouchableOpacity
            activeOpacity   =   {0.5}
            onPress         =   { onPress }
        >
            <Container
                width               =   { width }
                color               =   { color }
                bgColor             =   { bgColor }
                
                districtPosition    =   { districtPosition }
                renderAsStudent     =   { renderAsStudent } 
            >
                {   (buttonTitle && !children) ? 
                    (
                        <Text
                            color               =   { color }

                            districtPosition    =   { districtPosition }
                            renderAsStudent     =   { renderAsStudent } 
                        >
                            { buttonTitle || "Sign In" }
                        </Text>
                    )   : null
                }
                { children }
            </Container>
        </TouchableOpacity>
    ); //end return
}; //TouchableButton

export default TouchableButton;