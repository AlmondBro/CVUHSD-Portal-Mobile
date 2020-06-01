import React, { Fragment } from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Import component's styled parts
import { HeaderContainerView, PortalLogoImage, UpdateAppView, UpdateTextDescription, UserInfoText  } from './Header_StyledComponents.js';
import { BlueSectionContainer } from './../App/App_StyledComponents.js';

const Header = (props) => {
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
                        props.title ? 
                            (
                                <Fragment>
                                    <UserInfoText title={props.title}>{ props.title + " from " + props.site}</UserInfoText>
                                    <UserInfoText title={props.title}>{ props.firstName + " " + props.lastName }</UserInfoText>
                                </Fragment>
                            ) : null
                    }
        </BlueSectionContainer>
      </HeaderContainerView>
    );
};

export default Header;