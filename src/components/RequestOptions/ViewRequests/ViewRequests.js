import React from 'react';

//Import styled components
import { Container, RequestTypeTitle } from './ViewRequestsStyledComponents.js';

/**
 * React functional component to house the screen to view all the requests
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const ViewRequests = ({navigation, districtPosition, renderAsStudent}) => {
    return (
        <Container>
            <RequestTypeTitle
              districtPosition    =   { districtPosition } 
              renderAsStudent     =   { renderAsStudent }
            >
                View Requests
            </RequestTypeTitle>
        </Container>
    ); //end return
}; //end ViewRequests

export default ViewRequests;