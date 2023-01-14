import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import logo from "../../assets/logo-red.png";
const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image source={logo} style={styles.logo} />
        {/* <Text style={styles.titleText}>{text}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: Constants.statusBarHeight,
    marginBottom: 25,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: { marginRight: 40 },
});

export default Header;
