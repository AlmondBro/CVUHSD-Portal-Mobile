import React, { Fragment } from 'react';
import { Text, Platform } from 'react-native';

//Import list of buttons
import { blueSectionInfo_Staff, redSectionInfo_Student} from "./../../objectFiles/blueSectionInfo.js";

//import component's subcomponents
import BlueSection from './../BlueSection/BlueSection.js';

//Import styled components
import { BlueSectionContainer, ScrollViewStyled } from './PageContent_StyledComponents.js';

let PageContent  = (props) => {
    let sectionInfoObject;
    sectionInfoObject = (props.title === "Student" ) ? 
                            redSectionInfo_Student : blueSectionInfo_Staff;

    const generateBlueSections = (sectionInfoObject, title) => {
        return sectionInfoObject.map( (blueSection_Object, index) => {
            return (
                <BlueSection 
                    expanded    =   { blueSection_Object.expanded }
                    headerTitle =   { blueSection_Object.headerTitle }
                    buttons     =   { blueSection_Object.buttons }
                    key         =   { index }
                    title       =   { props.title  || title || "Student"}
                    // TODO: Add render as student functionality {this.renderAsStudent || this.props.location.state.renderAsStudent}
                />
            ); //end return statement
        }); //end outer return statement
    }; //end generateBlueSections()

    const androidWebViewDebug = false;

    return (
            <ScrollViewStyled
                width   =   { props.appWidth }
            >
                <BlueSectionContainer>
                    {   /* Render service statuses only on iOS devices until the WebView 
                            under Scrollview (where the webview does not scroll) is fixed 
                        */
                        (   props.title !== "Student" ?
                                (Platform.OS === "ios"|| androidWebViewDebug === true ?
                                    (   <BlueSection 
                                            headerTitle="System Statuses" 
                                            expanded={!false}
                                            serviceStatuses={true}
                                        />
                                    ) : null
                                ) : null
                        )
                    } 
                    <Fragment>
                        { generateBlueSections(sectionInfoObject, props.title) }
                    </Fragment>
            </BlueSectionContainer>
        </ScrollViewStyled>
    ); //end return statement
}; //end PageContent

export default PageContent;