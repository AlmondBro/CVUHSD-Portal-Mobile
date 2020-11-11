import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

// import {  TextInput } from 'react-native';

const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
`;
const TextInputStyled = styled(TextInput).attrs(props => ({
    selectionColor  :   ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
    underlineColor  :   ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
    theme           :   props.theme,

    placeholderTextColor : "#D50000"
}))`
    position: relative;
    width: 90%;

    margin-top: 5;
    margin-bottom: 5;

    border-radius: 50px;

    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
`;

const ErrorText = styled.Text`
    display: flex;
    color:  red;
    font-weight: bold;
`;
export {  InputContainer, TextInputStyled, ErrorText };
