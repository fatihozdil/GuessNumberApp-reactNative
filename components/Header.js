import React from "react";
import { View,  StyleSheet } from "react-native";
import Colors from "../constants/colors";
import TittleText from "./TitleText";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <TittleText>{props.title}</TittleText>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Header;
