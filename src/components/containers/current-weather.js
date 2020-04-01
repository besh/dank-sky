import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 30
  },

  iconContainer: {
    marginBottom: 20
  },

  report: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  temp: {
    fontSize: 40,
    marginRight: 10
  },

  statement: {
    fontSize: 16,
    fontWeight: "bold"
  },

  suggestion: {
    letterSpacing: 0.5
  }
});

const CurrentWeather = () => {
  return (
    <View style={styles.root}>
      <View style={styles.iconContainer}>
        <Icon name={"sun-o"} size={128} />
      </View>
      <View style={styles.report}>
        <Text style={styles.temp}>22°</Text>
        <View>
          <Text style={styles.statement}>Sun's out guns out</Text>
          <Text style={styles.suggestion}>Tank top, shorts</Text>
        </View>
      </View>
    </View>
  );
};

export default CurrentWeather;
