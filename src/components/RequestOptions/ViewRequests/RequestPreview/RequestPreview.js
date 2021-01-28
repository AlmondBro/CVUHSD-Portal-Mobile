import React from 'react';

import SkeletonContent from 'react-native-skeleton-content';

import {  Container, Content, SkeletonScreen, MetaDataContainer, MetaDataIconTextContainer, MetaDataIcon, MetaDataText, SubjDescContainer, Subject, Description } from './RequestPreviewStyledComponents.js';

/**
 * React functional component that displays the main metadata of a request, such as time and date submitted, subject, and description
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const RequestPreview = ({ navigation, districtPosition, renderAsStudent, subject, description, date, time, id, status, onClick, isLoading }) => {
    const metadataIconsSize = 22;
    
    const truncateDescription = (description) => {
        if (description.length >= 90) {
            let truncatedDescr = description.substr(0, 129);

            let truncDescEllipses = truncatedDescr + "...";
    
            console.log("trunc", truncDescEllipses);
    
            return truncDescEllipses;
        }
        return description;
    };
    
    return (
        <Container>
            <Content
                districtPosition    =   { districtPosition } 
                renderAsStudent     =   { renderAsStudent }
            >
                <MetaDataContainer>
                    <MetaDataIconTextContainer>
                        <MetaDataIcon
                            districtPosition    =   { districtPosition } 
                            renderAsStudent     =   { renderAsStudent }

                             name                =   "clock" 
                             size                =   {   metadataIconsSize  } 
                        />
                        <MetaDataText
                            districtPosition    =   { districtPosition } 
                            renderAsStudent     =   { renderAsStudent }
                        >
                            { time || "11:33 AM" }
                        </MetaDataText>
                    </MetaDataIconTextContainer>

                    <MetaDataIconTextContainer>
                        <MetaDataIcon
                            districtPosition    =   { districtPosition } 
                            renderAsStudent     =   { renderAsStudent }

                             color               =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }
                             name                =   "calendar" 
                             size                =   {   metadataIconsSize  } 
                        />
                        <MetaDataText
                            districtPosition    =   { districtPosition } 
                            renderAsStudent     =   { renderAsStudent }
                        >
                            { date || "12/09/2020" }
                        </MetaDataText>
                    </MetaDataIconTextContainer>

                    <MetaDataIconTextContainer>
                        <MetaDataIcon
                            districtPosition    =   { districtPosition } 
                            renderAsStudent     =   { renderAsStudent }

                            name                =   "circle" 
                            size                =   {   metadataIconsSize  } 
                        />
                        <MetaDataText
                            districtPosition    =   { districtPosition } 
                            renderAsStudent     =   { renderAsStudent }
                        >
                            { status || "Closed" }
                        </MetaDataText>
                    </MetaDataIconTextContainer>
                </MetaDataContainer>

                <SubjDescContainer>
                    <Subject
                        districtPosition    =   { districtPosition } 
                        renderAsStudent     =   { renderAsStudent }
                    >
                        {subject || "Canvas Test" }
                    </Subject>
                    <SkeletonScreen
                        isLoading           =   { true }
                        districtPosition    =   { districtPosition }
                        renderAsStudent     =   { renderAsStudent } 

                        containerWidth      =   { 250 }
                        height              =   { 20 }
                        key                 =   "request-preview-description-skeleton"
                        
                        marginTop           =   { 24 }
                        marginLeft          =   { 45 }
                    >

                    <Description
                        districtPosition    =   { districtPosition } 
                        renderAsStudent     =   { renderAsStudent }
                    >
                        { truncateDescription(description) || "Canvas test rule ticket" }
                    </Description>
                </SkeletonScreen>
                   
                </SubjDescContainer>
              
            </Content>
        </Container>
    ); //end return statement
}; //end RequestPreview()

export default RequestPreview;