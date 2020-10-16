import styled from 'styled-components/native';

import { Image as ImageCache, CacheManager } from "react-native-expo-image-cache";

import FastImage from 'react-native-fast-image';

const TouchableHighlightStyled = styled.TouchableHighlight`
    align-self: center;
    margin-top: 13;
    margin-bottom: 13;
`;

const LinkButtonImage = styled(ImageCache)`
    width: 300;
    height: 100;
`;

const FastImageStyled = styled(FastImage).attrs(props => ({
    uri         : props.uri,
    header      : props.headers,
    priority    : props.priority
}))`
        width: 300;
        height: 100;
`;

export { TouchableHighlightStyled, LinkButtonImage };
