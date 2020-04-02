import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { View } from "react-native";
import Setting from "../common/setting";

const setUnit = async value => {
  try {
    await AsyncStorage.setItem("@Unit", value);
  } catch (e) {
    // dispatch in app notification on failure?
  }

  console.log("Done.");
};

const getUnit = async () => {
  try {
    return await AsyncStorage.getItem("@Unit");
  } catch (e) {
    // dispatch in app notification on failure?
  }

  console.log("Done.");
};

export default function SettingUnits() {
  return (
    <View>
      <Setting text="Celsius" onPress={() => {}} />

      <Setting text="Fahrenheit" onPress={() => {}} />
    </View>
  );
}
