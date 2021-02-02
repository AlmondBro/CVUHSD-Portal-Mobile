import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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

export { Container, KeyboardAwareScrollViewStyled };