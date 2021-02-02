import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';


const baseMarginTop = 38;

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    align-content: center;
    background-color: white;

    margin-top: ${baseMarginTop}px;
    /* margin-bottom: 25px; */
`;

const KeyboardAwareScrollViewStyled = styled(KeyboardAwareScrollView).attrs((props) => ({
    keyboardShouldPersistTaps : "never",
    contentContainerStyle       : props.contentContainerStyle || {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center"
    }
}))`

    margin-bottom: 56px;
    background-color: white;
    width: 100%;
`;

const TextArea = styled(AutoGrowingTextInput)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1;

    font-size: 16px;
    padding-left: 10px;
    background-color: white;

    width: 300px;

    margin-top: ${baseMarginTop + "px"};
    border-width: 1px;
    border-radius: 10px;
`;


export { Container, KeyboardAwareScrollViewStyled, TextArea };