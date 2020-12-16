import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

let Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;

    flex: 0.1;

    background-color:  ${   props =>   props.districtPosition ? 
                                        (  (props.districtPosition === "Student" || props.renderAsStudent) 
                                            ? "#B41A1F" : "#1E6C93"
                                        )
                                        : "#B41A1F" 
                        };
`;


const PortalLogo = styled.Image.attrs( (props) => {
  
})`
    width: 50px;
    height: 50px;

    /* margin-right: auto; */
`;

const InfoIconTouchOpacity = styled.TouchableOpacity`
    position: absolute;
    left: 90%;
`;

const SettingsIcon = styled(MaterialCommunityIcons)`
    margin-right: 15px;
`;

const WayPointText = styled.Text`
    color: white;
    /* background-color: white; */
    /* width: 100%; */
    text-align: center;
    font-size: 21px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    align-self: center;

    margin-left: 8px;
`;


export { Container, PortalLogo, WayPointText, InfoIconTouchOpacity, SettingsIcon };
