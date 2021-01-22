import React from 'react';

import {  Container, Content, MetaDataContainer, MetaDataIconTextContainer, MetaDataIcon, MetaDataText, SubjDescContainer, Subject, Description } from './RequestPreviewStyledComponents.js';

/**
 * React functional component that displays the main metadata of a request, such as time and date submitted, subject, and description
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const RequestPreview = ({ navigation, districtPosition, renderAsStudent}) => {
    const metadataIconsSize = 22;
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
                            Time
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
                            Date
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
                            Ticket Type
                        </MetaDataText>
                    </MetaDataIconTextContainer>
                </MetaDataContainer>

                <SubjDescContainer>
                    <Subject
                        districtPosition    =   { districtPosition } 
                        renderAsStudent     =   { renderAsStudent }
                    >
                        Canvas Test
                    </Subject>
                    <Description
                        districtPosition    =   { districtPosition } 
                        renderAsStudent     =   { renderAsStudent }
                    >
                        Canvas test rule ticket
                    </Description>
                </SubjDescContainer>
              
            </Content>
        </Container>
    ); //end return statement
}; //end RequestPreview()

export default RequestPreview;