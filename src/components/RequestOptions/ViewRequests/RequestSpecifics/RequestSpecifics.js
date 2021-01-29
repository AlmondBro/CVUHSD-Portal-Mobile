import React, { useState, useEffect } from 'react';
import undefsafe from 'undefsafe';

import { TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import TouchableButton from './../../../TouchableButton/TouchableButton.js';
import {  Container, Content, HighlightedButton, SkeletonScreen, MetaDataContainer, MetaDataIconTextContainer, MetaDataIcon, MetaDataText, SubjDescContainer, Subject, DescrScrollContainer, Description } from './RequestSpecificsStyledComponents.js';

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
 * React functional component that displays the main metadata of a request, such as time and date submitted, subject, and description
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const RequestSpecifics = ({ navigation, route, districtPosition, renderAsStudent, isLoading }) => {
    const metadataIconsSize = 22;

    let [ faIconName, setFAIcon ] = useState("spinner");
    let [ buttonPressed, setButtonPressed ] = useState(false);

    let { subject, description, date, time, id, technician, site, status } = route.params;

    isLoading = false;

    const loremIpsum = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor orci sem, vel aliquet elit venenatis sit amet. Aenean enim ipsum, vehicula a mollis ut, lobortis ut lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at lobortis lorem. Sed ut ex sit amet felis sollicitudin rhoncus. Praesent sollicitudin ante quis nulla semper blandit. Quisque non pharetra erat. Nam blandit orci eget convallis sodales. Sed congue metus mi, sed volutpat lacus tincidunt non. Ut et nibh pellentesque, gravida est sed, commodo turpis. In hac habitasse platea dictumst. Vestibulum facilisis nisi eu eleifend pellentesque.

    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tristique rutrum purus ut tincidunt. Nullam tempor cursus urna sed volutpat. Nulla mattis ipsum vel risus ullamcorper auctor ac at nibh. Vestibulum vitae dapibus leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla feugiat quam tristique est eleifend, et lacinia nisl mollis. Mauris lacinia enim nec est sodales, tempus gravida neque dapibus. Mauris tristique ex eget dui tincidunt accumsan. Praesent sit amet ultricies libero. Morbi feugiat, quam eu consequat ultrices, est erat aliquam lacus, at iaculis augue orci eget urna. Donec eleifend sapien ligula, ut interdum felis laoreet quis. Vestibulum quis ultrices tellus. Pellentesque tincidunt sagittis mollis.
    
    Ut sem quam, lobortis ac dui at, blandit convallis magna. Suspendisse consequat elit in lorem condimentum, id tincidunt ante malesuada. Vivamus efficitur, ex sit amet volutpat posuere, nulla ligula aliquet augue, vitae eleifend ante elit at erat. Vestibulum ante sapien, consectetur sit amet nisi non, tincidunt eleifend est. Etiam ullamcorper diam at justo pulvinar ullamcorper. Suspendisse potenti. Mauris sollicitudin, justo non volutpat eleifend, urna orci sollicitudin ligula, scelerisque pulvinar libero urna vel velit. Proin porttitor eros in orci dictum, at facilisis risus finibus. Nam gravida, lorem et varius elementum, nisi ex cursus dui, vitae consectetur urna dolor a dolor. Sed quis laoreet lorem. Cras fringilla luctus velit luctus laoreet. Aliquam porttitor sem sed malesuada tincidunt.
    
    Morbi luctus sem viverra, sollicitudin tortor quis, cursus risus. Curabitur sed ipsum faucibus ligula volutpat viverra. Quisque at dolor vel metus suscipit consectetur. Aenean scelerisque vehicula enim in placerat. Vestibulum non sollicitudin enim, vel ultrices nunc. Quisque blandit sed lacus et blandit. Vivamus vel diam eu lectus semper euismod at vel mauris. Cras non laoreet velit. Duis molestie nibh nec pulvinar aliquet. Duis a eleifend nisi. In orci leo, porttitor in erat sed, semper ultricies tortor. Nullam sed mauris nulla. Cras lobortis tincidunt sodales. `;
   
    description = Array.from({ length: 5 }, () => loremIpsum).toString();

    if (undefsafe(site, "name")) {
        site   =  site.name;
    }

    const getFAIcon = (status) => {
        let faIcon;

        switch(status) {
            case "All":
                setFAIcon("tasks");
            break;

            case "Open":
                setFAIcon("circle");
            break;

            case "In Progress":
                setFAIcon("angle-double-right");
            break;

            case "Closed":
                setFAIcon("check");
            break;

            default:
                setFAIcon("spinner");
                
        }

        return faIcon;
    }; 
    
    useEffect(() => {
        getFAIcon(status);
    }, [ status ]);

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
                            {
                                isLoading ? (
                                    <SkeletonScreen 
                                        isLoading           =   { isLoading }
                                        districtPosition    =   { districtPosition }
                                        renderAsStudent     =   { renderAsStudent } 

                                        containerWidth      =   { 50 }
                                        width               =   { 25 }
                                        height              =   { 15 }
                                        identifier          =   {`request-specifics-status-icon-skeleton-${Math.random()*1000+1}`}
                                        
                                        marginTop           =   { 8 }
                                        marginLeft          =   { 0 }
                                        marginRight         =   { "auto" }
                                    >
                                        <MetaDataIcon
                                            districtPosition    =   { districtPosition } 
                                            renderAsStudent     =   { renderAsStudent }

                                            name                =   { faIconName } 
                                            size                =   {   metadataIconsSize  } 
                                        />
                                    </SkeletonScreen>
                                ) : (
                                    <MetaDataIcon
                                        districtPosition    =   { districtPosition } 
                                        renderAsStudent     =   { renderAsStudent }

                                        name                =   { faIconName } 
                                        size                =   {   metadataIconsSize  } 
                                    />
                                )
                            }
                            
                            <SkeletonScreen
                                isLoading           =   { isLoading }
                                districtPosition    =   { districtPosition }
                                renderAsStudent     =   { renderAsStudent } 

                                containerWidth      =   { 50 }
                                width               =   { 80 }
                                height              =   { 15 }
                                identifier          =   {`request-specifics-req-status-skeleton-${Math.random()*1000+1}`}
                                
                                marginTop           =   { 8 }
                                marginLeft          =   { -30 }
                                marginRight         =   { "auto" }
                            >
                                <MetaDataText
                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }
                                >
                                    { status || "Closed" }
                                </MetaDataText>
                            </SkeletonScreen>
                        </MetaDataIconTextContainer>
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

                            containerWidth      =   { 300 }
                            height              =   { 20 }
                            identifier          =   {`request-specifics-subject-skeleton-${Math.random()*1000+1}`}
                            
                            marginTop           =   { 10 }
                            marginLeft          =   { 25 }
                        >
                            <Subject
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }
                            >
                                { subject || "Canvas Test" }
                            </Subject>
                        </SkeletonScreen>
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
                    buttonTitle =   "Conversations" 
                    width       =   "60%" 
                    color       =   "white"
                    bgColor     =   {((districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"}
                />
            </Content>
        </Container>
    ); //end return statement
}; //end RequestPreview()

export default RequestSpecifics;