import styled from "styled-components";

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

let StyledScrollView = styled.ScrollView`
    flex-direction: "column";
    align-self: "center";
    justify-content: "flex-start";
    padding: 0;
    background-color: "#F4F7F9";
`;

let BlueSectionContainer = styled.View`
    flex-direction: "column";
    align-self: "stretch";
    justify-content: "flex-start";
    padding: 0;
    margin: 0;
    width: ${props => props.width ? props.width : "auto"};
`;

export { UpdateAppView, UpdateTextDescription, StyledScrollView, BlueSectionContainer };