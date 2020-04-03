import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useFonts } from "@use-expo/font";
import MainStackNavigator from "components/containers/main-stack-navigator";
import { StateProvider, initializeState, reducers } from "state";
import { AppLoading } from "expo";

export default function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [initialState, setInitialState] = useState({});
  let [fontsLoaded] = useFonts({
    "Plex-mono": require("./assets/fonts/IBMPlexMono-Regular.otf"),
    "Plex-sans": require("./assets/fonts/IBMPlexSans-Regular.otf"),
  });

  if (!isAppLoaded || !fontsLoaded) {
    return (
      <AppLoading
        startAsync={() => initializeState(setInitialState)}
        onFinish={() => setIsAppLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <StateProvider initialState={initialState} reducer={reducers}>
      <StatusBar barStyle="dark-content" />
      <MainStackNavigator />
    </StateProvider>
  );
}
