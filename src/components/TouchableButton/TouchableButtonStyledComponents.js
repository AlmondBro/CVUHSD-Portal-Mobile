import styled from 'styled-components/native';

const Container = styled.View`
    background-color: white;
    color: ${props => (props.districtPosition === "Student" || props.renderAsStudent) ? "#B41A1F" : "#1E6C93" };

    border-radius: 15;

    width: 120;
    flex-direction: row;
    justify-content: center;
    padding-top: 10;
    padding-bottom: 10;
`;

const Text= styled.Text`
    color: ${props => (props.districtPosition === null) 
                    ? "#B41A1F" : 
                        (props.districtPosition === "Student" || props.renderAsStudent) 
                        ? "#B41A1F" : "#1E6C93" 
            };

    font-family: 'SourceSansPro_600SemiBold';
    /* 'SourceSansPro_400Regular','SourceSansPro_200ExtraLight', 'SourceSansPro_200ExtraLight_Italic','SourceSansPro_300Light','SourceSansPro_300Light_Italic','SourceSansPro_400Regular_Italic','SourceSansPro_600SemiBold', 'SourceSansPro_600SemiBold_Italic','SourceSansPro_700Bold','SourceSansPro_700Bold_Italic', 'SourceSansPro_900Black', 'SourceSansPro_900Black_Italic'; */

    font-size: 20;
    font-weight: bold;
    flex-direction: row;

    justify-content: center;
`;

export { Container, Text };