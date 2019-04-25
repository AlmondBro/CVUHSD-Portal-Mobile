import React from "React";
import {View, StyleSheet, Image} from "react-native";

const headerStyles = StyleSheet.create({
    portalLogoContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      margin: 40
    },
  
    portalLogo: {
      width: 200,
      height: 200
    }
});

const Header = (props) => {
    return (
    <View style={headerStyles.portalLogoContainer}>
        <Image  source={require("./../assets/images/CV-600x600-portal.png")} 
                style={headerStyles.portalLogo}
        />
      </View>
    );
};

export default Header;