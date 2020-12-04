import styled from 'styled-components/native';

let Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    flex: 0.1;

    background-color: red;

    margin-bottom: 20;
`;


let PortalLogo = styled.Image.attrs( (props) => {
  
})`
    width: 50;
    height: 50;

    margin-left: 12;

`;


export { Container, PortalLogo };
