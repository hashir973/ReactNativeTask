import React from "react";
import { View, Text } from "react-native";

import { cardItems } from "../data";
import { sizes } from "../config/sizes";
import { ScrollView } from "react-native-gesture-handler";

import Card from "../components/Card";

const BooksListingScreen = ({ navigation }) => {
  const navigateToDetailsPage = (id) => {
    navigation.navigate("Detail", { id });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={{ alignItems: "center", marginTop: sizes.m35 }}>
          <Text
            style={{
              fontSize: sizes.m35,
              fontWeight: "bold",
              color: "#2BB789",
            }}
          >
            All Books
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cardItems.map((item) => {
              return (
                <Card key={item.id} item={item} navigateToDetailsPage={navigateToDetailsPage} />
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BooksListingScreen;
