import React from "react";
import { StatusBar } from "react-native";
import MainStackNavigator from "components/containers/main-stack-navigator";
import InitializeSettings from "components/containers/initialize-settings";
import { StateProvider } from "state";
import { setItem } from "services/storage";
import { SETTING_KEYS, SETTING_VALUES } from "constants/settings";

/* TODO:
 * Bounce initialState and settings reducer out to new files
 * Will do reducer combind once we have more types
 */
const initialState = {
  [SETTING_KEYS.unit]: SETTING_VALUES.fahrenheit,
  [SETTING_KEYS.location]: "",
  [SETTING_KEYS.address]: "",
  [SETTING_KEYS.coords]: {}
};

const reducer = (state, { type, key, value }) => {
  switch (type) {
    case "updateSetting":
      setItem(key, value);

      return {
        ...state,
        [key]: value
      };

    default:
      return state;
  }
};

export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <StatusBar barStyle="dark-content" />
      <InitializeSettings>
        <MainStackNavigator />
      </InitializeSettings>
    </StateProvider>
  );
}
