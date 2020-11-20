import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Container, Text } from './TouchableButtonStyledComponents';

const TouchableButton = ({ renderAsStudent, districtPosition, buttonTitle, color, bgColor, children, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity   =   {0.5}
            onPress         =   { onPress }
        >
            <Container
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