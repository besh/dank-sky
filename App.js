import React from "react";
import MainStackNavigator from "./src/components/containers/main-stack-navigator";
import InitializeSettings from "./src/components/containers/initialize-settings";
import { StateProvider } from "./src/state";
import { setItem } from "./src/services/storage";
import { SETTING_KEYS, SETTING_VALUES } from "./src/constants/settings";

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
      <InitializeSettings>
        <MainStackNavigator />
      </InitializeSettings>
    </StateProvider>
  );
}
