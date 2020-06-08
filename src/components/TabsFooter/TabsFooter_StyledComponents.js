import React from 'react';

//Import styled to create react native styled components
import styled from 'styled-components/native';

const TabsFooterContainerView = styled.View`
    flex: 0.2;
    flex-direction: row;

    border-radius: 0;
    border-top-width: 0px;
    border-color: white;
`;

const TabsFooterBoxView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    color: white;
    background-color:  ${props => (props.title === "Student" || props.renderAsStudent) ? "#B41A1F" : "#1E6C93" };

    border-radius: 0;
    border-right-width: ${props => props.noBorder ? "0px" : "1px"};
    border-color: white;

    box-shadow: 10px 3px 5px black;
`;

let TabsFooterButtonTouchableOpacity = styled.TouchableOpacity`

`;

let TabsFooterButton = ({ renderAsStudent, setRenderAsStudent, title, noBorder, activeOpacity, ...props }) => {
    return (
        <TabsFooterBoxView
            renderAsStudent =   { renderAsStudent }
            title           =   {   title    }
            noBorder        =   {   noBorder  }
        >
            <TabsFooterButtonTouchableOpacity
                activeOpacity   =   { activeOpacity || 0.2}
                onPress         =   { setRenderAsStudent }
            >
                { props.children }
            </TabsFooterButtonTouchableOpacity>
        </TabsFooterBoxView>
    );
}; //end return statement

const TabsFooterBoxText = styled.Text`
    color: white;
`;
export { TabsFooterContainerView, TabsFooterButton};