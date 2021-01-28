import React from 'react';
import styled from 'styled-components/native';

import SkeletonContent from 'react-native-skeleton-content';

import { FontAwesome5 } from '@expo/vector-icons'; 

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

    margin-bottom: 25px;
`;

const Content = styled.View`
    width: 90%;

    border-top-width: 1px;
    /* border-bottom-width: 1px; */
    border-style: solid; 
    border-color: ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};

    padding-top: 25px;
    /* padding-bottom: 12px; */

`;

// const Separator 

const MetaDataContainer = styled.View`
    flex-direction: column;
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
    flex-direction: column;
    justify-content: center;
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

    margin-top: 12px;

    opacity: 0.42;
`;



export { Container, Content, SkeletonScreen, MetaDataContainer, MetaDataIconTextContainer, MetaDataIcon, MetaDataText, SubjDescContainer, Subject, Description };