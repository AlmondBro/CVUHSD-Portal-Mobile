import React, { useState, useEffect, useRef, Fragment } from 'react';
import { TouchableOpacity } from 'react-native';

import RequestPreview from './RequestPreview/RequestPreview.js';
// import RequestSpecifics from './RequestSpecifics/RequestSpecifics.js';

import undefsafe from 'undefsafe';
import { useActionSheet } from '@expo/react-native-action-sheet';

import { PORTAL_LIVE_LINK, NODEJS_SERVER_PORT, IP_ADDRESS_DEV } from "@env";
import { Reactotron } from '../../../config/reactotron.dev.js';

//Import styled components
import { Container, RequestTypeTitle, SortFilterButtonsContainer, Button, RequestPreviewContainer, NoRequestsMessage } from './ViewRequestsStyledComponents.js';

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

// /**
//  * @param { string } districtPosition string to indicate a school district user's role  
//  * @param { boolean } renderAsStudent boolean to indicate whether to render the student color scheme and items, even as a staff member
//  * @param { boolean } isLoading boolean to indicate whether this component is loading, such as from fetching requests
//  * @param { Object } navigation object passed down from React Navigation's <NavigationContainer/>.
//  */

// const LoadingReqPreviews = ({navigation, isLoading, districtPosition, renderAsStudent}) => {
//     return (
//         <Fragment>
//             <RequestPreview
//                 navigation          =   { navigation }
//                 isLoading           =   { true }

//                 districtPosition    =   { districtPosition }
//                 renderAsStudent     =   { renderAsStudent }

//                 key                 =   { `loading-request-preview-${Math.random()*2000 + 1}` }
//             />
//              <RequestPreview
//                 navigation          =   { navigation }
//                 isLoading           =   { isLoading }

//                 districtPosition    =   { districtPosition }
//                 renderAsStudent     =   { renderAsStudent }

//                 key                 =   { `loading-request-preview-${Math.random()*2000 + 1}` }
//             />
//             {/* <RequestPreview
//                 navigation          =   { navigation }
//                 isLoading           =   { isLoading }

//                 districtPosition    =   { districtPosition }
//                 renderAsStudent     =   { renderAsStudent }

//                 key                 =   { `loading-request-preview-${Math.random()*2000 + 1}` }
//             />
//             <RequestPreview
//                 navigation          =   { navigation }
//                 isLoading           =   { isLoading }

//                 districtPosition    =   { districtPosition }
//                 renderAsStudent     =   { renderAsStudent }

//                 key                 =   { `loading-request-preview-${Math.random()*2000 + 1}` }
//             /> */}
//         </Fragment>
//        );
//  }; //end loadLoadingReqPreviews()

/**
 * React functional component to house the screen to view all the requests
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 * @return { ReactComponent } React component is returned
 */
const ViewRequests = ({ navigation, email, districtPosition, renderAsStudent}) => {
    const isDev = __DEV__;

    let { navigate } = navigation;
    let [ isLoading, setIsLoading ]             = useState(false);
    let [ requestPreviews, setRequestPreviews ] = useState([]);
    let [ requestsType, setRequestsType ]       =   useState("All");

    const { showActionSheetWithOptions } = useActionSheet();

     //Run ref on component updates except for initial mount via use of ref variable
     const isInitialMount = useRef(true)

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

            let routeParams = { status, subject, description, date, time, id, technician, site };

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

                    onPress             =   { () => navigate("Request Details", routeParams)}
                    // onClick             =   { () => routeToReqID(requestObject, subject, description, time, date, status, technician, site) }

                    key                 =   { id }
                />
            );
        }); //end map()

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
            setIsLoading(false);
        });

        if (requestsResponse && !requestsResponse.error) {
            requests = requestsResponse.requests;
            setIsLoading(false);
        } else {
            console.log(`Error in fetching the requests.`);

            setIsLoading(false);
            requests = [];
        }

        return requests;
    }; //end getUserRequests

    const openFilterOptions = () => {
        Reactotron.log("Pressing filter button");
        const options = ['All', 'In Progress', 'Closed', "Cancel"];
        const destructiveButtonIndex = 0;
        const cancelButtonIndex = 3;

        const callback = (buttonIndex) => {
            Reactotron.log(buttonIndex);

            switch (buttonIndex) {
                case 0: 
                    setRequestsType("All");
                    break;

                case 1: 
                    setRequestsType("In Progress");
                    break;

                case 2: 
                    setRequestsType("Closed");
                    break;

                default:
                    setRequestsType(requestsType);
                    break;
            }
        };

        return showActionSheetWithOptions({
            options,
            cancelButtonIndex,
            destructiveButtonIndex
        }, callback);
    };

    const getRequestRectangles = async (email, requestsType) => {
        let requests = await getUserRequests(email, requestsType);
        Reactotron.log("requests:\t", requests);

        let requestPreviews = loadRequestPreviews(requests.reverse()); //Reverse the requests such that is the most recent tickets first on default
        setRequestPreviews(requestPreviews);
    }; //end getRequestRectangles
   
    useEffect(() => {
        getRequestRectangles(email, requestsType); 
    }, [ requestsType ]);

    return (
        <Container>
            <RequestTypeTitle
              districtPosition    =   { districtPosition } 
              renderAsStudent     =   { renderAsStudent }
            >
                { requestsType } Requests
            </RequestTypeTitle>

            <SortFilterButtonsContainer>
                <Button
                    width               =   "150px" 
                    text                =   "Filter/Legend"
                    iconName            =   "filter"

                    districtPosition    =   { districtPosition } 
                    renderAsStudent     =   { renderAsStudent }

                    onPress             =   { openFilterOptions }
                />

                {
                    (requestPreviews && requestPreviews.length > 1) ? (
                        <Button
                            width               =   "80px" 
                            iconName            =   "sort"
                            
                            districtPosition    =   { districtPosition } 
                            renderAsStudent     =   { renderAsStudent }
        
                            onPress             =   { () => setRequestPreviews([...requestPreviews].reverse()) }
                        />
                    ) : null
                }   
               
            </SortFilterButtonsContainer>
       
            <RequestPreviewContainer>
                <TouchableOpacity activeOpacity={1}>
                    { isLoading ? (
                        <RequestPreview
                            navigation          =   { navigation } 
                            isLoading           =   { true }
                            districtPosition    =   { districtPosition}
                            renderAsStudent     =   { renderAsStudent}
                        />
                    ) : (requestPreviews.length > 0) ? requestPreviews : (
                        <NoRequestsMessage
                            districtPosition    =   { districtPosition } 
                            renderAsStudent     =   { renderAsStudent }
                        >
                            No requests at this moment.
                        </NoRequestsMessage>
                    ) 
                }
                </TouchableOpacity>
            </RequestPreviewContainer>
        </Container>
    ); //end return
}; //end ViewRequests

export default ViewRequests;