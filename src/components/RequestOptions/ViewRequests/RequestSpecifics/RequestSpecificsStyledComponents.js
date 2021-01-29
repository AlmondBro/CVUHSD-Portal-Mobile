import React from 'react';
import styled from 'styled-components/native';

import SkeletonContent from 'react-native-skeleton-content';

import { FontAwesome5 } from '@expo/vector-icons'; 

const baseMarginTop = 38;

const SkeletonScreen = ({ children, width, containerWidth, height, isLoading, districtPosition, renderAsStudent, identifier, marginTop, marginBottom, marginLeft, marginRight }) => {
    return (
        <SkeletonContent
            containerStyle  =   { { flex: 1, width: (isLoading ? containerWidth : "100%"), flexDirection: "row", justifyContent: "center" } }
            isLoading       =   { isLoading } 
            animationType   =   "shiver"

            boneColor       = {
                                    districtPosition ?
                                        ( (districtPosition.toLowerCase() === "student") || renderAsStudent) ? 
                                            "rgba(147, 30, 29, 0.1)": "rgba(30, 108, 147, 0.1)"
                                        : "rgba(147, 30, 29, 0.1)" 
                }
            highlightColor  = {
                                    districtPosition ?
                                    ( (districtPosition.toLowerCase() === "student") || renderAsStudent) ? 
                                        "rgba(147, 30, 29, 0.1)": "rgba(30, 108, 147, 0.1)"
                                    : "rgba(147, 30, 29, 0.1)" 
            }

            layout={[
                { key: identifier, width: (width || "100%"), height: (height || 20), marginTop: (marginTop || 0), marginBottom: (marginBottom || 0), marginLeft: (marginLeft || 0), marginRight: (marginRight || 0)},
            ]}
        >
            { children }
        </SkeletonContent>
    ); //end return statement
}; //end SkeletonScreen()

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    background-color: white;

    /* margin-bottom: 25px; */
`;

const Content = styled.View`
    flex: 1;
    margin-top: ${baseMarginTop}px;

    width: 90%;

    padding-top: 10px;
    /* padding-bottom: 12px; */

`;

// const Separator 

const MetaDataContainer = styled.View`
    flex-direction: column;

    border-bottom-width: 1px;
    /* border-bottom-width: 1px; */
    border-style: solid; 
    border-color: ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
    
    /* padding-left: 15px;
    padding-right: 15px; */
`;

const MetaDataIconTextContainer = styled.View`
    flex-direction: row;
    justify-content: center;

    margin-bottom: 12px;
`;

const MetaDataIcon = styled(FontAwesome5)`
    margin-right: auto;
    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
`;

const MetaDataText = styled.Text`
    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
`;

const SubjDescContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 10px;
`;

const Subject = styled.Text`
    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
    font-family: SourceSansPro_400Regular;
    font-size: 16px;
    text-align: center;
`;

const Description = styled(Subject)`
    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
    font-family: SourceSansPro_400Regular;
    font-size: 13px;
    text-align: center;

    opacity: 0.42;
`;

const HighlightedButton = styled.TouchableOpacity`
    flex: 1;
    width: 100%;
    background-color: ${    props => props.districtPosition ?
                                            ( (props.districtPosition.toLowerCase() === "student") || props.renderAsStudent) ? 
                                                `rgba(147, 30, 29, ${props.buttonPressed ? "0.05" : "0"})`: `rgba(30, 108, 147, ${props.buttonPressed ? "0.05" : "0"})`
                                            :   `rgba(147, 30, 29, ${props.buttonPressed ? "0.05" : "0"})`
                        };
    border-radius: 10px;
    padding: 15px;
`;



export { Container, Content, HighlightedButton, SkeletonScreen, MetaDataContainer, MetaDataIconTextContainer, MetaDataIcon, MetaDataText, SubjDescContainer, Subject, Description };