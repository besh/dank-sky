import React from "react";
import Option from "./option";
import { TouchableOpacity } from "react-native";

const SelectableSetting = ({ text, onPress, selected }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Option text={text} icon={selected ? "check" : null} />
    </TouchableOpacity>
  );
};

export default SelectableSetting;
