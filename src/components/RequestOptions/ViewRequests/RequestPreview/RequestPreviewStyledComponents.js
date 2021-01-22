import styled from 'styled-components/native';

import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: white;
`;

const Content = styled.View`
    flex: 0.85;
`;

const MetaDataContainer = styled.View`
    flex-direction: column;
`;

const MetaDataIconTextContainer = styled.View`
    flex-direction: row;
    justify-content: center;
`;

const MetaDataIcon = styled(FontAwesome5)`
    margin-right: auto;
    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
`;

const MetaDataText = styled.Text`
    margin-right: auto;
    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
`;

const Subject = styled.Text`
    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
    font-family: SourceSansPro_400Regular;
    font-size: 16px;
`;

const Description = styled.Text`
    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
    font-family: SourceSansPro_400Regular;
    font-size: 12px;
`;



export { Container, Content, MetaDataContainer, MetaDataIconTextContainer, MetaDataIcon, MetaDataText, Subject, Description };