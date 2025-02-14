import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "state";
import { TouchableOpacity } from "react-native";
import CenteredRow from "components/common/centered-row";

const Root = styled.View`
  padding: 35px 10px 10px;
`;

const IconContainer = styled.View`
  margin-right: 10px;
`;

const Address = styled.Text`
  font-family: Plex-sans;
`;

const Header = () => {
  const navigation = useNavigation();
  const [{ address }] = useStore();

  return (
    <Root>
      <CenteredRow>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <IconContainer>
            <Icon name={"cog"} size={30} />
          </IconContainer>
        </TouchableOpacity>
        <Address>{address}</Address>
      </CenteredRow>
    </Root>
  );
};

export default Header;
