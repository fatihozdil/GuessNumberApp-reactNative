import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TittleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => Dimensions.removeEventListener("change", updateLayout);
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TittleText>Game is over</TittleText>
        <View
          style={{
            ...styles.imageContainer,
            ...{
              width: availableDeviceHeight * 0.5,
              height: availableDeviceHeight * 0.5,
              borderRadius: (availableDeviceHeight * 0.5) / 2,
              marginVertical: availableDeviceHeight / 30,
            },
          }}
        >
          <Image
            fadeDuration={1000}
            source={require("../assets/success.png")}
            //  source={{uri: 'https://blog.monsternotebook.com.tr/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/10/assasins.png.webp'}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            ...styles.resultContainer,
            ...{
              marginBottom: availableDeviceHeight / 60,
            },
          }}
        >
          <BodyText
            style={{
              ...styles.resultText,
              ...{
                fontSize: availableDeviceHeight < 600 ? 14 : 16,
              },
            }}
          >
            You phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber} </Text>
            rounds to guess the number
            <Text style={styles.highlight}> {props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  imageContainer: {
    borderColor: "black",
    borderWidth: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
  },
  resultText: {
    textAlign: "center",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
