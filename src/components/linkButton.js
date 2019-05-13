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

            default :  
                return portalRoot +("/images/Buttons/Outlook.png");
        } //end switch statement
       
    }; //return getImage

    const previewImage = { uri: 'data:image/png;base64,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'};

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

                    