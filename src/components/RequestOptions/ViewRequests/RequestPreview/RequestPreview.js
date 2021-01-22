import React from 'react';

import {  Container, Content, MetaDataContainer, MetaDataIconTextContainer, MetaDataIcon, MetaDataText, Subject, Description } from './RequestPreviewStyledComponents.js';

/**
 * React functional component that displays the main metadata of a request, such as time and date submitted, subject, and description
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const RequestPreview = ({ navigation, districtPosition, renderAsStudent}) => {
    return (
        <Container>
            <Content>

                <MetaDataContainer>
                    <MetaDataIconTextContainer>
                        <MetaDataIcon
                             color               =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }
                             name                =   "clock" 
                             size                =   {   30  } 
                        />
                        <MetaDataText>
                            Time
                        </MetaDataText>
                    </MetaDataIconTextContainer>

                    <MetaDataIconTextContainer>
                        <MetaDataIcon
                             color               =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }
                             name                =   "calendar" 
                             size                =   {   30  } 
                        />
                        <MetaDataText>
                            Date
                        </MetaDataText>
                    </MetaDataIconTextContainer>

                    <MetaDataIconTextContainer>
                        <MetaDataIcon
                            color               =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }
                            name                =   "circle" 
                            size                =   {   30  } 
                        />
                        <MetaDataText>
                            Ticket Type
                        </MetaDataText>
                    </MetaDataIconTextContainer>
                </MetaDataContainer>

                <Subject>
                    Canvas Test
                </Subject>
                <Description>
                    Canvas test rule ticket
                </Description>

            </Content>
        </Container>
    ); //end return statement
}; //end RequestPreview()

export default RequestPreview;