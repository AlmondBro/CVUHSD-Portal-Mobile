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
    let openLink = () => {
        Linking.openURL(props.deepLink)
    };

    let getImage = (imagePath) => {
        let baseImageFolder = `./../assets/images/Buttons/`;
        switch (imagePath) {
            case "Aesop.png" : 
                return require("./../assets/images/Buttons/Aesop.png");

            case "BB-Admin.png" : 
                return require("./../assets/images/Buttons/BB-Admin.png");

            case "BB-Teacher.png" : 
                return require("./../assets/images/Buttons/BB-Teacher.png");

            case "behavior-alert.png" : 
                return require("./../assets/images/Buttons/behavior-alert.png");

            case "BrainPop.png" : 
                return require("./../assets/images/Buttons/BrainPop.png");
        
            case "Canvas.png" : 
                return require("./../assets/images/Buttons/Canvas.png");
            
            case "ccgi-logo.png" : 
                return require("./../assets/images/Buttons/ccgi-logo.png");

            case "CVISS-Website.png" : 
                return require("./../assets/images/Buttons/CVISS-Website.png");

            case "CVOD.png" : 
                return require("./../assets/images/Buttons/CVOD.png");
            
            case "CVUHSD-Course-Resources.png" : 
                return require("./../assets/images/Buttons/CVUHSD-Course-Resource.png");

            case "CV-Website.png" : 
                return require("./../assets/images/Buttons/CV-Website.png");

            case "Destiny.png" : 
                return require("./../assets/images/Buttons/Destiny.png");

            case "EBSCO.png" : 
                return require("./../assets/images/Buttons/EBSCO.png");
            
            case "Edgenuity.png" : 
                return require("./../assets/images/Buttons/Edgenuity.png");

            case "Edlio-CVISS.png" : 
                return require("./../assets/images/Buttons/Edlio-CVISS.png");
            
            case "Edlio-CVUHSD.png" : 
                return require("./../assets/images/Buttons/Edlio-CVUHSD.png");
            
            case "Edlio-HW.png" : 
                return require("./../assets/images/Buttons/Edlio-HW.png");

            case "Edlio-LL.png" : 
                return require("./../assets/images/Buttons/Edlio-LL.png");

            case "Edlio-LW.png" : 
                return require("./../assets/images/Buttons/Edlio-LL.png");

            case "Edlio-LZ.png" : 
                return require("./../assets/images/Buttons/Edlio-LZ.png");

            case "ed-tech-resources.png" : 
                return require("./../assets/images/Buttons/ed-tech-resources.png");
            
            case "everfi.png" : 
                return require("./../assets/images/Buttons/everfi.png");

            case "FlipsterHW.png" : 
                return require("./../assets/images/Buttons/FlipsterHW.png");

            case "FlipsterLW.png" : 
                return require("./../assets/images/Buttons/FlipsterLW.png");

            case "FlipsterLZ.png" : 
                return require("./../assets/images/Buttons/FlipsterLZ.png");

            case "gmail.png" : 
                return require("./../assets/images/Buttons/gmail.png"); 
                
            case "GoGuardian.png" : 
                return require("./../assets/images/Buttons/GoGuardian.png");    

            case "google-drive.png" : 
                return require("./../assets/images/Buttons/google-drive.png"); 

            case "hawthorne-laptop-cart-system.png" : 
                return require("./../assets/images/Buttons/hawthorne-laptop-cart-system.png"); 
            
            case "Helpdesk.png" : 
                return require("./../assets/images/Buttons/HelpDesk.png");

            case "Hero.png" : 
                return require("./../assets/images/Buttons/Hero.png");

            case "HMH.png" : 
                return require("./../assets/images/Buttons/HMH.png");

            case "HW-Website.png" : 
                return require("./../assets/images/Buttons/HW-Website.png");

            case "Illuminate.png" : 
                return require("./../assets/images/Buttons/Illuminate.png");

            case "Illuminate-Student.png" : 
                return require("./../assets/images/Buttons/Illuminate-Student.png");

            case "Illuminate-Teacher.png" : 
                return require("./../assets/images/Buttons/Illuminate-Teacher.png");
            
            case "infosnap.png" : 
                return require("./../assets/images/Buttons/infosnap.png");

            case "lacoe-media.png" : 
                return require("./../assets/images/Buttons/lacoe-media.png");

            case "lawndale-laptop-cart-system.png" : 
                return require("./../assets/images/Buttons/lawndale-laptop-cart-system.png");

            case "leuzinger-laptop-cart-system.png" : 
                return require("./../assets/images/Buttons/lawndale-laptop-cart-system.png");

            case "LL-Website.png" : 
                return require("./../assets/images/Buttons/LL-Website.png");

            case "LW-Website.png" : 
                return require("./../assets/images/Buttons/LW-Website.png");

            case "LZ-Website.png" : 
                return require("./../assets/images/Buttons/LZ-Website.png");

            case "office365.png" : 
                return require("./../assets/images/Buttons/office365.png");

            case "Outlook.png" : 
                return require("./../assets/images/Buttons/Outlook.png");

            case "Overdrive.png" : 
                return require("./../assets/images/Buttons/Overdrive.png");  
            
            case "password-portal.png" : 
                return require("./../assets/images/Buttons/password-portal.png"); 
                
            case "print-center.png" : 
                return require("./../assets/images/Buttons/print-center.png");   

            case "PS.png" : 
                return require("./../assets/images/Buttons/PS.png"); 

            case "PS-student.png" : 
                return require("./../assets/images/Buttons/PS-student.png");
                
            case "PT.png" : 
                return require("./../assets/images/Buttons/PS.png");
                            
            case "PT.png" : 
                return require("./../assets/images/Buttons/PT.png"); 

            case "Read180HW-Student.png" : 
                return require("./../assets/images/Buttons/Read180HW-Student.png");
                
            case "Read180HW-Teacher.png" : 
                return require("./../assets/images/Buttons/Read180HW-Teacher.png"); 

            case "Read180LW-Student.png" : 
                return require("./../assets/images/Buttons/Read180LW-Student.png");

            case "Read180LW-Teacher.png" : 
                return require("./../assets/images/Buttons/Read180LW-Teacher.png");
            
            case "Read180LW-Teacher.png" : 
                return require("./../assets/images/Buttons/Read180LW-Teacher.png"); 

            case "Read180LZ-Student.png" : 
                return require("./../assets/images/Buttons/Read180LZ-Student.png"); 

            case "Read180LZ-Teacher.png" : 
                return require("./../assets/images/Buttons/Read180LX-Teacher.png");

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

            case "TechItOut_Button.png" : 
                return require("./../assets/images/Buttons/TechItOut_Button.png");

            case "TimeClockPlusLogo.jpg" : 
                return require("./../assets/images/Buttons/TimeClockPlusLogo.jpg");

            case "turnitin.jpg" : 
                return require("./../assets/images/Buttons/turnitin.jpg");

            case "Wayside-publishing.jpg" : 
                return require("./../assets/images/Buttons/Wayside-publishing.jpg");

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
            onPress={openLink}
        >
            <Image  style={serviceButton_styles.image}
                    source={ getImage(props.imageSource) }  
                    accessibilityLabel={props.name}
                    accessible={props.name ? true : false}
            />
        </TouchableHighlight>
    );
};

export default LinkButton;