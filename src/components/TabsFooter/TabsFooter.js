import React, { useEffect, useState, useRef } from 'react';

import * as Svg from 'react-native-svg';
import { FontAwesome } from '@expo/vector-icons'; 

import { TabsFooterContainerView, TabsFooterBoxView, TabsFooterBoxText}  from './TabsFooter_StyledComponents.js';

import ChangePasswordIcon from './../../assets/images/icons/change-password.svg';

const TabsFooter = (props) => {    
    // let [userTitle, setUserTitle] = useState(props.title);

    // useEffect(() => {
    //     console.log(userTitle)
    //   }, [userTitle]);

    return (
        <TabsFooterContainerView 
            title={props.title}
        >

            <TabsFooterBoxView
                title={props.title}
            >
                <ChangePasswordIcon width={95} height={30}/>
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