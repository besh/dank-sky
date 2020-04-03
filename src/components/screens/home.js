import React from "react";
import { View, ScrollView } from "react-native";
import Header from "components/containers/header";
import Forecast from "components/containers/forecast";

export default function Home() {
  return (
    <View>
      <Header />
      <ScrollView>
        <Forecast />
      </ScrollView>
    </View>
  );
}
