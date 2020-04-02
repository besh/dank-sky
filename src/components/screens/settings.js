import React from "react";
import styled from "styled-components/native";
import Setting from "../common/setting";
import { useStore } from "../../state";
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
  const [store] = useStore();

  return (
    <Root>
      <OptionSection>
        <Header>Units</Header>
        <Setting
          text={store.unit}
          onPress={() => navigation.navigate("SettingUnits")}
        />
      </OptionSection>
    </Root>
  );
};
