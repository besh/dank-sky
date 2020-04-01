import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableWithoutFeedback } from "react-native";

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },

  iconContainer: {
    marginRight: 10
  }
});

const Header = () => {
  return (
    <View style={styles.root}>
      <TouchableWithoutFeedback>
        <View style={styles.iconContainer}>
          <Icon name={"cog"} size={30} />
        </View>
      </TouchableWithoutFeedback>
      <Text>69 Dank st Dankville DK 69690 </Text>
    </View>
  );
};

export default Header;
