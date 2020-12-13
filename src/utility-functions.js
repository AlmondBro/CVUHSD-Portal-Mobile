import React, { useState, useCallback } from 'react';
import { Platform } from 'react-native';

import AppLoading from 'expo-app-loading';

import { setCustomText } from 'react-native-global-props';

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

// Setting default styles for all Text components.
const customTextProps = {
    style: {
    //   fontSize: 16,
    //   fontFamily: 'SourceSansPro_400Regular',
    //   color: 'black'
    }
  };

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
            
            setCustomText(customTextProps);

            return (
                <Component 
                    width       =   { width }
                    fontsLoaded =   { fontsLoaded }
                >
                    { props.children }
                </Component>
            ); 
        } else {
            return (<AppLoading/>);
        }
    }; //end inline()
}; //end (dimensionsWidthHOC)

/*
    Get the component size on render. Custom hook.
    Courtesy of Stack Overflow's matto1990:
    https://stackoverflow.com/questions/56738500/react-native-onlayout-with-react-hooks
*/

const useComponentSize = () => {
    const [size, setSize] = useState(null);
  
    const onLayout = useCallback(event => {
      const { width, height } = event.nativeEvent.layout;
      setSize({ width, height });
    }, []);
  
    return [size, onLayout];
}; //end useComponentSize

const formatPhoneNumber = (text) => {
    let finalText = text;

    var cleaned = ('' + text).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        var intlCode = (match[1] ? '+1 ' : ''),
            number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');

        finalText = number;
    }

     return finalText;
};


export  { dimensionsWidthHOC, useComponentSize, navigationRef, navigate, formatPhoneNumber };