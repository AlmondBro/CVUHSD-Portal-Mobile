import React, { Fragment } from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Import component's styled parts
import { HeaderContainerView, PortalLogoImage, UpdateAppView, UpdateTextDescription  } from './Header_StyledComponents.js';
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
                source={require("./../../assets/images/CV-600x600-portal-red.png")} 
                
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
                                    <Text>{ props.title + " from " + props.site}</Text>
                                    <Text>{ props.firstName + " " + props.lastName }</Text>
                                </Fragment>
                            ) : null
                    }
        </BlueSectionContainer>
      </HeaderContainerView>
    );
};

export default Header;