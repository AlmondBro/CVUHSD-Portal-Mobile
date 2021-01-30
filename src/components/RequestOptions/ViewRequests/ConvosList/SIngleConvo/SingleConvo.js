import React, { useState, useEffect } from 'react';
import undefsafe from 'undefsafe';

import { TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Content, HighlightedButton, SkeletonScreen, MetaDataContainer, MetaDataIconTextContainer, MetaDataIcon, MetaDataText, SubjDescContainer, Subject, DescrScrollContainer, Description } from './SingleConvoStyledComponents.js';

import { PORTAL_LIVE_LINK, NODEJS_SERVER_PORT, IP_ADDRESS_DEV } from "@env";
/**
 * React functional component that displays the main metadata of a request, such as time and date submitted, subject, and description
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const SingleConvo = ({ navigation, route, email, districtPosition, renderAsStudent, description, date, time, author }) => {
    const isDev = __DEV__;
    const metadataIconsSize = 22;

    let [ isLoading, setIsLoading ]     = useState(false);

    //let { id, date, time } = route.params;

    // description = "hi";

   
    useEffect(() => {
    }, []); 

    return (
        <Container>
            <Content
                districtPosition    =   { districtPosition } 
                renderAsStudent     =   { renderAsStudent }
            >
                {/* <HighlightedButton
                    districtPosition    =   { districtPosition } 
                    renderAsStudent     =   { renderAsStudent }

                    activeOpacity       =   { 1.0 }
                    buttonPressed       =   { buttonPressed }

                    onPressIn           =   { () => setButtonPressed(true) }
                    onPressOut          =   { () => setButtonPressed(false) }
                > */}
                    <MetaDataContainer
                        districtPosition    =   { districtPosition }
                        renderAsStudent     =   { renderAsStudent } 
                    >
                        <MetaDataIconTextContainer>
                            <MetaDataIcon
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }

                                name                =   "clock" 
                                size                =   {   metadataIconsSize  } 
                            />

                            <SkeletonScreen 
                                isLoading           =   { isLoading }
                                districtPosition    =   { districtPosition }
                                renderAsStudent     =   { renderAsStudent } 

                                containerWidth      =   { 50 }
                                width               =   { 90 }
                                height              =   { 15 }
                                identifier          =   {`request-specifics-date-skeleton-${Math.random()*1000+1}`}
                                
                                marginTop           =   { 8 }
                                marginLeft          =   { 0 }
                            >
                                <MetaDataText
                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }
                                >
                                    { time || "11:33 AM" }
                                </MetaDataText>
                            </SkeletonScreen>
                        </MetaDataIconTextContainer>

                        <MetaDataIconTextContainer>
                            <MetaDataIcon
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }

                                color               =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }
                                name                =   "calendar" 
                                size                =   {   metadataIconsSize  } 
                            />

                            <SkeletonScreen
                                isLoading           =   { isLoading }
                                districtPosition    =   { districtPosition }
                                renderAsStudent     =   { renderAsStudent } 

                                containerWidth      =   { 50 }
                                width               =   { 100 }
                                height              =   { 15 }
                                identifier          =   {`request-specifics-date-skeleton-${Math.random()*1000+1}`}
                                
                                marginTop           =   { 8 }
                                marginLeft          =   { 0 }
                            >
                                <MetaDataText
                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }
                                >
                                    { date || "12/09/2020" }
                                </MetaDataText>
                            </SkeletonScreen>
                        
                        </MetaDataIconTextContainer>

                    </MetaDataContainer>

                    <SubjDescContainer>
                        <SkeletonScreen
                            isLoading           =   { isLoading }
                            districtPosition    =   { districtPosition }
                            renderAsStudent     =   { renderAsStudent } 

                            flexValue           =   { -1 }
                            flexDirection       =   "column"
                            numberOfLines       =   { 10 }

                            containerWidth      =   { 250 }
                            height              =   { 20 }
                            identifier          =   {`request-specifics-description-skeleton-${Math.random()*1000+1}`}
                            
                            marginTop           =   { 24 }
                            marginLeft          =   { "18%" }
                        >
                            <DescrScrollContainer extraScrollHeight={50} viewIsInsideTabBar={true}>
                                <TouchableOpacity activeOpacity = { 1.0 }>
                                    <Description
                                        districtPosition    =   { districtPosition } 
                                        renderAsStudent     =   { renderAsStudent }
                                    >
                                        { description || "Canvas test rule ticket" }
                                    </Description>
                                </TouchableOpacity>
                            </DescrScrollContainer>
                        </SkeletonScreen>
                    </SubjDescContainer>
                {/* </HighlightedButton> */}
            </Content>
        </Container>
    ); //end return statement
}; //end RequestPreview()

export default SingleConvo;