import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Option = styled.View`
  background: #fefefe;
  padding: 16px 20px;
  border: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const OptionText = styled.Text`
  font-size: 14px;
`;

export default ({ text, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
      <Option>
        <OptionText>{text}</OptionText>
        <Icon name="chevron-right" />
      </Option>
    </TouchableOpacity>
  );
};
