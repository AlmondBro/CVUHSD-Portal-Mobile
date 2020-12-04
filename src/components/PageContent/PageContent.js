import React, { Fragment, useEffect } from 'react';
import { Platform } from 'react-native';

//Import list of buttons
import { blueSectionInfo_Staff, redSectionInfo_Student} from "./../../objectFiles/blueSectionInfo.js";

//import component's subcomponents
import BlueSection from './../BlueSection/BlueSection.js';

//Import styled components
import { BlueSectionContainer, ScrollViewStyled } from './PageContent_StyledComponents.js';

const androidWebViewDebug = false;

let PageContent  = ({ renderAsStudent, title, appWidth, setShowPortalLogo,...props }) => {
    let sectionInfoObject;
    sectionInfoObject = (title === "Student" || renderAsStudent === true) ? 
                            redSectionInfo_Student : blueSectionInfo_Staff;

    const generateBlueSections = (sectionInfoObject, title) => {
        return sectionInfoObject.map( (blueSection_Object, index) => {
            return (
                <BlueSection 
                    appWidth        =   { appWidth }
                    expanded        =   { blueSection_Object.expanded }
                    headerTitle     =   { blueSection_Object.headerTitle }
                    buttons         =   { blueSection_Object.buttons }
                    key             =   { index }
                    title           =   { title }
                    renderAsStudent =   { renderAsStudent }
                />
            ); //end return statement
        }); //end outer return statement
    }; //end generateBlueSections()

    useEffect(() => {
        setShowPortalLogo(false);
    }, []);
    return (
            <ScrollViewStyled
                width                   =   { appWidth }
                alwaysBounceVertical    =   { false }
                bounce                  =   { false }
            >
                <BlueSectionContainer>
                    {   /* Render service statuses only on iOS devices until the WebView 
                            under Scrollview (where the webview does not scroll) is fixed 
                        */
                        (   ( (title !== "Student") && !renderAsStudent) ?
                                (Platform.OS === "ios"|| androidWebViewDebug === true ?
                                    (   <BlueSection 
                                            appWidth        =   { appWidth }
                                            headerTitle     =   "System Statuses" 
                                            expanded        =   {!false}
                                            serviceStatuses =   {true}

                                            key             =   "Services Statuses"
                                            title           =   { title }
                                            renderAsStudent =   { renderAsStudent }
                                        />
                                    ) : null
                                ) : null
                        )
                    } 
                    <Fragment>
                        { generateBlueSections(sectionInfoObject, title) }
                    </Fragment>
            </BlueSectionContainer>
        </ScrollViewStyled>
    ); //end return statement
}; //end PageContent

export default PageContent;