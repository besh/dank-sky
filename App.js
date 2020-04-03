import React, { useState } from "react";
import { StatusBar } from "react-native";
import MainStackNavigator from "components/containers/main-stack-navigator";
import { StateProvider } from "state";
import { setItem, getItem } from "services/storage";
import { SETTING_KEYS, SETTING_VALUES } from "constants/settings";
import { getLocation } from "services/location";
import { AppLoading } from "expo";

/* TODO:
 * Bounce initialState and settings reducer out to new files
 * Will do reducer combind once we have more types
 */

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

const init = async setInitialState => {
  const settingsPromises = Object.keys(SETTING_KEYS).map(async key => {
    const value = await getItem(key);
    return {
      [key]: value
    };
  });

  const values = await Promise.all(settingsPromises);
  let initialAddress = values.address;
  let initialCoords = values.coords;

  if (!initialAddress || !initialCoords) {
    const { address, coords } = await getLocation();

    if (address && coords) {
      await setItem(address);
      await setItem(coords);

      initialAddress = address;
      initialCoords = coords;
    }
  }

  setInitialState({
    [SETTING_KEYS.unit]: values.unit || SETTING_VALUES.fahrenheit,
    [SETTING_KEYS.address]: initialAddress || "",
    [SETTING_KEYS.coords]: initialCoords || {}
  });
};

export default function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [initialState, setInitialState] = useState({});

  if (!isAppLoaded) {
    return (
      <AppLoading
        startAsync={() => init(setInitialState)}
        onFinish={() => setIsAppLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <StatusBar barStyle="dark-content" />
      <MainStackNavigator />
    </StateProvider>
  );
}
