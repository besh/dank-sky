import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

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

/* TODO:
 * Sibling selectors are not supported. When more than one option is displayed,
 * it produces a double border between each option.
 */
export default ({ text, icon }) => {
  return (
    <Option>
      <OptionText>{text}</OptionText>
      {icon && <Icon name={icon} />}
    </Option>
  );
};
