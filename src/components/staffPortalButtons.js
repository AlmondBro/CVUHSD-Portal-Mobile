let staffPortalButtons = {
    quickLinks : {
        outlookEmail_button : {
            buttonLink: "https://sso.centinela.k12.ca.us/adfs/ls/?wa=wsignin1.0&wtrealm=https%3a%2f%2fmail.centinela.k12.ca.us%2fowa%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fowa%252f&wct=2017-08-21T18%3a05%3a05Z",
            buttonImg: "Outlook.png",
            description: "Outlook E-mail",
            deepLink : "ms-outlook://",
            appLink_config : {
                appName: "microsoft-outlook",
                appStoreId: "951937596",
                appStoreLocale: "us",
                playStoreId: "com.microsoft.office.outlook"
            }
        },
    
        canvas_button : {
            buttonLink: "https://centinela.instructure.com/",
            buttonImg: "canvas.png",
            description: "Canvas (Learning Management System)",
            deepLink : "canvas-teacher://",
            appLink_config : {
                appName: "canvas-teacher",
                appStoreId: "1257834464",
                appStoreLocale: "us",
                playStoreId: "com.instructure.teacher"
            }

        },
        //TODO : Need to get illuminate deep link working!
        illuminate_button : {
            buttonLink: "https://centinela.illuminateed.com/dna/?prev_page=Main_NotDashboardPage&amp;page=SisLogin",
            buttonImg: "illuminate.png",
            deepLink: "illuminate://",
            description: "Illuminate (Assessments)",
            appLink_config : {
                appName: "illuminate-hc",
                appStoreId: "1082772020",
                appStoreLocale: "us",
                playStoreId: "com.illuminateed.gd.conferences"
            }
        },
    
        //TODO: Need to find hero deep link!!
        hero_button : {
            buttonLink: "https://access.heropowered.com/login/centinelavalley-usd",
            buttonImg: "hero.png",
            deepLink: "hero://",
            description: "Hero (PBIS System)",
            appLink_config : {
                appName: "hero-k12",
                appStoreId: "980722195",
                appStoreLocale: "us",
                playStoreId: "com.plascotrac.app.hero"
            }
        },
        
        //TODO: Need to find deep link for school messenger!
        schoolMessenger_button : {
            buttonLink: "https://asp.schoolmessenger.com/centinela",
            buttonImg: "schoolmessenger-button.png",
            description: "School Messenger",
            deepLink: "school-messenger://",
            appLink_config : {
                appName: "schoolmessenger",
                appStoreId: "978894818",
                appStoreLocale: "us",
                playStoreId: "com.schoolmessenger.recipient"
            }
        },
    
        //TODO: Need to find deep link for power teacher!
        powerTeacher_button : {
            buttonLink: "https://powerschool.centinela.k12.ca.us/teachers/pw.html",
            buttonImg: "PT.png",
            description: "PowerSchool Teacher",
            deepLink: "pss-Teacher://",
            appLink_config : {
                appName: "powerteacher-mobile",
                appStoreId: "390563073",
                appStoreLocale: "us",
                playStoreId: "com.powerschool.portal"
            }
        },
    
        googleDrive_button : { 
            buttonLink: "https://accounts.google.com/signin/v2/sl/pwd?service=wise&amp;passive=1209600&amp;osid=1&amp;continue=https%3A%2F%2Fdrive.google.com%2F&amp;followup=https%3A%2F%2Fdrive.google.com%2F&amp;emr=1&amp;flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin",
            buttonImg: "google-drive.png",
            description: "Google Drive",
            deepLink: "googledrive://",
            appLink_config : {
                appName: "google-drive",
                appStoreId: "507874739",
                appStoreLocale: "us",
                playStoreId: "com.google.android.apps.docs"
            }
        },
    
        printCenter_button : {
            buttonLink: "https://cvprintcenter.myprintdesk.net/DSF/smartstore.aspx#!/Storefront",
            buttonImg: "print-center.png",
            description: "Printer Center"
        },
    
        helpDesk_button : {
            buttonLink: "https://helpdesk.centinela.k12.ca.us",
            buttonImg: "helpdesk.png",
            description: "Helpdesk (C.V. I.T. Department)"
        },
    
        /* Possible deep link: 
        
            deepLink: "itms-apps://itunes.apple.com/us/app-bundle/microsoft-office-365/id1450038993?mt=12",
            appLink_config : {
                appName: "google-drive",
                appStoreId: "507874739",
                appStoreLocale: "us",
                playStoreId: "com.google.android.apps.docs"
            }*/
        office365_button : {
            buttonLink: "https://portal.office.com/",
            buttonImg: "office365.png",
            description: "Office 365 Login"
        },
    
        californiaCollegeGuidance_Initiative : {
            buttonLink: "https://www.californiacolleges.edu/#/user-login",
            buttonImg: "ccgi-logo.png",
            description: "California College Guidance Initiative"
        }
    }, //end quickLinks

    standardStaffTools : {
        gmail_button : {
            buttonLink: "https://accounts.google.com/signin/v2/sl/pwd?service=mail&amp;passive=true&amp;rm=false&amp;continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&amp;ss=1&amp;scc=1&amp;ltmpl=default&amp;ltmplcache=2&amp;emr=1&amp;osid=1&amp;flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin",
            buttonImg: "gmail.png",
            description: "Gmail",
            deepLink: "googlegmail://",
            appLink_config : {
                appName: "gmail-email-by-google",
                appStoreId: "422689480",
                appStoreLocale: "us",
                playStoreId: "com.google.android.gm"
            }
        },

        googleDrive_button : {
            buttonLink: "https://accounts.google.com/signin/v2/sl/pwd?service=wise&amp;passive=1209600&amp;osid=1&amp;continue=https%3A%2F%2Fdrive.google.com%2F&amp;followup=https%3A%2F%2Fdrive.google.com%2F&amp;emr=1&amp;flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin",
            buttonImg: "google-drive.png",
            description: "Google Drive",
            deepLink: "googledrive://",
            appLink_config : {
                appName: "google-drive",
                appStoreId: "507874739",
                appStoreLocale: "us",
                playStoreId: "com.google.android.apps.docs"
            }
        },

        helpDesk_button : {
            buttonLink: "https://helpdesk.centinela.k12.ca.us",
            buttonImg: "Helpdesk.png",
            description: "Helpdesk (CV It Department)"
        },

        outlook_button : {
            buttonLink: "https://sso.centinela.k12.ca.us/adfs/ls/?wa=wsignin1.0&wtrealm=https%3a%2f%2fmail.centinela.k12.ca.us%2fowa%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252fowa%252f&wct=2017-08-21T18%3a05%3a05Z",
            buttonImg: "outlook.png",
            description: "Outlook E-mail",
            deepLink : "ms-outlook://",
            appLink_config : {
                appName: "microsoft-outlook",
                appStoreId: "951937596",
                appStoreLocale: "us",
                playStoreId: "com.microsoft.office.outlook"
            }
        },

        //TO-DO: Find deep link!!
        schoolMessenger_button: {
            buttonLink: "https://asp.schoolmessenger.com/centinela",
            buttonImg: "schoolmessenger-button.png",
            description: "School Messenger",
            deepLink: "school-messenger://",
            appLink_config : {
                appName: "schoolmessenger",
                appStoreId: "978894818",
                appStoreLocale: "us",
                playStoreId: "com.schoolmessenger.recipient"
            }
        },

        passwordPortal_button: {
            buttonLink: "https://updatemanager:9251/showLogin.cc",
            buttonImg: "password-portal.png",
            description: "Password Assistance"
        },

        printCenter_button : {
            buttonLink: "https://cvprintcenter.myprintdesk.net/DSF/smartstore.aspx#!/Storefron",
            buttonImg: "print-center.png",
            description: "Print Center"
        },

        schoolDude_button : {
            buttonLink: "https://login.schooldude.com/mlogin?productid=community",
            buttonImg: "school-dude.png",
            description: "School Dude",
            deepLink: "dudesolutions://",
            appLink_config : {
                appName: "schooldude",
                appStoreId: "787457415",
                appStoreLocale: "us",
                playStoreId: "com.smashingboxes.dudesolutions.schooldude"
            }
        },

        behaviorAlert_button : {
            buttonLink: "https://siaesolutions.com/portal/?app=behavioralert",
            buttonImg: "behavior-alert.png",
            description: "Behavior Alert"
        }
    }, //end standardStaffTools

    administrativeTools : {
        //TODO: Need to find deep link for powerTeacher mobile!!
       powerSchool_button : {
            buttonLink: "https://powerschool.centinela.k12.ca.us/admin",
            buttonImg: "PS.png",
            description: "PowerSchool (Admin)",
            deepLink: "pss-teacher://",
            appLink_config : {
                appName: "powerteacher-mobile",
                appStoreId: "390563073",
                appStoreLocale: "us",
                playStoreId: "com.powerschool.portal"
            }
        },

        smarteTools_button : {
            buttonLink: "https://Smartetools.centinela.k12.ca.us/",
            buttonImg: "smartetools.png",
            description: "SmartETools"
        },
        
        infoSnap_button : {
            buttonLink: "https://secure.infosnap.com/admin/login/login.rails?ReturnUrl=%2fadmin",
            buttonImg: "infosnap.png",
            description: "InfoSnap"
        }
    }, //end administrativeTools

    teacherTools : {
        //TODO: Find Frontline Education Deep Link!!
        frontLine_button : {
            buttonLink: "https://login.frontlineeducation.com/login?signin=dc20373fccea7afc2e324f7ceec30775&productId=ABSMGMT&clientId=ABSMGMT#/login",
            buttonImg: "aesop.png",
            description: "Frontline (Absence Management/Subfinder)",
            deepLink: "frontline-technologies://",
            appLink_config : {
                appName: "frontline-education",
                appStoreId: "1160398526",
                appStoreLocale: "us",
                playStoreId: "com.frontline.frontlinemobile"
            }
        },

        cvuhsdCourseResources_button : {
            buttonLink: "https://drive.google.com/drive/folders/0B8DM6hczyKMbfkNvaU9LS3lLanpkS09GTExmTjR3TW0tZzBDYjlZd0ZRNkZKQUpHdERSZ28?usp=sharing",
            buttonImg: "CVUHSD-Course-Resources.png",
            description: "CVUHSD Course Resources (Google Drive)",
            deepLink: "https://drive.google.com/drive/folders/0B8DM6hczyKMbfkNvaU9LS3lLanpkS09GTExmTjR3TW0tZzBDYjlZd0ZRNkZKQUpHdERSZ28?usp=sharing",
            appLink_config : {
                appName: "google-drive",
                appStoreId: "507874739",
                appStoreLocale: "us",
                playStoreId: "com.google.android.apps.docs"
            }  
        },

        powerTeacher_button : {
            buttonLink: "https://powerschool.centinela.k12.ca.us/teachers/pw.html",
            buttonImg: "PT.png",
            description: "PowerTeacher (GradeBook &amp; Attendance)",
            deepLink: "pss-Teacher://",
            appLink_config : {
                appName: "powerteacher-mobile",
                appStoreId: "390563073",
                appStoreLocale: "us",
                playStoreId: "com.powerschool.portal"
            }
        },

        cvRestricted_button : {
            buttonLink: "http://www.centinela.k12.ca.us/staff_only",
            buttonImg: "staff-only.png",
            description: "Restricted Staff Area (Staff Resources - District Website)"
        },

        edTechResources_button : {
            buttonLink: "https://drive.google.com/drive/folders/0B_ico1iiP8Effkp5RkE2VnlmSzIybW5YbVRqQnVXb3NZSFIwQ1IwcUdYbEZtNWlvLTJGZHM",
            buttonImg: "ed-tech-resources.png",
            description: "Ed Tech Resources",
            deepLink: "https://drive.google.com/drive/folders/0B_ico1iiP8Effkp5RkE2VnlmSzIybW5YbVRqQnVXb3NZSFIwQ1IwcUdYbEZtNWlvLTJGZHM",
            appLink_config : {
                appName: "google-drive",
                appStoreId: "507874739",
                appStoreLocale: "us",
                playStoreId: "com.google.android.apps.docs"
            }  
        },
        
        lawndaleLaptopCartSystem_button : {
            buttonLink: "https://sites.google.com/a/cvuhsd.org/lwlaptopcartsystem/home",
            buttonImg: "lawndale-laptop-cart-system.png",
            description: "Lawndale Laptop Cart System"
        },
        
        leuzingerLaptopCartSystem_button : {
            buttonLink: "https://sites.google.com/a/cvuhsd.org/lzlaptopcartsystem/",
            buttonImg: "Hawthorne-laptop-cart-system.png",
            description: "Leuzinger Laptop Cart System"
        },

        hawthorneLaptopCartSystem_button : {
            buttonLink: "https://sites.google.com/a/cvuhsd.org/hwlaptopcartsystem/",
            buttonImg: "Hawthorne-laptop-cart-system.png",
            description: "Hawthorne Laptop Cart System"
        }
    }, //end teacherTools

    classroomTools : {
        canvas_button : {
            buttonLink: "https://centinela.instructure.com/",
            buttonImg: "canvas.png",
            description: "Canvas (Learning Management System)",
            deepLink : "canvas-teacher://",
            appLink_config : {
                appName: "canvas-teacher",
                appStoreId: "1257834464",
                appStoreLocale: "us",
                playStoreId: "com.instructure.teacher"
            }
        },

        edgenuity_button : {
            buttonLink: "https://centinela.learn.edgenuity.com/",
            buttonImg: "edgenuity.png",
            description: "Edgenuity (Online Courses)"
        },

        turnItIn_button : {
            buttonLink: "https://turnitin.com/",
            buttonImg: "turnitin.png",
            description: "TurnItIn.com (Originality Check & Feedback)"
        },

        illuminate_button : {
            buttonLink: "https://centinela.illuminateed.com/dna/?prev_page=Main_NotDashboardPage&amp;page=SisLogin",
            buttonImg: "illuminate.png",
            description: "Illuminate (Assessments)"
        },

        goGuardian_button : {
            buttonLink: "https://teacher.goguardian.com/#/classrooms/active",
            buttonImg: "GoGuardian.png",
            description: "Go Guardian"
        },

        hero_button : {
            buttonLink: "https://access.heropowered.com/login/centinelavalley-usd",
            buttonImg: "hero.png",
            description: "Hero (PBIS System)"
        }
    }, //end classroomTools

    learningTools : {
        brainPop_button : {
            buttonLink: "https://www.brainpop.com/",
            buttonImg: "BrainPop.png",
            description: "BrainPop"
        },

        read180HW_button : {
            buttonLink: "https://hwread180.centinela.k12.ca.us:56243/slms/EducatorAccess",
            buttonImg: "Read180HW-Teacher.png",
            description: "Read 180/System 44-HW Teacher"
        },
        
        read180LW_button : {
            buttonLink: "https://lwread180.centinela.k12.ca.us:56243/slms/EducatorAccess",
            buttonImg: "Read180LW-Teacher.png",
            description: "Read 180/System 44-LW Teacher"
        },

        read180LZ_button : {
            buttonLink: "https://lxread180.centinela.k12.ca.us:56243/slms/EducatorAccess",
            buttonImg: "Read180LZ-Teacher.png",
            description: "Read 180/System 44-LX Teacher"
        },

        schmoop_button : {
            buttonLink: "https://schools.shmoop.com/login/centinela-valley-UHSD",
            buttonImg: "shmoop.png",
            description: "Schmoop"
        },

        schmoop_button : {
            buttonLink: "https://clever.com/oauth/instant-login?client_id=2b024c690549687be970&district_id=5283beba2c067cd50b000031",
            buttonImg: "everfi.png",
            description: "Everfi"
        }
    }, //end learningTools

    digitalTextbooks : {
        holt_button : {
            buttonLink: "https://my.hrw.com/sp/access?sp=hrw&connection=CA-CVUHSD-00067204",
            buttonImg: "HMH.png",
            description: "Holt McDougal (Online Textbooks)"
        },

        wayside_Button : {
            buttonLink: "https://learningsite.waysidepublishing.com/",
            buttonImg: "Wayside-Publishing.png",
            description: "Wayside Publishing"
        }
    }, //end digitalTextbooks

    schoolWebsites : {
        cvuhsdWebsite_Button : {
            buttonLink: "https://www.centinela.k12.ca.us",
            buttonImg: "CV-website.png",
            description: "Centinela Valley Union High School District Website"
        },

        cvuhsdIndependentStudyWebsite_Button : {
            buttonLink: "https://www.cvalternatives.org/",
            buttonImg: "CVISS-Website.png",
            description: "Centinela Valley Independent Study Website"
        },

        lloydeWebsite_Button : {
            buttonLink: "https://www.lloydehs.org",
            buttonImg: "LL-Website.png",
            description: "LLoyde High School Website"
        },

        lawndaleWebsite_Button : {
            buttonLink: "https://www.lawndalehs.org/",
            buttonImg: "LW-Website.png",
            description: "Lawndale High School Website"
        },

        leuzingerWebsite_Button : {
            buttonLink: "https://www.leuzinger.org/",
            buttonImg: "LZ-Website.png",
            description: "Leuzinger High School Website"
        },

        hawthorneWebsite_Button : {
            buttonLink: "https://www.hhscougars.org/",
            buttonImg: "HW-Website.png",
            description: "Hawthorne High School Website"
        },

        cvuhsdWebsiteEditingButton : {
            buttonLink: "http://admin.centinela.k12.ca.us/",
            buttonImg: "Edlio-CVUHSD.png",
            description: "Edlio Website Administraton - Centinela Valley Union High School District (CVUHSD)"
        },

        cvissWebsiteEditingButton : {
            buttonLink: "https://cvalternatives.edlioadmin.com/apps/login/",
            buttonImg: "Edlio-CVISS.png",
            description: "Edlio Website Administraton - Centinela Valley Independent Study"
        },

        lloydeWebsiteEditingButton : {
            buttonLink: "https://lloydehs.edlioadmin.com/apps/login/",
            buttonImg: "Edlio-LL.png",
            description: "Edlio Website Administraton - Lloyde High School"
        },

        lawndaleWebsiteEditingButton : {
            buttonLink: "https://lawndalehigh.edlioadmin.com/apps/login/",
            buttonImg: "Edlio-LW.png",
            description: "Edlio Website Administraton - Lawndale High School"
        },

        hawthorneWebsiteEditingButton : {
            buttonLink: "https://hhscougars.edlioadmin.com/apps/login/",
            buttonImg: "Edlio-HW.png",
            description: "Edlio Website Administraton - Hawthorne High School"
        },

        lezuingerWebsiteEditingButton : {
            buttonLink: "https://leuzinger.edlioadmin.com/apps/login/",
            buttonImg: "Edlio-LZ.png",
            description: "Edlio Website Administraton - Leuzinger High School"
        }
    }
}; //end staffPortalButtons

export { staffPortalButtons };