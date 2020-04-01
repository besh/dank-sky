import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import CenteredRow from "../common/centered-row";

const Root = styled.View`
  padding: 10px;
`;

const IconContainer = styled.View`
  margin-right: 10px;
`;

const Header = ({ location }) => {
  const navigation = useNavigation();

  return (
    <Root>
      <CenteredRow>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <IconContainer>
            <Icon name={"cog"} size={30} />
          </IconContainer>
        </TouchableOpacity>
        <Text>{location}</Text>
      </CenteredRow>
    </Root>
  );
};

export default Header;
