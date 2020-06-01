import React, { createRef } from 'react';
import { Platform } from 'react-native';


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
    return (props) => {
        let { width }  = (Platform.OS === "android") ? 
                            useDimensions().window 
                        :   useDimensions();
        return (
            <Component 
                width={width}
            >
                { props.children }
            </Component>
    ); 
}; //end inline()
  
}; //end (dimensionsWidthHOC)

export  { dimensionsWidthHOC, navigationRef, navigate };