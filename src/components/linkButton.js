import React from "react";
import { StyleSheet, TouchableHighlight, Linking } from "react-native";

import AppLink from "react-native-app-link";

import { Image as ImageCache, CacheManager } from "react-native-expo-image-cache";

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
        let baseImageFolder = `.././assets/images/buttons/`;
        let portalRoot = "https://portal.centinela.k12.ca.us";
        let imagePath_LowerCase = imagePath.toString().toLowerCase();
        
        switch (imagePath_LowerCase) {
            case "aesop.png": 
                return portalRoot +("/images/buttons/Aesop.png");

            case "apex.png": 
                return portalRoot +("/images/buttons/Apex.png")

            case "bb-admin.png" : 
                return portalRoot +("/images/buttons/BB-Admin.png");

            case "bb-teacher.png" : 
                return portalRoot +("/images/buttons/BB-Teacher.png");

            case "behavior-alert.png" : 
                return portalRoot +("/images/buttons/behavior-alert.png");

            case "brainpop.png" : 
                return portalRoot +("/images/buttons/BrainPop.png");
        
            case "canvas.png" : 
                return portalRoot +("/images/buttons/Canvas.png");
            
            case "ccgi-logo.png" : 
                return portalRoot +("/images/buttons/ccgi-logo.png");
            
            case "clever_button_bevel.png" : 
                return portalRoot +("/images/buttons/Clever_Button_Bevel.png");

            case "cviss-website.png" : 
                return portalRoot +("/images/buttons/CVISS-Website.png");

            case "cvod.png" : 
                return portalRoot +("/images/buttons/CVOD.png");
            
            case "cvuhsd-course-resources.png" : 
                return portalRoot +("/images/buttons/CVUHSD-Course-Resources.png");

            case "cv-website.png" : 
                return portalRoot +("/images/buttons/CV-Website.png");

            case "destiny.png" : 
                return portalRoot +("/images/buttons/Destiny.png");

            case "ebsco.png" : 
                return portalRoot +("/images/buttons/EBSCO.png");
            
            case "edgenuity.png" : 
                return portalRoot +("/images/buttons/Edgenuity.png");

            case "edlio-cviss.png" : 
                return portalRoot +("/images/buttons/Edlio-CVISS.png");
            
            case "edlio-cvuhsd.png" : 
                return portalRoot +("/images/buttons/Edlio-CVUHSD.png");
            
            case "edlio-hw.png" : 
                return portalRoot +("/images/buttons/Edlio-HW.png");

            case "edlio-ll.png" : 
                return portalRoot +("/images/buttons/Edlio-LL.png");

            case "edlio-lw.png" : 
                return portalRoot +("/images/buttons/Edlio-LL.png");

            case "edlio-lz.png" : 
                return portalRoot +("/images/buttons/Edlio-LZ.png");

            case "ed-tech-resources.png" : 
                return portalRoot +("/images/buttons/ed-tech-resources.png");
            
            case "everfi.jpg" : 
                return portalRoot +("/images/buttons/everfi.jpg");

            case "flipsterhw.png" : 
                return portalRoot +("/images/buttons/FlipsterHW.png");

            case "flipsterlw.png" : 
                return portalRoot +("/images/buttons/FlipsterLW.png");

            case "flipsterlz.png" : 
                return portalRoot +("/images/buttons/FlipsterLZ.png");

            case "gmail.png" : 
                return portalRoot +("/images/buttons/gmail.png"); 
                
            case "goguardian.png" : 
                return portalRoot +("/images/buttons/GoGuardian.png");    

            case "google-drive.png" : 
                return portalRoot +("/images/buttons/google-drive.png"); 

            case "hawthorne-laptop-cart-system.png" : 
                return portalRoot +("/images/buttons/hawthorne-laptop-cart-system.png"); 
            
            case "helpdesk.png" : 
                return portalRoot +("/images/buttons/Helpdesk.png");

            case "hero.png" : 
                return portalRoot +("/images/buttons/Hero.png");

            case "hmh.png" : 
                return portalRoot +("/images/buttons/HMH.png");

            case "hw-website.png" : 
                return portalRoot +("/images/buttons/HW-Website.png");

            case "illuminate.png" : 
                return portalRoot +("/images/buttons/Illuminate.png");

            case "illuminate-student.png" : 
                return portalRoot +("/images/buttons/Illuminate-Student.png");

            case "illuminate-teacher.png" : 
                return portalRoot +("/images/buttons/Illuminate-Teacher.png");
            
            case "infosnap.png" : 
                return portalRoot +("/images/buttons/infosnap.png");

            case "lacoe-media.jpg" : 
                return portalRoot +("/images/buttons/lacoe-media.jpg");

            case "lawndale-laptop-cart-system.png" : 
                return portalRoot +("/images/buttons/lawndale-laptop-cart-system.png");

            case "leuzinger-laptop-cart-system.png" : 
                return portalRoot +("/images/buttons/lawndale-laptop-cart-system.png");

            case "ll-website.png" : 
                return portalRoot +("/images/buttons/LL-Website.png");

            case "lw-website.png" : 
                return portalRoot +("/images/buttons/LW-Website.png");

            case "lz-website.png" : 
                return portalRoot +("/images/buttons/LZ-Website.png");

            case "office365.png" : 
                return portalRoot +("/images/buttons/office365.png");

            case "outlook.png" : 
                return portalRoot +("/images/buttons/Outlook.png");

            case "overdrive.png" : 
                return portalRoot +("/images/buttons/Overdrive.png");  
            
            case "password-portal.png" : 
                return portalRoot +("/images/buttons/password-portal.png"); 
                
            case "print-center.png" : 
                return portalRoot +("/images/buttons/print-center.png");   

            case "ps.png" : 
                return portalRoot +("/images/buttons/PS.png"); 

            case "ps-student.png" : 
                return portalRoot +("/images/buttons/PS-student.png");
                           
            case "pt.png" : 
                return portalRoot +("/images/buttons/PT.png"); 

            case "read180hw-student.png" : 
                return portalRoot +("/images/buttons/Read180HW-Student.png");
                
            case "read180hw-teacher.png" : 
                return portalRoot +("/images/buttons/Read180HW-Teacher.png"); 

            case "read180lw-student.png" : 
                return portalRoot +("/images/buttons/Read180LW-Student.png");

            case "read180lw-teacher.png" : 
                return portalRoot +("/images/buttons/Read180LW-Teacher.png");
    
            case "read180lz-student.png" : 
                return portalRoot +("/images/buttons/Read180LZ-Student.png"); 

            case "read180lz-teacher.png" : 
                return portalRoot +("/images/buttons/Read180LZ-Teacher.png");

            case "schmoop.png" : 
                return portalRoot +("/images/buttons/schmoop.png");

            case "school-dude.png" : 
                return portalRoot +("/images/buttons/school-dude.png");

            case "school-dude-old.png" : 
                return portalRoot +("/images/buttons/school-dude-old.png");

            case "schoolmessenger-button.png" : 
                return portalRoot +("/images/buttons/schoolmessenger-button.png");

            case "shmoop.png" : 
                return portalRoot +("/images/buttons/shmoop.png");

            case "shmoop-mine.png" : 
                return portalRoot +("/images/buttons/shmoop.png");

            case "smartetools.png" : 
                return portalRoot +("/images/buttons/smartetools.png");

            case "smartetools-mine.png" : 
                return portalRoot +("/images/buttons/smartetools-mine.png");

            case "staff-only.png" : 
                return portalRoot +("/images/buttons/staff-only.png");

            case "staff-only-mine.png" : 
                return portalRoot +("/images/buttons/staff-only-mine.png");

            case "techitout_button.png" : 
                return portalRoot +("/images/buttons/TechItOut_Button.png");

            case "timeclockpluslogo.jpg" : 
                return portalRoot +("/images/buttons/TimeClockPlusLogo.jpg");

            case "turnitin.png" : 
                return portalRoot +("/images/buttons/turnitin.png");

            case "wayside-publishing.png" : 
                return portalRoot +("/images/buttons/Wayside-publishing.png");

            case "unified-talent.png" : 
                return portalRoot +("/images/buttons/unified-talent.png");

            default :  
                return portalRoot +("/images/buttons/Outlook.png");
        } //end switch statement
       
    }; //return getImage

    let previewImage = { uri: "data:image/svg+xml,%3Csvg class='lds-spinner' width='200px' height='200px' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' style='shape-rendering: auto; animation-play-state: running; animation-delay: 0s; background: rgba(0, 0, 0, 0) none repeat scroll 0%25 0%25;'%3E%3Cg transform='rotate(0 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.9s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(36 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.8s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(72 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.7s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(108 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.6s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(144 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.5s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(180 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.4s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(216 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.3s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(252 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.2s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(288 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='-0.1s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3Cg transform='rotate(324 50 50)' style='animation-play-state: running; animation-delay: 0s;'%3E%3Crect x='47' y='26' rx='9.4' ry='5.2' width='6' height='8' fill='%231e6c93' style='animation-play-state: running; animation-delay: 0s;'%3E%3Canimate attributeName='opacity' values='1;0' keyTimes='0;1' dur='1s' begin='0s' repeatCount='indefinite' style='animation-play-state: running; animation-delay: 0s;'%3E%3C/animate%3E%3C/rect%3E%3C/g%3E%3C/svg%3E"};

    // if (__DEV__) {
    //     console.log('I am in development');
    //     CacheManager.clearCache();
    // } 
   
    // CacheManager.clearCache();
    let uri = getImage(props.buttonImg);

    return (
        <TouchableHighlight 
            style   =   { serviceButton_styles.touchableHighlight }
            onPress =   { () => { openLink(props) } }
        >
            <ImageCache  
                    style               =   { serviceButton_styles.image }
                    accessible          =   { props.description ? true : false }
                    accessibilityLabel  =   { props.description }           
                    tint                =   "dark"
                    transitionDuration  =   { 300}
                    {...{ previewImage, uri } }
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

                    