import React from 'react';

//Import component's styled parts
import { HeaderContainerView, PortalLogoImage, UpdateAppView, UpdateTextDescription  } from './Header_StyledComponents.js';

const Header = (props) => {
    return (
      <HeaderContainerView>
        <PortalLogoImage  
          source={require("./../../assets/images/CV-600x600-portal-red.png")} 
        />
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
      </HeaderContainerView>
    );
};

export default Header;