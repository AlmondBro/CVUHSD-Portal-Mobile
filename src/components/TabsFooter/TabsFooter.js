import React, { Fragment, useEffect, useState, useRef } from 'react';

import * as Svg from 'react-native-svg';
import { FontAwesome } from '@expo/vector-icons'; 

import { TabsFooterContainerView, TabsFooterButton}  from './TabsFooter_StyledComponents.js';

import ChangePasswordIcon from './../../assets/images/icons/change-password.svg';

const TabsFooter = ({ renderAsStudent,setRenderAsStudent, title,  ...props }) => {    
    // let [userTitle, setUserTitle] = useState(title);

    // useEffect(() => {
    //     console.log(userTitle)
    //   }, [userTitle]);

    return (
        <TabsFooterContainerView 
            title   =   { title }    
        >
            { 
                (title !== "Student") ? 
                (
                    <Fragment>
                        <TabsFooterButton
                            renderAsStudent =   { renderAsStudent }
                            title           =   { title }    
                            activeOpacity   =   { 0.5 }
                        >
                        <ChangePasswordIcon 
                            width={95} 
                            height={30}
                        />
                        </TabsFooterButton>

                        <TabsFooterButton
                            renderAsStudent =   { renderAsStudent }
                            title           =   {   title }    
                            activeOpacity   =   {   0.5 }
                        >
                            <FontAwesome 
                                name    =   "graduation-cap" 
                                size    =   {   30  } 
                                color   =   "white" 
                            />
                        </TabsFooterButton>
                    </Fragment>
                )
                : null
            } 
          
            <TabsFooterButton
                renderAsStudent =   { renderAsStudent }
                title           =   { title }    
                activeOpacity   =   { 0.5 }
                onPress         =   { setRenderAsStudent }
                noBorder        
            >
                <FontAwesome 
                    name    =   "sign-out" 
                    size    =   {30} 
                    color   =   "white" 
                />
                
            </TabsFooterButton>
        </TabsFooterContainerView>
    ); //end return statement
}; //end TabsFooter()

export default TabsFooter;