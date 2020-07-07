import React, { Fragment } from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Import component's styled parts
import { HeaderContainerView, PortalLogoImage, UpdateAppView, UpdateTextDescription, UserInfoText  } from './Header_StyledComponents.js';
import { BlueSectionContainer } from './../App/App_StyledComponents.js';

//Import 3rd-party APIs
import greeting from 'greeting';

const Header = ({ renderAsStudent, title, firstName, lastName, site,...props }) => {
    return (
      <HeaderContainerView>
          <TouchableOpacity
            activeOpacity = { 0.5 }
            // onPress={ props.onPress('Home') }
          >
            <PortalLogoImage  
                            {...props}
                source  =   { props.portalLogoSource} 
            />
          </TouchableOpacity>
    
        <Fragment>
            { props.showUpdate ?
                ( 
                    <UpdateAppView>
                        <UpdateTextDescription>A new update is available. Press here to update!</UpdateTextDescription>
                        <Button
                            onPress={ () => { console.log("Update reload"); Updates.reload() } }
                            title="Update Mobile Portal"
                            color="#1E6C93"
                            accessibilityLabel="Update Mobile Portal"

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
                        <Fragment>
                            <UserInfoText 
                                title           =   { title }
                                renderAsStudent =   { renderAsStudent }
                                bold
                            >
                                { greeting.random() + " " + firstName + " " + lastName }
                            </UserInfoText>
                            {
                                (title === "Student") ? (
                                    <Fragment>
                                    <UserInfoText 
                                        title           =   { title }
                                        renderAsStudent =   { renderAsStudent }
                                        italic
                                    >
                                        { (title || "CVUHSD User")  }
                                    </UserInfoText>
                                    <UserInfoText 
                                        title           =   { title }
                                        renderAsStudent =   { renderAsStudent }
                                        bold
                                    >
                                        { (site || "CVUHSD") }
                                    </UserInfoText>
                                    </Fragment>
                                ) : null
                            }
                      
                        </Fragment>
                    ) : null
            }
        </BlueSectionContainer>
      </HeaderContainerView>
    );
};

export default Header;