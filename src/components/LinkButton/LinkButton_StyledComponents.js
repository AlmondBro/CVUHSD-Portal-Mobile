import styled from 'styled-components/native';

import { Image as ImageCache, CacheManager } from "react-native-expo-image-cache";

const TouchableHighlightStyled = styled.TouchableHighlight`
    align-self: center;
    margin-top: 13;
    margin-bottom: 13;
`;

const LinkButtonImage = styled(ImageCache)`
    width: 300;
    height: 100;
`;

export { TouchableHighlightStyled, LinkButtonImage };