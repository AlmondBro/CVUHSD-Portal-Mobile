import React from 'react';
import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

import { AntDesign } from '@expo/vector-icons'; 

const HeaderContainer = styled.View`
    position: absolute;
    top: 0;
    z-index: 1;

    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self:  stretch;

    width:  100%;
    background-color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
/* 
    padding-top: 5;
    padding-bottom: 5; */
`;

const HeaderTitleIconContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    margin-right: auto;
    margin-left:  auto;
`;

const HeaderText = styled.Text`
    color: white;

    font-size: 18;
    font-weight: bold;

    margin-right: 5;

    text-align: center;

    /* background-color: green; */
`;

const CloseIcon = styled(AntDesign)`
    color: white;
    /* background-color: white; */

    margin-right: 20;

    padding-top: 5;
    padding-bottom: 5;
    padding-left: 5;
    padding-right: 5;
`;

const CloseIconButton = ({ districtPosition, renderAsStudent, onPress }) => {
    return (
        <TouchableOpacity
            onPress = { onPress }
        >
            <CloseIcon 
                    color               =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }
                    name                =   "closecircle" 
                    size                =   {   30  } 

                    districtPosition    =   { districtPosition } 
                />
        </TouchableOpacity>
    ); //end return statement
}; //end CloseIconButton()

export { HeaderContainer, HeaderTitleIconContainer, HeaderText, CloseIconButton };