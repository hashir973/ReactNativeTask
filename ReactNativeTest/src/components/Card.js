import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

import { windowHeight, windowWidth } from "../config/dimensions";
import { sizes } from "../config/sizes";

const CARD_WIDTH = windowWidth * 0.44;
const CARD_HEIGHT = windowHeight * 0.29;

const Card = ({ item, navigateToDetailsPage }) => {
  return (
    <TouchableOpacity
      onPress={() => navigateToDetailsPage(item.id)}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: sizes.m10,
        justifyContent: "flex-end",
        padding: sizes.m7,
        backgroundColor: "#000",
        margin: sizes.m10,
        marginBottom: sizes.m15,
      }}
    >
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          opacity: 0.8,
          position: "absolute",
        }}
        imageStyle={{ borderRadius: sizes.m10 }}
      ></ImageBackground>

      <View>
        <Text
          style={{ fontSize: sizes.h3, color: item.code, fontWeight: "bold" }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
