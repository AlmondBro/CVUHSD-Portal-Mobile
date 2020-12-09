import { Platform } from 'react-native';
import styled from 'styled-components/native';

const { OS } = Platform;

const Container = styled.View`
    background-color: ${props => props.bgColor || "white"};
    color: ${props => props.color || (props.districtPosition === "Student" || props.renderAsStudent) ? "#B41A1F" : "#1E6C93" };

    border-radius: 15px;

    width: 120px;
    flex-direction: row;
    justify-content: center;

    margin-top: 10px;
    margin-bottom: ${ (OS === "android") ? "5px" : "18px"};

    padding-top: 5px;
    padding-bottom: 5px;
`;

const Text= styled.Text`
    color: ${props => props.color ? props.color : (props.districtPosition === null) 
                    ? "#B41A1F" : 
                        (props.districtPosition === "Student" || props.renderAsStudent) 
                        ? "#B41A1F" : "#1E6C93" 
            };

    font-family: 'SourceSansPro_600SemiBold';
    /* 'SourceSansPro_400Regular','SourceSansPro_200ExtraLight', 'SourceSansPro_200ExtraLight_Italic','SourceSansPro_300Light','SourceSansPro_300Light_Italic','SourceSansPro_400Regular_Italic','SourceSansPro_600SemiBold', 'SourceSansPro_600SemiBold_Italic','SourceSansPro_700Bold','SourceSansPro_700Bold_Italic', 'SourceSansPro_900Black', 'SourceSansPro_900Black_Italic'; */

    font-size: ${props => props.fontSize ? props.fontSize : "20px"};
    font-weight: bold;
    flex-direction: row;

    justify-content: center;

    text-align: center;
`;

export { Container, Text };