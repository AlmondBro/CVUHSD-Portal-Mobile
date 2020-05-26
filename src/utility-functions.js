import React from 'react';
import { useWindowDimensions } from 'react-native';


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

export  { dimensionsWidthHOC };