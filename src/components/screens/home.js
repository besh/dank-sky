import React from "react";
import { View, ScrollView } from "react-native";
import Header from "components/containers/header";
import CurrentWeather from "components/containers/current-weather";
import WeekForecast from "components/containers/week-forecast";
import weekData from "../../../mock/weekly-forecast-data";

export default function Home() {
  return (
    <View>
      <Header />
      <ScrollView>
        <CurrentWeather />
        <WeekForecast data={weekData} />
      </ScrollView>
    </View>
  );
}
