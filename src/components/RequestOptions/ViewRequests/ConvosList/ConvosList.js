import React, { useState, useEffect } from 'react';
import undefsafe from 'undefsafe';

import { Platform, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import SingleConvo from './SingleConvo/SingleConvo.js';
import TouchableButton from './../../../TouchableButton/TouchableButton.js';

import { PORTAL_LIVE_LINK, NODEJS_SERVER_PORT, IP_ADDRESS_DEV } from "@env";

import { Container, Content, HighlightedButton, SkeletonScreen, SubjDescContainer, Subject, DescrScrollContainer, Description, NoConvosMessage } from './ConvosListStyledComponents.js';


import { Reactotron } from './../../../../config/reactotron.dev.js';

/**
 * React functional component that displays the main metadata of a request, such as time and date submitted, subject, and description
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const ConvosList = ({ navigation, route, email, districtPosition, renderAsStudent }) => {
    const isDev = __DEV__;
    const metadataIconsSize = 22;

    const { OS } = Platform;

    let { navigate } = navigation;
    let [ buttonPressed, setButtonPressed ] = useState(false);

    let [ convoComps, setConvoComps ]   = useState([]);

    let [ isLoading, setIsLoading ]     = useState(false);

    let { id, subject, techEmail } = route.params;

    Reactotron.log("ConvosList id:\t" + id);

    //
    const mapConvos = (convos) => {
        return convos.filter((convo, index) => convo["FROM"] != "System").map((convo, index) => {
            let { CREATEDDATE, FROM, DESCRIPTION } = convo;

            let timeAndAM = new Date(CREATEDDATE).toLocaleTimeString().split(" ");

            let possibleMilitaryTime = parseInt(timeAndAM[0].split(":")[0]);
            let hour    = (possibleMilitaryTime > 12) ? (possibleMilitaryTime - 12).toString() : parseInt(timeAndAM[0].split(":")[0]);
            let minutes = timeAndAM[0].split(":")[1];
            let AMorPM  = (possibleMilitaryTime >= 12) ? "PM" : "AM";

            let time = hour + ":" + minutes + " " + AMorPM;

            let date =  new Date(CREATEDDATE).toLocaleDateString();

            return (
                <SingleConvo
                    navigation          =   { navigation }
                    route               =   { route }
                    isLoading           =   { isLoading }
                    districtPosition    =   { districtPosition }
                    renderAsStudent     =   { renderAsStudent }
                    email               =   { email }

                    description         =   { DESCRIPTION }
                    date                =   { date }
                    time                =   { time }
                    author              =   { FROM } 
                    key                 =   { index }
                />
            ); //end return statement
        }); //end .map() Array method
    }; //end mapConvos()

    const getReqConvos = async (id) => {
        let requests = [];

        const getConvos_URL = `${isDev ? `http://${IP_ADDRESS_DEV}:${NODEJS_SERVER_PORT}` : `https://${PORTAL_LIVE_LINK}/server`}/helpdesk/request/get-convos/${id}`;
        const getConvos_Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Credentials": true
        };
    
        let convos = await fetch(getConvos_URL, {
            method: 'GET',
            headers: getConvos_Headers
        })
        .then((serverResponse) => { 
            Reactotron.log("Server response:\t", serverResponse);
            return serverResponse.json();
        }) //Parse the JSON of the response
        .then((jsonResponse) => jsonResponse.convos)
        .catch((error) => {
            console.error(`getReqConvos() Catching error:\t ${error}`);
        });

        if (convos && !convos.error) {
            requests = convos.requests;
        } else {
            console.log(`Error in fetching the convo requests.`);

            convos = [];
        }

        return convos;
    }; //end getReqConvos

    const loadConvoComponents = async () => {
        setIsLoading(true);

        let convos = await getReqConvos(id);
        Reactotron.log("convos:\t", convos);
        Reactotron.log("id:\t", id);

        let convoComponents = mapConvos([...convos].reverse());

        setConvoComps(convoComponents);

        setIsLoading(false);
    };

    useEffect(() => {
        loadConvoComponents();
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
                    <SubjDescContainer>
                        {/* <SkeletonScreen
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
                        > */}
                            <DescrScrollContainer extraScrollHeight={50} viewIsInsideTabBar={true}>
                                <TouchableOpacity activeOpacity = { 1.0 }>
                                    {
                                        isLoading ? (<SingleConvo
                                            isLoading           =   { isLoading }
                                            districtPosition    =   { districtPosition }
                                            renderAsStudent     =   { renderAsStudent }
                                        />) : (convoComps.length > 0) ? convoComps :
                                            ( 
                                                <NoConvosMessage
                                                    districtPosition    =   { districtPosition }
                                                    renderAsStudent     =   { renderAsStudent }
                                                >
                                                    No conversations listed yet
                                                </NoConvosMessage>
                                            )
                                    }
                                </TouchableOpacity>
                            </DescrScrollContainer>
                        {/* </SkeletonScreen> */}
                    </SubjDescContainer>
                {/* </HighlightedButton> */}

                <TouchableButton 
                    fontSize    =   "14px"
                    buttonTitle =   "Reply" 
                    width       =   "60%" 
                    color       =   "white"
                    bgColor     =   {((districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"}
                    onPress     =   { () => navigate("Reply to Request", { id, subject, techEmail }) }              
                />
            </Content>
        </Container>
    ); //end return statement
}; //end RequestPreview()

export default ConvosList;