import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "components/screens/home";
import Settings from "components/screens/settings";
import SettingUnits from "components/screens/setting-units";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            gestureEnabled: true
          }}
        />
        <Stack.Screen
          name="SettingUnits"
          component={SettingUnits}
          options={{
            gestureEnabled: true,
            headerTitle: "Units"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
