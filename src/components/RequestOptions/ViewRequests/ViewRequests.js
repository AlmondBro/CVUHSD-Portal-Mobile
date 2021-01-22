import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import RequestPreview from './RequestPreview/RequestPreview.js';

//Import styled components
import { Container, RequestTypeTitle, SortFilterButtonsContainer, FilterButton, SortButton, RequestPreviewContainer } from './ViewRequestsStyledComponents.js';
import undefsafe from 'undefsafe';
import { PORTAL_LIVE_LINK, NODEJS_SERVER_PORT, IP_ADDRESS_DEV } from "@env";
import { Reactotron } from '../../../config/reactotron.dev.js';


/**
 * Function to parse the date into a an array, to later extract the time and date subparts.
 * @param { string } stringToParse 
 * @return { array } dateAndTime the dtae and time in one array
 */
const parseDate = (stringToParse) => {
    let dateAndTime = stringToParse.split(" ");

    return dateAndTime;
}; //end parseDate()

/**
 * Function to return a formatted string date.
 * @param { string } dateToChange 
 * @return { string } formattedDate
 */
const dateFormatChange = (dateToChange) => {
    const dateParts = dateToChange.split("/");

    const formattedDate  = dateParts[1] + "/" +  dateParts[0] + "/" + dateParts[2];

    return formattedDate;
};

/**
 * React functional component to house the screen to view all the requests
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const ViewRequests = ({navigation, districtPosition, renderAsStudent}) => {
    const isDev = __DEV__;

    let [ isLoading, setIsLoading ] = useState(false);
    let [ requestPreviews, setRequestPreviews ] = useState([]);

    const loadRequestPreviews = (requests) => {
        let requestRectangles = requests.map((requestObject, index) => {

            let { subject, short_description: description, created_time, status, id, technician, site } = requestObject;
            
            let dateAndTime = parseDate(created_time["display_value"]);

            const date = dateFormatChange(dateAndTime[0]);

            const time = dateAndTime[1] + " " + dateAndTime[2];
            
            status = status.name;

            if (undefsafe(site, "name")) {
                site   =  site.name;
            }
            
            return (
                <RequestPreview
                    navigation          =   { navigation }
                    districtPosition    =   { districtPosition }
                    renderAsStudent     =   { renderAsStudent }

                    subject             =   { subject}
                    description         =   { description }
                    date                =   { date }
                    time                =   { time}
                    status              =   { status }
                    id                  =   { id }
                    isLoading           =   { isLoading }

                    // onClick             =   { () => routeToReqID(requestObject, subject, description, time, date, status, technician, site) }

                    key                 =   { id }
                />
            );

        });

        return requestRectangles;
    }; //end loadRequestRectangles()
    

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

            let requestPreviews = loadRequestPreviews(requests);
            setRequestPreviews(requestPreviews);
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

            <SortFilterButtonsContainer>
                <FilterButton 
                        districtPosition    =   { districtPosition } 
                        renderAsStudent     =   { renderAsStudent }
                />

                <SortButton 
                        districtPosition    =   { districtPosition } 
                        renderAsStudent     =   { renderAsStudent }
                />
            </SortFilterButtonsContainer>
       
            <RequestPreviewContainer>
                <TouchableOpacity activeOpacity={1}>
                    { requestPreviews }
                </TouchableOpacity>
            </RequestPreviewContainer>
        </Container>
    ); //end return
}; //end ViewRequests

export default ViewRequests;