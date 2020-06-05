import React, { useEffect, useState, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 

import { Text } from 'react-native';

import { TabsFooterContainerView, TabsFooterBoxView, TabsFooterBoxText}  from './TabsFooter_StyledComponents.js';


const TabsFooter = (props) => {
    // const mounted = useRef();
    // useEffect(() => {
    //     if (!mounted.current) {
    //         mounted.current = true;
    //     } else {
    //         // do componentDidUpate logic
    //     }
    // });
    
    let [userTitle, setUserTitle] = useState(props.title);

    useEffect(() => {
        console.log(userTitle)
      }, [userTitle]);

    return (
        <TabsFooterContainerView 
            title={props.title}
        >

            <TabsFooterBoxView
                title={props.title}
            >
                <TabsFooterBoxText>1</TabsFooterBoxText>
            </TabsFooterBoxView>

            <TabsFooterBoxView
                title={props.title}
            >
                  <FontAwesome 
                    name="graduation-cap" 
                    size={30} 
                    color="white" 
                />
            </TabsFooterBoxView>

            <TabsFooterBoxView
                title={props.title}
                noBorder
            >
                <FontAwesome 
                    name="sign-out" 
                    size={30} 
                    color="white" 
                />
                
            </TabsFooterBoxView>
        </TabsFooterContainerView>
    ); //end return statement
}; //end TabsFooter()

export default TabsFooter;