import React from "react";
import styled from "styled-components/native";
import Setting from "../common/setting";
import { useNavigation } from "@react-navigation/native";

const Root = styled.View`
  padding-top: 20px;
`;

const OptionSection = styled.View``;

const Header = styled.Text`
  text-transform: uppercase;
  margin-bottom: 5px;
  padding-left: 20px;
  font-size: 12px;
`;

export default Settings = () => {
  const navigation = useNavigation();

  return (
    <Root>
      <OptionSection>
        <Header>Units</Header>
        <Setting
          text="Celsius"
          onPress={() => navigation.navigate("SettingUnits")}
        />
      </OptionSection>
    </Root>
  );
};
