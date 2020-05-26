import styled from 'styled-components/native';
import css from 'styled-css/native';

let HeaderContainerView = styled.View`
    flex-direction: column;
    align-items: center;
    margin-top: 34;
    margin-bottom: 20;
`;

let PortalLogoImage = styled.Image.attrs( (props) => {
  
})`
    width: 150;
    height: 150;
`;

let UpdateAppView = styled.View`
    background-color: "#F4F7F9";
    margin-bottom: 12;
`; 

let UpdateTextDescription = styled.Text`
    font-size: 16; 
    padding-left: 8;
    padding-right: 8;
    align-self: "center";
    color: "#15516b";
`;


export { HeaderContainerView, PortalLogoImage, UpdateAppView, UpdateTextDescription }; 