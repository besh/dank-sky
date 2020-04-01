import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import Header from "./src/components/common/header";
import CurrentWeather from "./src/components/containers/current-weather";
import WeekForecast from "./src/components/containers/week-forecast";
import weekData from "./mock/weekly-forecast-data";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default function App() {
  const [location, setLocation] = useState("Nowhereville");

  useEffect(() => {
    /* TODO
     * Break out into service and maybe add position data to an app provider.
     * Can use position data in various contexts such as displaying address and
     * use coords to run queries against the API.
     */
    async function getLocation() {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        const locationData = await Location.getCurrentPositionAsync({});
        const postageLocation = await Location.reverseGeocodeAsync({
          latitude: locationData?.coords?.latitude ?? 0,
          longitude: locationData?.coords?.longitude ?? 0
        });

        const {
          postalCode = "",
          city = "",
          region = "",
          street,
          name
        } = postageLocation[0];
        const address = `${name || street} ${city} ${region} ${postalCode}`;
        setLocation(address);
      }
    }
    getLocation();
  }, []);

  return (
    <View>
      <Header location={location} />
      <ScrollView>
        <CurrentWeather />
        <WeekForecast data={weekData} />
      </ScrollView>
    </View>
  );
}
