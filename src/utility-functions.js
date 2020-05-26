import React, { createRef } from 'react';
import { useWindowDimensions } from 'react-native';

const navigationRef = React.createRef();

const navigate = (name, params) => {
    return navigationRef.current?.navigate(name, params);
}

const dimensionsWidthHOC = (Component) => {
    return (props) => {
        let width = useWindowDimensions().width;

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