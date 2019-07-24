import React from "react";
import { StyleSheet, Image, TouchableHighlight, Linking } from "react-native";

import AppLink from 'react-native-app-link';

import { Image as ImageCache, CacheManager } from 'react-native-expo-image-cache';

const serviceButton_styles = StyleSheet.create({
    touchableHighlight: {
       alignSelf: 'center',
       marginTop: 13,
       marginBottom: 13
    },

    image: {
        width: 300,
        height: 100
    }
});

const LinkButton = (props) => {
    let openLink = (props) => {
        console.log("openLink Props:\t" + JSON.stringify(props));

        AppLink.maybeOpenURL(props.deepLink, props.appLink_config)
            .then(() => {
                // do stuff
            })
            .catch((err) => {
            // handle error
                console.log("App Link Error:\t" + err);
                Linking.openURL(props.buttonLink)
            });
        //Linking.openURL(link);
    };

    let getImage = (imagePath) => {
        let baseImageFolder = `.././assets/images/Buttons/`;
        let portalRoot = 'https://portal.centinela.k12.ca.us'
        let imagePath_LowerCase = imagePath.toString().toLowerCase();
        
        switch (imagePath_LowerCase) {
            case "aesop.png": 
                return portalRoot +("/images/Buttons/Aesop.png");

            case "bb-admin.png" : 
                return portalRoot +("/images/Buttons/BB-Admin.png");

            case "bb-teacher.png" : 
                return portalRoot +("/images/Buttons/BB-Teacher.png");

            case "behavior-alert.png" : 
                return portalRoot +("/images/Buttons/behavior-alert.png");

            case "brainpop.png" : 
                return portalRoot +("/images/Buttons/BrainPop.png");
        
            case "canvas.png" : 
                return portalRoot +("/images/Buttons/Canvas.png");
            
            case "ccgi-logo.png" : 
                return portalRoot +("/images/Buttons/ccgi-logo.png");

            case "cviss-website.png" : 
                return portalRoot +("/images/Buttons/CVISS-Website.png");

            case "cvod.png" : 
                return portalRoot +("/images/Buttons/CVOD.png");
            
            case "cvuhsd-course-resources.png" : 
                return portalRoot +("/images/Buttons/CVUHSD-Course-Resources.png");

            case "cv-website.png" : 
                return portalRoot +("/images/Buttons/CV-Website.png");

            case "destiny.png" : 
                return portalRoot +("/images/Buttons/Destiny.png");

            case "ebsco.png" : 
                return portalRoot +("/images/Buttons/EBSCO.png");
            
            case "edgenuity.png" : 
                return portalRoot +("/images/Buttons/Edgenuity.png");

            case "edlio-cviss.png" : 
                return portalRoot +("/images/Buttons/Edlio-CVISS.png");
            
            case "edlio-cvuhsd.png" : 
                return portalRoot +("/images/Buttons/Edlio-CVUHSD.png");
            
            case "edlio-hw.png" : 
                return portalRoot +("/images/Buttons/Edlio-HW.png");

            case "edlio-ll.png" : 
                return portalRoot +("/images/Buttons/Edlio-LL.png");

            case "edlio-lw.png" : 
                return portalRoot +("/images/Buttons/Edlio-LL.png");

            case "edlio-lz.png" : 
                return portalRoot +("/images/Buttons/Edlio-LZ.png");

            case "ed-tech-resources.png" : 
                return portalRoot +("/images/Buttons/ed-tech-resources.png");
            
            case "everfi.png" : 
                return portalRoot +("/images/Buttons/everfi.jpg");

            case "flipsterhw.png" : 
                return portalRoot +("/images/Buttons/FlipsterHW.png");

            case "flipsterlw.png" : 
                return portalRoot +("/images/Buttons/FlipsterLW.png");

            case "flipsterlz.png" : 
                return portalRoot +("/images/Buttons/FlipsterLZ.png");

            case "gmail.png" : 
                return portalRoot +("/images/Buttons/gmail.png"); 
                
            case "goguardian.png" : 
                return portalRoot +("/images/Buttons/GoGuardian.png");    

            case "google-drive.png" : 
                return portalRoot +("/images/Buttons/google-drive.png"); 

            case "hawthorne-laptop-cart-system.png" : 
                return portalRoot +("/images/Buttons/hawthorne-laptop-cart-system.png"); 
            
            case "helpdesk.png" : 
                return portalRoot +("/images/Buttons/Helpdesk.png");

            case "hero.png" : 
                return portalRoot +("/images/Buttons/Hero.png");

            case "hmh.png" : 
                return portalRoot +("/images/Buttons/HMH.png");

            case "hw-website.png" : 
                return portalRoot +("/images/Buttons/HW-Website.png");

            case "illuminate.png" : 
                return portalRoot +("/images/Buttons/Illuminate.png");

            case "illuminate-student.png" : 
                return portalRoot +("/images/Buttons/Illuminate-Student.png");

            case "illuminate-teacher.png" : 
                return portalRoot +("/images/Buttons/Illuminate-Teacher.png");
            
            case "infosnap.png" : 
                return portalRoot +("/images/Buttons/infosnap.png");

            case "lacoe-media.jpg" : 
                return portalRoot +("/images/Buttons/lacoe-media.jpg");

            case "lawndale-laptop-cart-system.png" : 
                return portalRoot +("/images/Buttons/lawndale-laptop-cart-system.png");

            case "leuzinger-laptop-cart-system.png" : 
                return portalRoot +("/images/Buttons/lawndale-laptop-cart-system.png");

            case "ll-website.png" : 
                return portalRoot +("/images/Buttons/LL-Website.png");

            case "lw-website.png" : 
                return portalRoot +("/images/Buttons/LW-Website.png");

            case "lz-website.png" : 
                return portalRoot +("/images/Buttons/LZ-Website.png");

            case "office365.png" : 
                return portalRoot +("/images/Buttons/office365.png");

            case "outlook.png" : 
                return portalRoot +("/images/Buttons/Outlook.png");

            case "overdrive.png" : 
                return portalRoot +("/images/Buttons/Overdrive.png");  
            
            case "password-portal.png" : 
                return portalRoot +("/images/Buttons/password-portal.png"); 
                
            case "print-center.png" : 
                return portalRoot +("/images/Buttons/print-center.png");   

            case "ps.png" : 
                return portalRoot +("/images/Buttons/PS.png"); 

            case "ps-student.png" : 
                return portalRoot +("/images/Buttons/PS-student.png");
                           
            case "pt.png" : 
                return portalRoot +("/images/Buttons/PT.png"); 

            case "read180hw-student.png" : 
                return portalRoot +("/images/Buttons/Read180HW-Student.png");
                
            case "read180hw-teacher.png" : 
                return portalRoot +("/images/Buttons/Read180HW-Teacher.png"); 

            case "read180lw-student.png" : 
                return portalRoot +("/images/Buttons/Read180LW-Student.png");

            case "read180lw-teacher.png" : 
                return portalRoot +("/images/Buttons/Read180LW-Teacher.png");
    
            case "read180lz-student.png" : 
                return portalRoot +("/images/Buttons/Read180LZ-Student.png"); 

            case "read180lz-teacher.png" : 
                return portalRoot +("/images/Buttons/Read180LZ-Teacher.png");

            case "schmoop.png" : 
                return portalRoot +("/images/Buttons/schmoop.png");

            case "school-dude.png" : 
                return portalRoot +("/images/Buttons/school-dude.png");

            case "school-dude-old.png" : 
                return portalRoot +("/images/Buttons/school-dude-old.png");

            case "schoolmessenger-button.png" : 
                return portalRoot +("/images/Buttons/schoolmessenger-button.png");

            case "shmoop.png" : 
                return portalRoot +("/images/Buttons/shmoop.png");

            case "shmoop-mine.png" : 
                return portalRoot +("/images/Buttons/shmoop.png");

            case "smartetools.png" : 
                return portalRoot +("/images/Buttons/smartetools.png");

            case "smartetools-mine.png" : 
                return portalRoot +("/images/Buttons/smartetools-mine.png");

            case "staff-only.png" : 
                return portalRoot +("/images/Buttons/staff-only.png");

            case "staff-only-mine.png" : 
                return portalRoot +("/images/Buttons/staff-only-mine.png");

            case "techItOut_Button.png" : 
                return portalRoot +("/images/Buttons/TechItOut_Button.png");

            case "timeclockpluslogo.jpg" : 
                return portalRoot +("/images/Buttons/TimeClockPlusLogo.jpg");

            case "turnitin.png" : 
                return portalRoot +("/images/Buttons/turnitin.png");

            case "wayside-publishing.png" : 
                return portalRoot +("/images/Buttons/Wayside-publishing.png");
            
            case "unified-talent.png" : 
                return portalRoot +("/images/Buttons/unified-talent.png");

            default :  
                return portalRoot +("/images/Buttons/Outlook.png");
        } //end switch statement
       
    }; //return getImage

    let previewImage = { uri: "data:image/svg+xml,%3Csvg class='lds-spinner' width='200px' height='200px' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' style='shape-rendering: auto; animation-play-state: running; animation-delay: 0s; background: rgba(0, 0, 0, 0) none repeat scroll 0%25 0%25;'%3E%3Cg transform='rotate(0 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.9s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(36 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.8s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(72 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.7s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(108 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.6s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(144 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.5s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(180 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.4s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(216 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.3s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(252 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.2s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(288 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.1s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(324 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='0s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3C/svg%3E"};

    if (__DEV__) {
        console.log('I am in development');
        CacheManager.clearCache();
    } 
   
    CacheManager.clearCache();
    let uri = getImage(props.buttonImg);

    return (
        <TouchableHighlight 
            style={serviceButton_styles.touchableHighlight}
            onPress={ () => { openLink(props) } }
        >
            <ImageCache  
                    style={serviceButton_styles.image}
                    accessible={props.description ? true : false}
                    accessibilityLabel={props.description}
                    {...{previewImage, uri}}
                    tint = "dark"
                    transitionDuration={800}
            />
        </TouchableHighlight>
    );
};

export default LinkButton;

{/* <LinkButton 
                        name="Spiceworks"
                        imagePath="CVUHSD-Course-Resources.png"
                        deepLink="spiceworks://"
                    /> */}
                    {/* <Button 
                            onPress={ () => { 
                                                Linking.openURL("spiceworks://")
                                            } 
                                    }
                            title="Spiceworks"
                            accessibilityLabel="Press this button to open Lyft"
                    />
                    <Button 
                        onPress={ () => { 
                                            let titanHST_config = {
                                            appName: "titan-hst",
                                            appStoreId: "855732889",
                                            appStoreLocale: "us",
                                            playStoreId: "swipe.android.titanHst"
                                    
                                            };

                                            //Linking.openURL("855732889://");
                                            //Open in App Store:
                                            AppLink.openInStore(titanHST_config);
                                        } 
                                }
                        title="Titan"
                        accessibilityLabel="Press this button to open Lyft"
                    />  */}

                    