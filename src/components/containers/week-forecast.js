import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WeatherIcon from "../common/weather-icon";

const styles = StyleSheet.create({
  root: {
    padding: 10,
    paddingBottom: 100
  },

  entry: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },

  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  day: {
    textTransform: "uppercase",
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 16,
    width: 50
  },

  report: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  iconContainer: {
    width: 40
  },

  temp: {
    fontSize: 16,
    width: 50,
    marginRight: 10,
    marginLeft: 10
  },

  suggestion: {
    textAlign: "left"
  }
});

const WeekForecast = ({ data }) => {
  return (
    <View style={styles.root}>
      {data.map(({ day, temp, suggestion, sky }) => (
        <View style={styles.entry}>
          <View style={styles.left}>
            <Text style={styles.day}>{day}</Text>
            <View style={styles.report}>
              <View style={styles.iconContainer}>
                <WeatherIcon type={sky} />
              </View>
              <Text style={styles.temp}>{temp}°</Text>
            </View>
          </View>

          <Text style={styles.suggestion}>{suggestion}</Text>
        </View>
      ))}
    </View>
  );
};

export default WeekForecast;
