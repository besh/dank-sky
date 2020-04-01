import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableWithoutFeedback } from "react-native";
import CenteredRow from "../common/centered-row";

const Root = styled.View`
  padding: 10px;
`;

const IconContainer = styled.View`
  margin-right: 10px;
`;

const Header = () => {
  return (
    <Root>
      <CenteredRow>
        <TouchableWithoutFeedback>
          <IconContainer>
            <Icon name={"cog"} size={30} />
          </IconContainer>
        </TouchableWithoutFeedback>
        <Text>69 Dank st Dankville DK 69690 </Text>
      </CenteredRow>
    </Root>
  );
};

export default Header;
