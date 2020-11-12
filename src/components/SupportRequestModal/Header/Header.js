import React from 'react';

import { FontAwesome } from '@expo/vector-icons'; 

import { HeaderContainer, HeaderTitleIconContainer, HeaderText, CloseIconButton } from  './HeaderStyledComponents.js';

const Header = ({ districtPosition, renderAsStudent, title, closeModal }) => {
    return (
        <HeaderContainer
            districtPosition    =   { districtPosition } 
            renderAsStudent     =   { renderAsStudent }
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