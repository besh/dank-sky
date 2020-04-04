import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "state";
import styled from "styled-components/native";
import Setting from "components/common/setting";

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

const Settings = () => {
  const navigation = useNavigation();
  const [{ unit }] = useStore();

  return (
    <Root>
      <OptionSection>
        <Header>Units</Header>
        <Setting
          text={unit}
          onPress={() => navigation.navigate("SettingUnits")}
        />
      </OptionSection>
    </Root>
  );
};

export default Settings;
