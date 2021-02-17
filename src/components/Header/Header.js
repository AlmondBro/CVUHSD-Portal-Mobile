import React, { Fragment } from 'react';
import { TouchableOpacity } from 'react-native';

//Import component's styled parts
import { HeaderContainerView, UpdateAppView, UpdateTextDescription, UserInfoText, SchoolNameLogoView, SchoolLogo, UpdateButtonTouchableOpacity, WayPointTypography } from './Header_StyledComponents.js';
import { BlueSectionContainer } from './../App/App_StyledComponents.js';

import LogoBlue from './../../assets/images/wp-portal-logo-blue-white-interior.svg'; 
import LogoRed from './../../assets/images/wp-portal-logo-red-white-interior.svg'; 

//Import 3rd-party APIs
import greeting from 'greeting';

const Header = ({ renderAsStudent, uid, title, firstName, lastName, site, gradeLevel, portalLogoSource, showPortalLogo, showUpdate, reloadAppFromUpdate }) => {  
    let parseSchoolName = (site) => {
        if (site && (site !== "Centinela Valley Independent Study School" )) {
            console.log("Site:\t" + site);
            return site.toString().split(" ", 1)[0];
        } 

        if (site === "Centinela Valley Independent Study School" ) {
            return "cviss";
        } 

        return ""; 
    }; //end parseSchoolName

    let getSchoolLogoImagePath = (schoolName) => {
        console.log("schoolName:" + schoolName);

        switch (schoolName.toLowerCase()) {
            case 'cviss' :
                return require(`./../../assets/images/school-logo-cviss.png`);
            case 'hawthorne' :
                return require(`./../../assets/images/school-logo-hawthorne.png`);
            case 'lawndale' :
                return require(`./../../assets/images/school-logo-lawndale.png`);
            case 'leuzinger' :
                return require(`./../../assets/images/school-logo-leuzinger.png`);
            
            default:
                return require(`./../../assets/images/school-logo-leuzinger.png`);
        }
    };

    let schoolName = parseSchoolName(site);

    let schoolLogoImagePath = getSchoolLogoImagePath(schoolName);

    return (
      <HeaderContainerView>
        {/* <WPTypography width={500} height={500} /> */}

          {
              showPortalLogo ? (
                  <Fragment>
                    <TouchableOpacity
                        activeOpacity = { 0.5 }
                        // onPress={ props.onPress('Home') }
                    >
                        {
                            title ? 
                                (title === "Student" || renderAsStudent) 
                                ? (<LogoRed width={130} height={130} />)
                                : (<LogoBlue width={130} height={130}/>)
                            :  (<LogoRed  width={130} height={130}/>)
                        }

                    </TouchableOpacity>
                     {/* Rato is 204/45 (width/height) */}
                     {
                         showUpdate ? null : (
                            <WayPointTypography
                                width   =   { 136 } 
                                height  =   { 30 } 
                            />
                         )
                     }
                 
                  </Fragment>
        
              ) : null
          }

    
        <BlueSectionContainer>
        {
            title && !showUpdate ? 
                (
                        <UserInfoText 
                            title           =   { title }
                            renderAsStudent =   { renderAsStudent }
                            bold
                            italic
                        >
                            <UserInfoText 
                                title           =   { title }
                                renderAsStudent =   { renderAsStudent }
                            >
                                { greeting.random() + " " }
                            </UserInfoText>
                            {  firstName + " " + lastName + " 😃"}

                        </UserInfoText>
                ) : null     
            }
            {
                (title === "Student") && !showUpdate ? 
                    (
                        <Fragment>
                            <UserInfoText 
                                title           =   { title }
                                renderAsStudent =   { renderAsStudent }
                                italic
                            >
                                { ( gradeLevel ? gradeLevel + "th grade " + title : null)  || "CVUHSD User" }
                            
                                <UserInfoText 
                                    title           =   { title }
                                    renderAsStudent =   { renderAsStudent }
                                    bold
                                    italic
                                >
                                    { " (" + uid  + ")"}
                                </UserInfoText>
                            </UserInfoText>
                        </Fragment>
                    ) : null
            }
            {              
                ( title === "Student") && site && !showUpdate ? 
                    (
                        <Fragment>
                            <SchoolNameLogoView>
                                <UserInfoText 
                                    title           =   { title }
                                    renderAsStudent =   { renderAsStudent }
                                    bold
                                >
                                    { (site || "CVUHSD") }
                                </UserInfoText>
                        
                                <SchoolLogo  
                                    source = { schoolLogoImagePath } 
                                />  
                            </SchoolNameLogoView> 
                        </Fragment> 
                    ) : null      
            }

            <Fragment>
                { showUpdate ?
                    ( 
                        <UpdateAppView>
                            <UpdateTextDescription
                                title           =   { title }
                                renderAsStudent =   { renderAsStudent }
                            >
                                A new update is available. Press here to update!
                            </UpdateTextDescription>
                            <UpdateButtonTouchableOpacity
                                title           =   { title }
                                renderAsStudent =   { renderAsStudent }
                                buttonTitle               =   "Update"


                                onPress             =   { reloadAppFromUpdate }
                                accessibilityLabel  =   "Update Mobile Portal"
                            />
                        </UpdateAppView>
                    )
                    : null
                }  
            </Fragment> 
        </BlueSectionContainer>
      </HeaderContainerView>
    ); //end return statement
};

export default Header;