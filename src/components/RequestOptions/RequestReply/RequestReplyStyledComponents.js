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
   
    width: 300px;
    color: ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }; 
    background-color:  #F6F6F6;


    margin-top: ${baseMarginTop + "px"};
    padding-left: 10px /* Indent space */;

    border-width: 1px;
    border-color: ${    props => props.districtPosition ?
                                            ( (props.districtPosition.toLowerCase() === "student") || props.renderAsStudent) ? 
                                                `rgba(147, 30, 29, 0.47)`: `rgba(30, 108, 147, 0.47)`
                                            :   `rgba(147, 30, 29, 0.47)`
                        };
    border-radius: 10px;
`;


export { Container, KeyboardAwareScrollViewStyled, TextArea };