import React from "react";
import Option from "./option";
import { TouchableOpacity } from "react-native";

export default ({ text, onPress, selected }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Option text={text} icon={selected ? "check" : null} />
    </TouchableOpacity>
  );
};
