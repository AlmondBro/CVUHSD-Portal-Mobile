import styled from 'styled-components/native';
import css from 'styled-css/native';

let HeaderContainerView = styled.View`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex: 1;
`;

let PortalLogoImage = styled.Image.attrs( (props) => {
  
})`
    width: 130;
    height: 130;

    margin-top: 5;
`;

let UpdateAppView = styled.View`
    background-color: transparent;

    margin-top: 10;
    margin-bottom: 12;

    padding-left: 50;
    padding-right: 50;
`; 

let UpdateTextDescription = styled.Text`
    font-size: 14; 
    padding-left: 8;
    padding-right: 8;
    align-self: center;
    color:  ${   props => (props.title === null) 
                            ? "#B41A1F" : 
                            (props.title === "Student" || props.renderAsStudent) 
                                ? "#B41A1F" : "#1E6C93" 
                        };
`;

let UserInfoText = styled.Text`
    color: ${props => (props.title === "Student" || props.renderAsStudent) ? "#B41A1F" : "#1E6C93" };
    
    font-weight: ${props => props.bold ? "bold" : "normal"};
    font-style: ${props => props.italic ? "italic" : "normal"};

    font-family: ${props => (props.italic && props.bold) ? "SourceSansPro_600SemiBold_Italic" : "SourceSansPro_400Regular"};

    margin-top: 0;

    align-self: center;

    margin-top: 5;
`;

const SchoolNameLogoView = styled.View`
    flex-direction: row;
    justify-content:  center;
    margin-bottom: 5;
`;

const SchoolLogo = styled.Image`
    flex-direction: row;
    height: 25;
    width: 25;

    margin-left: 5;

    overflow: visible;
`;

export { HeaderContainerView, PortalLogoImage, UpdateAppView, UpdateTextDescription, UserInfoText, SchoolNameLogoView, SchoolLogo }; 