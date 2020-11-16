import React, { Fragment } from 'react';

import { FontAwesome } from '@expo/vector-icons'; 

//Import ChangePasswordModal and its associated icon
import ChangePassword  from './../ChangePassword/ChangePassword.js';
import ChangePasswordIcon from './../../assets/images/icons/change-password.svg';

import SupportRequestModal  from './../SupportRequestModal/SupportRequestModal.js';

//Import styled components
import { TabsFooterContainerView, TabsFooterButton }  from './TabsFooter_StyledComponents.js';

const TabsFooter = ({ appWidth, renderAsStudent, site, setRenderAsStudent, isModalVisible, showRequestModal, setIsModalVisible, setShowRequestModal, showPasswordModal, setShowPasswordModal, title, logOut }) => {    
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
                            onPress         =   { () => setShowPasswordModal(!showPasswordModal) }
                            noBorder    
                        >
                            <ChangePasswordIcon 
                                width   =   { 95 } 
                                height  =   { 30 }
                            />
                        </TabsFooterButton>

                        <TabsFooterButton
                            renderAsStudent =   {  renderAsStudent }
                            title           =   {   title }    
                            activeOpacity   =   {   0.5 }
                            onPress         =   { () => setRenderAsStudent(!renderAsStudent) }
                            noBorder        
                        >
                            <FontAwesome 
                                name    =   { renderAsStudent ? "user" : "graduation-cap" } 
                                size    =   {   30  } 
                                color   =   "white" 
                            />
                        </TabsFooterButton>
                    </Fragment>
                )
                : null
            } 


            <TabsFooterButton
                renderAsStudent =   {  renderAsStudent }
                title           =   {   title }    
                activeOpacity   =   {   0.5 }
                onPress         =   { () => setShowRequestModal(true) }
                noBorder        
            >
                <FontAwesome 
                    name    =   "ticket" 
                    size    =   {   30  } 
                    color   =   "white" 
                />
            </TabsFooterButton>
          
            <TabsFooterButton
                renderAsStudent =   {  renderAsStudent }
                title           =   { title }    
                activeOpacity   =   { 0.5 }
                onPress         =   { logOut }
                noBorder        
            >
                <FontAwesome 
                    name    =   "sign-out" 
                    size    =   {30} 
                    color   =   "white" 
                />
                
            </TabsFooterButton>
            { 
                /* Only render the ChangePasswordModal if the signed-in user is not a student */
                (title !== "Student") ? 
                    (
                        <ChangePassword 
                            appWidth                =   {   appWidth }
                            districtPosition        =   {   title   }
                            site                    =   {  site }
                            renderAsStudent         =   {   renderAsStudent }
 
                            showPasswordModal       =   { showPasswordModal }
                            setShowPasswordModal    =   { setShowPasswordModal }    
                        />
                    )
                    : null
            }
            <SupportRequestModal
                appWidth            =   {   appWidth }
                districtPosition    =   {   title   }
                site                =   {  site }
                renderAsStudent     =   {   renderAsStudent }

                showRequestModal    =   {   showRequestModal }
                setShowRequestModal =   {   setShowRequestModal }
            />
        </TabsFooterContainerView>
    ); //end return statement
}; //end TabsFooter()

export default TabsFooter;