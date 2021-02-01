import React from 'react';
import { Text } from 'react-native';
import { Container } from './RequestReplyStyledComponents.js';

/**
 * React functional component that displays the main metadata of a request, such as time and date submitted, subject, and description
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const RequestReply = ({ navigation, route, isLoading, districtPosition, renderAsStudent, email }) => {
    const metadataIconsSize = 22;

    return (
        <Container>
           <Text>
               Hello World
           </Text>
        </Container>
    ); //end return statement
}; //end RequestPreview()

export default RequestReply;