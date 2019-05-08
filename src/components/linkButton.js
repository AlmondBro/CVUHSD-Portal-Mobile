import React from "react";
import { StyleSheet, Image, TouchableHighlight, Linking } from "react-native";

import AppLink from 'react-native-app-link';

const serviceButton_styles = StyleSheet.create({
    touchableHighlight: {
       alignSelf: 'center',
       marginTop: 13,
       marginBottom: 13
    },

    image: {

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
        let baseImageFolder = `./../assets/images/Buttons/`;
        let imagePath_LowerCase = imagePath.toString().toLowerCase();
        
        switch (imagePath_LowerCase) {
            case "aesop.png": 
                return require("./../assets/images/Buttons/Aesop.png");

            case "bb-admin.png" : 
                return require("./../assets/images/Buttons/BB-Admin.png");

            case "bb-teacher.png" : 
                return require("./../assets/images/Buttons/BB-Teacher.png");

            case "behavior-alert.png" : 
                return require("./../assets/images/Buttons/behavior-alert.png");

            case "brainpop.png" : 
                return require("./../assets/images/Buttons/BrainPop.png");
        
            case "canvas.png" : 
                return require("./../assets/images/Buttons/Canvas.png");
            
            case "ccgi-logo.png" : 
                return require("./../assets/images/Buttons/ccgi-logo.png");

            case "cviss-website.png" : 
                return require("./../assets/images/Buttons/CVISS-Website.png");

            case "cvod.png" : 
                return require("./../assets/images/Buttons/CVOD.png");
            
            case "cvuhsd-course-resources.png" : 
                return require("./../assets/images/Buttons/CVUHSD-Course-Resources.png");

            case "cv-website.png" : 
                return require("./../assets/images/Buttons/CV-Website.png");

            case "destiny.png" : 
                return require("./../assets/images/Buttons/Destiny.png");

            case "ebsco.png" : 
                return require("./../assets/images/Buttons/EBSCO.png");
            
            case "edgenuity.png" : 
                return require("./../assets/images/Buttons/Edgenuity.png");

            case "edlio-cviss.png" : 
                return require("./../assets/images/Buttons/Edlio-CVISS.png");
            
            case "edlio-cvuhsd.png" : 
                return require("./../assets/images/Buttons/Edlio-CVUHSD.png");
            
            case "edlio-hw.png" : 
                return require("./../assets/images/Buttons/Edlio-HW.png");

            case "edlio-ll.png" : 
                return require("./../assets/images/Buttons/Edlio-LL.png");

            case "edlio-lw.png" : 
                return require("./../assets/images/Buttons/Edlio-LL.png");

            case "edlio-lz.png" : 
                return require("./../assets/images/Buttons/Edlio-LZ.png");

            case "ed-tech-resources.png" : 
                return require("./../assets/images/Buttons/ed-tech-resources.png");
            
            case "everfi.png" : 
                return require("./../assets/images/Buttons/everfi.jpg");

            case "flipsterhw.png" : 
                return require("./../assets/images/Buttons/FlipsterHW.png");

            case "flipsterlw.png" : 
                return require("./../assets/images/Buttons/FlipsterLW.png");

            case "flipsterlz.png" : 
                return require("./../assets/images/Buttons/FlipsterLZ.png");

            case "gmail.png" : 
                return require("./../assets/images/Buttons/gmail.png"); 
                
            case "goguardian.png" : 
                return require("./../assets/images/Buttons/GoGuardian.png");    

            case "google-drive.png" : 
                return require("./../assets/images/Buttons/google-drive.png"); 

            case "hawthorne-laptop-cart-system.png" : 
                return require("./../assets/images/Buttons/hawthorne-laptop-cart-system.png"); 
            
            case "helpdesk.png" : 
                return require("./../assets/images/Buttons/Helpdesk.png");

            case "hero.png" : 
                return require("./../assets/images/Buttons/Hero.png");

            case "hmh.png" : 
                return require("./../assets/images/Buttons/HMH.png");

            case "hw-website.png" : 
                return require("./../assets/images/Buttons/HW-Website.png");

            case "illuminate.png" : 
                return require("./../assets/images/Buttons/Illuminate.png");

            case "illuminate-student.png" : 
                return require("./../assets/images/Buttons/Illuminate-Student.png");

            case "illuminate-teacher.png" : 
                return require("./../assets/images/Buttons/Illuminate-Teacher.png");
            
            case "infosnap.png" : 
                return require("./../assets/images/Buttons/infosnap.png");

            case "lacoe-media.png" : 
                return require("./../assets/images/Buttons/lacoe-media.jpg");

            case "lawndale-laptop-cart-system.png" : 
                return require("./../assets/images/Buttons/lawndale-laptop-cart-system.png");

            case "leuzinger-laptop-cart-system.png" : 
                return require("./../assets/images/Buttons/lawndale-laptop-cart-system.png");

            case "ll-Website.png" : 
                return require("./../assets/images/Buttons/LL-Website.png");

            case "lw-Website.png" : 
                return require("./../assets/images/Buttons/LW-Website.png");

            case "lz-Website.png" : 
                return require("./../assets/images/Buttons/LZ-Website.png");

            case "office365.png" : 
                return require("./../assets/images/Buttons/office365.png");

            case "outlook.png" : 
                return require("./../assets/images/Buttons/Outlook.png");

            case "overdrive.png" : 
                return require("./../assets/images/Buttons/Overdrive.png");  
            
            case "password-portal.png" : 
                return require("./../assets/images/Buttons/password-portal.png"); 
                
            case "print-center.png" : 
                return require("./../assets/images/Buttons/print-center.png");   

            case "ps.png" : 
                return require("./../assets/images/Buttons/PS.png"); 

            case "ps-student.png" : 
                return require("./../assets/images/Buttons/PS-student.png");
                           
            case "pt.png" : 
                return require("./../assets/images/Buttons/PT.png"); 

            case "read180hw-student.png" : 
                return require("./../assets/images/Buttons/Read180HW-Student.png");
                
            case "read180hw-teacher.png" : 
                return require("./../assets/images/Buttons/Read180HW-Teacher.png"); 

            case "read180lw-student.png" : 
                return require("./../assets/images/Buttons/Read180LW-Student.png");

            case "read180lw-teacher.png" : 
                return require("./../assets/images/Buttons/Read180LW-Teacher.png");
    
            case "read180lz-student.png" : 
                return require("./../assets/images/Buttons/Read180LZ-Student.png"); 

            case "read180lz-teacher.png" : 
                return require("./../assets/images/Buttons/Read180LZ-Teacher.png");

            case "schmoop.png" : 
                return require("./../assets/images/Buttons/schmoop.png");

            case "school-dude.png" : 
                return require("./../assets/images/Buttons/school-dude.png");

            case "school-dude-old.png" : 
                return require("./../assets/images/Buttons/school-dude-old.png");

            case "schoolmessenger-button.png" : 
                return require("./../assets/images/Buttons/schoolmessenger-button.png");

            case "shmoop.png" : 
                return require("./../assets/images/Buttons/shmoop.png");

            case "shmoop-mine.png" : 
                return require("./../assets/images/Buttons/shmoop.png");

            case "smartetools.png" : 
                return require("./../assets/images/Buttons/smartetools.png");

            case "smartetools-mine.png" : 
                return require("./../assets/images/Buttons/smartetools-mine.png");

            case "staff-only.png" : 
                return require("./../assets/images/Buttons/staff-only.png");

            case "staff-only-mine.png" : 
                return require("./../assets/images/Buttons/staff-only-mine.png");

            case "techItOut_Button.png" : 
                return require("./../assets/images/Buttons/TechItOut_Button.png");

            case "timeclockpluslogo.jpg" : 
                return require("./../assets/images/Buttons/TimeClockPlusLogo.jpg");

            case "turnitin.png" : 
                return require("./../assets/images/Buttons/turnitin.png");

            case "wayside-publishing.jpg" : 
                return require("./../assets/images/Buttons/Wayside-publishing.png");

            default :  
                return require("./../assets/images/Buttons/Outlook.png");
        } //end switch statement
       
    }; //return getImage

    let imageSource = `./../assets/images/Buttons/${props.imagePath}`;

    // images/buttons/CV-Website.png

    let imageSourceURI = `http://portal.centinela.k12.ca.us/images/buttons/${props.imagePath}`;

    return (
        <TouchableHighlight 
            style={serviceButton_styles.touchableHighlight}
            onPress={ () => { openLink(props) } }
        >
            <Image  style={serviceButton_styles.image}
                    source={ getImage(props.buttonImg) }  
                    accessible={props.description ? true : false}
                    accessibilityLabel={props.description}
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

                    