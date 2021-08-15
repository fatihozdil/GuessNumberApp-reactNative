import React from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TittleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TittleText>Game is over</TittleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          source={require("../assets/success.png")}
          //  source={{uri: 'https://blog.monsternotebook.com.tr/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/10/assasins.png.webp'}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          You phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber} </Text>
          rounds to guess the number
          <Text style={styles.highlight}> {props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 3,
    marginVertical: 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 40,
    marginBottom: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 16
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
