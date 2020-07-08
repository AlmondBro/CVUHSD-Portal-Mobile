import React, { createRef } from 'react';
import { Platform } from 'react-native';

import { AppLoading } from 'expo';

import { 
    useFonts,
    SourceSansPro_200ExtraLight,
    SourceSansPro_200ExtraLight_Italic,
    SourceSansPro_300Light,
    SourceSansPro_300Light_Italic,
    SourceSansPro_400Regular,
    SourceSansPro_400Regular_Italic,
    SourceSansPro_600SemiBold,
    SourceSansPro_600SemiBold_Italic,
    SourceSansPro_700Bold,
    SourceSansPro_700Bold_Italic,
    SourceSansPro_900Black,
    SourceSansPro_900Black_Italic 
  } from '@expo-google-fonts/source-sans-pro';

let useDimensions = null;

const navigationRef = React.createRef();

const navigate = (name, params) => {
    return navigationRef.current?.navigate(name, params);
}

/* 
    Use the windows dimensions module from the react community if the 
    platform is android, since the native useWindowDimensions() renders 
    an error of 
        "state updates from the usestate() and usereducer() hooks don't 
        support the second callback argument"
    //TODO: Log this as an issue on the react-native or expo GitHubs
*/
if (Platform.OS === "android") {
    useDimensions   =   require('@react-native-community/hooks').useDimensions;
} else {
    useDimensions   =   require('react-native').useWindowDimensions;
}

const dimensionsWidthHOC = (Component) => {
    const customFonts = {
        SourceSansPro_200ExtraLight,
        SourceSansPro_200ExtraLight_Italic,
        SourceSansPro_300Light,
        SourceSansPro_300Light_Italic,
        SourceSansPro_400Regular,
        SourceSansPro_400Regular_Italic,
        SourceSansPro_600SemiBold,
        SourceSansPro_600SemiBold_Italic,
        SourceSansPro_700Bold,
        SourceSansPro_700Bold_Italic,
        SourceSansPro_900Black,
        SourceSansPro_900Black_Italic 
    };

    return (props) => {
        let { width }  = (Platform.OS === "android") ? 
                            useDimensions().window 
                        :   useDimensions();
        let [ fontsLoaded ] = useFonts({
            ...customFonts
          });
        
        if (width && (fontsLoaded === true)) {
            return (
                <Component 
                    width       =   { width }
                    fontsLoaded =   { fontsLoaded }
                    style       =   { { fontFamily: "SourceSansPro_400Regular" } }
                >
                    { props.children }
                </Component>
            ); 
        } else {
            return (<AppLoading/>);
        }
}; //end inline()
  
}; //end (dimensionsWidthHOC)

export  { dimensionsWidthHOC, navigationRef, navigate };