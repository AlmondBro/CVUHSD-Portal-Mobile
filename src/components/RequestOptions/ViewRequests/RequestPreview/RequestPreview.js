import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import {  Container, Content, HighlightedButton, SkeletonScreen, MetaDataContainer, MetaDataIconTextContainer, MetaDataIcon, MetaDataText, SubjDescContainer, Subject, Description } from './RequestPreviewStyledComponents.js';

/**
 * React functional component that displays the main metadata of a request, such as time and date submitted, subject, and description
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const RequestPreview = ({ navigation, districtPosition, renderAsStudent, subject, description, date, time, id, status, onClick, isLoading }) => {
    const metadataIconsSize = 22;

    let [ faIconName, setFAIcon ] = useState("spinner");
    let [ buttonPressed, setButtonPressed ] = useState(false);

    const getFAIcon = (status) => {
        let faIcon;

        switch(status) {
            case "All":
                setFAIcon("tasks");
            break;

            case "Open":
                setFAIcon("circle");
            break;

            case "In Progress":
                setFAIcon("angle-double-right");
            break;

            case "Closed":
                setFAIcon("check");
            break;

            default:
                setFAIcon("spinner");
                
        }

        return faIcon;
    }; 
    
    const truncateDescription = (description) => {
        if (description && description.length >= 90) {
            let truncatedDescr = description.substr(0, 129);

            let truncDescEllipses = truncatedDescr + "...";
    
            return truncDescEllipses;
        }
        return description;
    };
    
    useEffect(() => {
        getFAIcon(status);
    }, [ status ]);

    return (
        <Container>
            <Content
                districtPosition    =   { districtPosition } 
                renderAsStudent     =   { renderAsStudent }
            >
                <HighlightedButton
                    districtPosition    =   { districtPosition } 
                    renderAsStudent     =   { renderAsStudent }

                    activeOpacity       =   { 1.0 }
                    buttonPressed       =   { buttonPressed }

                    onPressIn           =   { () => setButtonPressed(true) }
                    onPressOut           =   { () => setButtonPressed(false) }
                >
                    <MetaDataContainer>
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
                                identifier          =   {`request-preview-date-skeleton-${Math.random()*1000+1}`}
                                
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
                                identifier          =   {`request-preview-date-skeleton-${Math.random()*1000+1}`}
                                
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

                        <MetaDataIconTextContainer>
                            {
                                isLoading ? (
                                    <SkeletonScreen 
                                        isLoading           =   { isLoading }
                                        districtPosition    =   { districtPosition }
                                        renderAsStudent     =   { renderAsStudent } 

                                        containerWidth      =   { 50 }
                                        width               =   { 25 }
                                        height              =   { 15 }
                                        identifier          =   {`request-preview-status-icon-skeleton-${Math.random()*1000+1}`}
                                        
                                        marginTop           =   { 8 }
                                        marginLeft          =   { 0 }
                                        marginRight         =   { "auto" }
                                    >
                                        <MetaDataIcon
                                            districtPosition    =   { districtPosition } 
                                            renderAsStudent     =   { renderAsStudent }

                                            name                =   { faIconName } 
                                            size                =   {   metadataIconsSize  } 
                                        />
                                    </SkeletonScreen>
                                ) : (
                                    <MetaDataIcon
                                        districtPosition    =   { districtPosition } 
                                        renderAsStudent     =   { renderAsStudent }

                                        name                =   { faIconName } 
                                        size                =   {   metadataIconsSize  } 
                                    />
                                )
                            }
                            
                            <SkeletonScreen
                                isLoading           =   { isLoading }
                                districtPosition    =   { districtPosition }
                                renderAsStudent     =   { renderAsStudent } 

                                containerWidth      =   { 50 }
                                width               =   { 80 }
                                height              =   { 15 }
                                identifier          =   {`request-preview-req-status-skeleton-${Math.random()*1000+1}`}
                                
                                marginTop           =   { 8 }
                                marginLeft          =   { -30 }
                                marginRight         =   { "auto" }
                            >
                                <MetaDataText
                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }
                                >
                                    { status || "Closed" }
                                </MetaDataText>
                            </SkeletonScreen>
                        </MetaDataIconTextContainer>
                    </MetaDataContainer>

                    <SubjDescContainer>
                        <SkeletonScreen
                            isLoading           =   { isLoading }
                            districtPosition    =   { districtPosition }
                            renderAsStudent     =   { renderAsStudent } 

                            containerWidth      =   { 300 }
                            height              =   { 20 }
                            identifier          =   {`request-preview-subject-skeleton-${Math.random()*1000+1}`}
                            
                            marginTop           =   { 24 }
                            marginLeft          =   { 45 }
                        >
                            <Subject
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }
                            >
                                {subject || "Canvas Test" }
                            </Subject>
                        </SkeletonScreen>
                        <SkeletonScreen
                            isLoading           =   { isLoading }
                            districtPosition    =   { districtPosition }
                            renderAsStudent     =   { renderAsStudent } 

                            containerWidth      =   { 250 }
                            height              =   { 20 }
                            identifier          =   {`request-preview-description-skeleton-${Math.random()*1000+1}`}
                            
                            marginTop           =   { 24 }
                            marginLeft          =   { 95 }
                        >
                            <Description
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }
                            >
                                { truncateDescription(description) || "Canvas test rule ticket" }
                            </Description>
                        </SkeletonScreen>
                    </SubjDescContainer>
                </HighlightedButton>
            </Content>
        </Container>
    ); //end return statement
}; //end RequestPreview()

export default RequestPreview;