import React, { useState } from "react";
import { StatusBar } from "react-native";
import MainStackNavigator from "components/containers/main-stack-navigator";
import { StateProvider, initializeState, reducers } from "state";
import { AppLoading } from "expo";

export default function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [initialState, setInitialState] = useState({});

  if (!isAppLoaded) {
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
