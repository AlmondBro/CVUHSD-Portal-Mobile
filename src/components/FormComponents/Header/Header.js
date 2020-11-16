import React, { useState, useEffect } from 'react';
import  { Dimensions } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import { HeaderContainer, HeaderTitleIconContainer, HeaderText, CloseIconButton } from  './HeaderStyledComponents.js';

import { useComponentSize } from './.../../../../../utility-functions.js';
const Header = ({ districtPosition, renderAsStudent, title, closeModal }) => {
    //const [size, onLayout] = useComponentSize();

    const [ headerHeight, setHeaderHeight ]  = useState(0);

    const onLayout = (event) => {
        //let { height } = event.nativeEvent.layout;

        const {height} = Dimensions.get('window');
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
                        name    =   "ticket" 
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