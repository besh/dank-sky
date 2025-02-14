import React from "react";
import { View } from "react-native";
import { useStore } from "state";
import { SETTING_KEYS, SETTING_VALUES } from "constants/settings";
import SelectableSetting from "components/common/selectable-setting";

const options = [SETTING_VALUES.fahrenheit, SETTING_VALUES.celsius];

const SettingUnits = () => {
  const [{ unit }, dispatch] = useStore();

  return (
    <View>
      {options.map((option) => (
        <SelectableSetting
          key={option}
          selected={unit === option}
          text={option}
          onPress={() => {
            dispatch({
              type: "updateSetting",
              key: SETTING_KEYS.unit,
              value: option,
            });
          }}
        />
      ))}
    </View>
  );
};

export default SettingUnits;
