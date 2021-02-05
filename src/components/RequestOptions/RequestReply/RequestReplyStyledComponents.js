import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
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
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        marginTop: 0
    }
}))`

    margin-bottom: 56px;
    background-color: white;
    width: 100%;
`;

const Divider = styled.View`
    width: 90%;
    height: ${StyleSheet.hairlineWidth + "px"};

    margin: auto;
    margin-top: 15px;
    margin-bottom: 0px;

    background-color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
`;

export { Container, KeyboardAwareScrollViewStyled, Divider };