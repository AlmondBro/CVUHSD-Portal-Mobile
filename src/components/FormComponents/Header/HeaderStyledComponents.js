import React from 'react';
import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 

const HeaderContainer = styled.View`
    position: absolute;
    top: 0px;
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

    font-size: 18px;
    font-weight: bold;

    margin-right: 5px;

    text-align: center;

    /* background-color: green; */
`;

const CloseIcon = styled(AntDesign)`
    color: white;
    /* background-color: white; */

    margin-right: 20px;

    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
`;

const LeftArrowIcon = styled(FontAwesome5)`
    color: white;
    /* background-color: white; */

    margin-left: 15px;

    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
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

const BackButton = ({ districtPosition, renderAsStudent, onPress }) => {
    return (
        <TouchableOpacity
            onPress = { onPress }
        >
            <LeftArrowIcon 
                    color               =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }
                    name                =   "angle-left" 
                    size                =   {   22  } 

                    districtPosition    =   { districtPosition } 
                />
        </TouchableOpacity>
    ); //end return statement
}; //end CloseIconButton()

export { HeaderContainer, HeaderTitleIconContainer, HeaderText, BackButton, CloseIconButton };