import React, { useState, useEffect } from 'react';
import  { Dimensions } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import { HeaderContainer, HeaderTitleIconContainer, HeaderText, CloseIconButton } from  './HeaderStyledComponents.js';

const Header = ({ districtPosition, renderAsStudent, title, faIcon, closeModal }) => {
    const [ headerHeight, setHeaderHeight ]  = useState(0);

    const onLayout = (event) => {
        const { height } = Dimensions.get('window');
        
        setHeaderHeight(height);
    };

    useEffect(() => {
        console.log("headerHeight:\t", headerHeight);
    }, [ headerHeight ]);
    return (
        <HeaderContainer
            districtPosition    =   { districtPosition } 
            renderAsStudent     =   { renderAsStudent }

            headerHeight        =   { headerHeight } 

            onLayout            =   { onLayout }
        >
            <HeaderTitleIconContainer>
                <HeaderText>
                    { title }
                </HeaderText>
                <FontAwesome 
                        name    =   { faIcon || "ticket"} 
                        size    =   {   30  } 
                        color   =   "white" 
                />
            </HeaderTitleIconContainer>
          
            <CloseIconButton
                districtPosition    =   { districtPosition } 
                renderAsStudent     =   { renderAsStudent }
                onPress             =   { closeModal }
            />
        </HeaderContainer>
    ); //end return statement
}; //end Header()

export default Header;