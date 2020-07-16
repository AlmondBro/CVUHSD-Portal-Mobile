import React, { Component } from 'react';

import LinkButton from './../LinkButton/LinkButton.js';

import { WebViewStyled, CollapsibleStyled } from './BlueSection_StyledComponents.js';

class BlueSectionContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            expanded: this.props.expanded,
        } //end this.state object
    } //end constructor(props)

    /* 
        { maxHeight: this.state.expanded ? "100%" : "0%",
        opacity: this.state.expanded ? 1.0 : 0}
        */
       componentDidUpdate = (prevProps) => {
        if (this.state.expanded !== this.props.expanded) {
            this.setState({expanded: this.props.expanded});
        }
      } //end componentDidUpdate()
        
    generateBlueSectionButtons = () => {
        if ( ( typeof(this.props.buttons) !== "undefined"  || null) ) {

                    let buttonsArray = Object.values(this.props.buttons);

                    return [...buttonsArray].map( (buttonObject, index) => {
                        return (<LinkButton 
                                    key             =   { index} 
                                    buttonLink      =   { buttonObject.buttonLink} 
                                    buttonImg       =   { buttonObject.buttonImg} 
                                    description     =   { buttonObject.description}
                                    deepLink        =   { buttonObject.deepLink}
                                    appLink_config  =   { buttonObject.appLink_config}
                                />); 
                            }
                    ); 

            /* For loop can work here, but it does not return any new values whereas map does: 
                Source: https://stackoverflow.com/questions/45576223/why-are-for-loops-not-allowed-in-react-jsx
            */
           /*
            let buttonsArray = [];
            for (let i=0; i < props.buttons.length; i++) {
                buttonsArray.push(<BlueSectionButton 
                                    key={i} 
                                    buttonLink={props.buttons.buttonLink} 
                                    buttonImg={props.buttons.buttonImg} 
                                />);
            }
            
            return buttonsArray; */
        
        } else {
            return null;
        }
    };


    render() {
        const allLinksSrc = `<iframe src='https://docs.google.com/spreadsheets/d/e/2PACX-1vSOPMzFTLmTXsOzY172KN_3IaJqeO9bLPl_3TIgc_bBQiWEanznykV6cEiPBuV9WUHEnL2vesphHEWZ/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false' scrolling='yes'></iframe>`;
        const systemStatusesWebView = `<iframe src='https://www.site24x7.com/sv.do?id=-lTskTIBFC99AjBdJTzdd22ylcZvGBYnfGhcgwvt1-27W89lFFvf7WICSx8TdzUT6kB92hYLWdGYIInKaxcmHcJTzDPBf7IFLjpWmnUEJ18%3D&st=false' scrolling='yes'></iframe>`;
        
        if (this.props.headerTitle === "ALL LINKS") {
            return (
                <CollapsibleStyled 
                    collapsed   =   { this.state.expanded }
                    duration    =   { 750 }
                >
                    <WebViewStyled 
                            originWhitelist     =   { ['*'] }
                            source              =   { { html: allLinksSrc} }
                            scalesPageToFit     =   { false }
                            javaScriptEnabled   =   { true }
                            injectedJavaScript  =   { `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ` }
                            useWebKit           =   { false}
                            onMessage           =   { (event) => {
                                                            console.log('event: ', event)
                                                        }
                                                    }   
                    />  
                </CollapsibleStyled>
            ); //end return
        } else if (this.props.serviceStatuses) {
            return (
                <CollapsibleStyled 
                    collapsed   =   { this.state.expanded }
                    duration    =   { 750 }
                >
                    <WebViewStyled 
                            originWhitelist     =   { ['*'] }
                            source              =   { { html: systemStatusesWebView} }
                            scalesPageToFit     =   { false }
                            javaScriptEnabled   =   { true }
                            injectedJavaScript  =   { `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ` }
                            useWebKit           =   { false}
                            onMessage           =   { (event) => {
                                                            console.log('event: ', event)
                                                        }
                                                    }   
                    />  
                </CollapsibleStyled>
            ) 
        } else {
                return (
                    <CollapsibleStyled 
                        // style={blueSectionContent_styles.blueSection_Content}
                        collapsed={this.state.expanded}
                        duration={750}
                    >
                        { this.generateBlueSectionButtons() }
                    </CollapsibleStyled>
            );
        }
    } //end render()
} //end BlueSectionContent class

export default BlueSectionContent;