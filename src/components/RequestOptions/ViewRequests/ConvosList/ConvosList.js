import React, { useState, useEffect } from 'react';
import undefsafe from 'undefsafe';

import { TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import TouchableButton from './../../../TouchableButton/TouchableButton.js';
import { Container, Content, HighlightedButton, SkeletonScreen, MetaDataContainer, MetaDataIconTextContainer, MetaDataIcon, MetaDataText, SubjDescContainer, Subject, DescrScrollContainer, Description } from './ConvosListStyledComponents.js';

/**
 * React functional component that displays the main metadata of a request, such as time and date submitted, subject, and description
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const ConvosList = ({ navigation, route, email, districtPosition, renderAsStudent }) => {
    const isDev = __DEV__;
    const metadataIconsSize = 22;

    let [ buttonPressed, setButtonPressed ] = useState(false);

    let [ convoComps, setConvoComps ]   = useState([]);

    let [ isLoading, setIsLoading ]     = useState(false);

    let { id, date, time } = route.params;

    let description = "hi";

    
    const mapConvos = (convos) => {
        return convos.filter((convo, index) => convo["FROM"] != "System").map((convo, index) => {
            let { CREATEDDATE, FROM, DESCRIPTION } = convo;

            let time = new Date(CREATEDDATE).toLocaleTimeString();
            let date =  new Date(CREATEDDATE).toLocaleDateString();

            console.log("FROM:\t", FROM);

            return (
                <SingleConvo
                    isLoading           =   { isLoading }
                    districtPosition    =   { districtPosition }
                    renderAsStudent     =   { renderAsStudent }

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

        const getConvos_URL = `${isDev ? "" : "/server"}/helpdesk/request/get-convos/${id}`;
        const getConvos_Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Credentials": true
        };
    
        let convos = await fetch(getConvos_URL, {
            method: 'GET',
            headers: getConvos_Headers
        })
        .then((serverResponse) => serverResponse.json()) //Parse the JSON of the response
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

        let convos          = await getReqConvos(id);
        let convoComponents = mapConvos([...convos].reverse());

        console.log("ReqSpecifics convos:\t", convos);
        console.log("ReqSpecifics convoComponents:\t", convoComponents);
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
                                identifier          =   {`request-specifics-date-skeleton-${Math.random()*1000+1}`}
                                
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
                                identifier          =   {`request-specifics-date-skeleton-${Math.random()*1000+1}`}
                                
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

                    </MetaDataContainer>

                    <SubjDescContainer>
                        <SkeletonScreen
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
                        >
                            <DescrScrollContainer extraScrollHeight={50} viewIsInsideTabBar={true}>
                                <TouchableOpacity activeOpacity = { 1.0 }>
                                    <Description
                                        districtPosition    =   { districtPosition } 
                                        renderAsStudent     =   { renderAsStudent }
                                    >
                                        { description || "Canvas test rule ticket" }
                                    </Description>
                                </TouchableOpacity>
                            </DescrScrollContainer>
                        </SkeletonScreen>
                    </SubjDescContainer>
                {/* </HighlightedButton> */}

                <TouchableButton 
                    fontSize    =   "14px"
                    buttonTitle =   "Reply" 
                    width       =   "60%" 
                    color       =   "white"
                    bgColor     =   {((districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"}
                />
            </Content>
        </Container>
    ); //end return statement
}; //end RequestPreview()

export default ConvosList;