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
    width: 200;
    height: 200;
`;

export { HeaderContainerView, PortalLogoImage }; 