import React, { useState, useEffect } from 'react';
import  { Dimensions } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import { HeaderContainer, HeaderTitleIconContainer, HeaderText, BackButton, CloseIconButton } from  './HeaderStyledComponents.js';

import { Reactotron } from './../../../config/reactotron.dev.js';

const Header = ({ districtPosition, renderAsStudent, faIcon, title, currentRoute, goBack, closeModal }) => {
    const [ headerHeight, setHeaderHeight ]  = useState(0);
    const [ routeName, setRouteName ]        = useState("request-options");
    const [ headerTitle, setHeaderTitle ]    = useState(title);

    const onLayout = (event) => {
        const { height } = Dimensions.get('window');
        
        setHeaderHeight(height);
    };

    useEffect(() => {
        if (currentRoute) {
            let { name } = currentRoute;
            setRouteName(name);
            setHeaderTitle(name); //Update the title of the header based off the route name
        }
    }, [ currentRoute ]);

    return (
        <HeaderContainer
            districtPosition    =   { districtPosition } 
            renderAsStudent     =   { renderAsStudent }

            headerHeight        =   { headerHeight } 

            onLayout            =   { onLayout }
        >
            {
                goBack && (routeName === "View/Submit Requests") ? null
                : (
                    <BackButton
                        districtPosition    =   { districtPosition } 
                        renderAsStudent     =   { renderAsStudent }
                        onPress             =   { goBack }
                    />
                )
            } 
         
            <HeaderTitleIconContainer>
                <HeaderText>
                    { headerTitle }
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