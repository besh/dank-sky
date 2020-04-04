import React from "react";
import Option from "./option";
import { TouchableOpacity } from "react-native";

const Setting = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Option text={text} icon="chevron-right" />
    </TouchableOpacity>
  );
};

export default Setting;
