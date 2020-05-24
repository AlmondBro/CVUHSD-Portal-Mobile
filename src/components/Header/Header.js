import React from 'react';

//Import component's styled parts
import { HeaderContainerView, PortalLogoImage } from './Header_StyledComponents.js';

const Header = (props) => {
    return (
      <HeaderContainerView>
        <PortalLogoImage  
          source={require("./../../assets/images/CV-600x600-portal-red.png")} 
        />
      </HeaderContainerView>
    );
};

export default Header;