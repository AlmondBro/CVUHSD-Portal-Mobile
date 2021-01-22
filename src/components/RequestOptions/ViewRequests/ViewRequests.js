import React, { useState, useEffect } from 'react';

import RequestPreview from './RequestPreview/RequestPreview.js';

//Import styled components
import { Container, RequestTypeTitle, RequestPreviewContainer } from './ViewRequestsStyledComponents.js';

import { PORTAL_LIVE_LINK, NODEJS_SERVER_PORT, IP_ADDRESS_DEV } from "@env";
import { Reactotron } from '../../../config/reactotron.dev.js';

/**
 * React functional component to house the screen to view all the requests
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */

const ViewRequests = ({navigation, districtPosition, renderAsStudent}) => {
    const isDev = __DEV__;

    let [ isLoading, setIsLoading ] = useState(false);

    const getUserRequests = async (email = "lopezj@centinela.k12.ca.us", requestsType = "All") => {
        let requests = [];
        setIsLoading(true);

        const getUserRequests_URL = `${isDev ? `http://${IP_ADDRESS_DEV}:${NODEJS_SERVER_PORT}` : `https://${PORTAL_LIVE_LINK}/server`}/helpdesk/request/read/all/user`;
        const getUserRequests_Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Credentials": true
        };
    
        let requestsResponse = await fetch(getUserRequests_URL, {
            method: 'POST',
            headers: getUserRequests_Headers,
            body: JSON.stringify({ email, requestsType } )
        })
        .then((serverResponse) => serverResponse.json()) //Parse the JSON of the response
        .then((jsonResponse) => jsonResponse)
        .catch((error) => {
            console.error(`getUserRequests() Fetch -- Catching error:\t ${error}`);
        });

        if (requestsResponse && !requestsResponse.error) {
            requests = requestsResponse.requests;
            setIsLoading(false);
        } else {
            console.log(`Error in fetching the requests.`);

            requests = [];
        }

        return requests;
    }; //end getUserRequests

    
    useEffect(() => {
        (async () => {
            let requests = await getUserRequests();
            Reactotron.log("requests:\t", requests);
        })();
    }, []);

    return (
        <Container>
            <RequestTypeTitle
              districtPosition    =   { districtPosition } 
              renderAsStudent     =   { renderAsStudent }
            >
                All Requests
            </RequestTypeTitle>

            <RequestPreviewContainer>
                <RequestPreview
                    navigation          =   { navigation }
                    districtPosition    =   { districtPosition } 
                    renderAsStudent     =   { renderAsStudent }
                />
                 


            </RequestPreviewContainer>
        </Container>
    ); //end return
}; //end ViewRequests

export default ViewRequests;