import React, { Fragment } from 'react';
import { Button, TouchableOpacity } from 'react-native';

//Import component's styled parts
import { HeaderContainerView, PortalLogoImage, UpdateAppView, UpdateTextDescription, UserInfoText, SchoolNameLogoView, SchoolLogo, UpdateButtonTouchableOpacity } from './Header_StyledComponents.js';
import { BlueSectionContainer } from './../App/App_StyledComponents.js';

//Import 3rd-party APIs
import greeting from 'greeting';

const Header = ({ renderAsStudent, title, firstName, lastName, site, gradeLevel, portalLogoSource, showUpdate, reloadAppFromUpdate }) => {  
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

    let getSchoolLogoSite = (schoolName) => {
        let schoolLogoSite = "https://www.centinela.k12.ca.us/";
        if (schoolName.toLowerCase() === "leuzinger") {
            schoolLogoSite = "https://www.leuzinger.org/";
        } 

        if (schoolName.toLowerCase() === "lawndale") {
            schoolLogoSite = "https://www.lawndalehs.org/";
        } 

        if (schoolName.toLowerCase() === "hawthorne") {
            schoolLogoSite = "https://www.hhscougars.org/";
        } 

        if (schoolName.toLowerCase() === "lloyde") {
            schoolLogoSite = "https://www.lloydehs.org/";
        } 

        if (schoolName.toLowerCase() === "Centinela Valley Independent Study School") {
            schoolLogoSite = "https://www.cvalternatives.org/";
        }
        
        return schoolLogoSite;
    }; //end getSchoolLogoSite

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
          <TouchableOpacity
            activeOpacity = { 0.5 }
            // onPress={ props.onPress('Home') }
          >
            <PortalLogoImage  
                source  =   { portalLogoSource} 
            />
          </TouchableOpacity>
    
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


                            onPress             =   { () => { console.log("Update reload"); reloadAppFromUpdate(); } }
                            accessibilityLabel  =   "Update Mobile Portal"
                        />
                    </UpdateAppView>
                )
                : null
            }  
        </Fragment> 

        <BlueSectionContainer>
        {
            title ? 
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
                (title === "Student") ? 
                    (
                        <Fragment>
                            <UserInfoText 
                                title           =   { title }
                                renderAsStudent =   { renderAsStudent }
                                bold
                                italic
                            >
                                { ( gradeLevel ? gradeLevel + "th grade " + title : null)  || "CVUHSD User" }
                            </UserInfoText>
                        </Fragment>
                    ) : null
            }
            {              
                ( title === "Student") && site ? 
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
        </BlueSectionContainer>
      </HeaderContainerView>
    ); //end return statement
};

export default Header;