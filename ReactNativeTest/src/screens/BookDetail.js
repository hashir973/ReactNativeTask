import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

//Import Icons
import { FontAwesome } from "react-native-vector-icons";

// imports
import { windowHeight, windowWidth } from "../config/dimensions";
import { sizes } from "../config/sizes";
import { ScrollView } from "react-native-gesture-handler";
import { cardItems } from "../data";

const width = windowWidth * 0.15;
const IMAGE_SIZE1 = windowHeight * 0.03;
const height1 = windowHeight * 0.25;
const width1 = windowWidth * 0.8;
const upper_height = windowHeight * 0.02;

const BookDetail = ({ route }) => {
  const id = route.params.id;
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBookById = cardItems.find((book) => book.id == id);
    setBook(getBookById);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.main}>
        <View>
          <Text style={styles.heading1}>History</Text>
        </View>

        <View>
          <Text style={styles.heading2}>{book?.name}</Text>
        </View>

        <View style={styles.mid}>
          <Text style={{ fontWeight: "bold" }}>
            Published from <Text style={{ color: "grey" }}>istudio</Text>
          </Text>
          <Text style={{ marginRight: sizes.m8, fontWeight: "bold" }}>
            23 March, 2019
          </Text>
        </View>

        <View
          style={{
            height: height1,
            width: width1,
            backgroundColor: "#fff",
            alignSelf: "flex-end",
            marginTop: sizes.m20,
            borderTopLeftRadius: sizes.m15,
            borderBottomLeftRadius: sizes.m15,
            borderWidth: 0.5,
            overflow: "hidden",
          }}
        >
          <Image
            source={book?.image}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </View>

        <View style={{ flexDirection: "row", marginTop: sizes.m30 }}>
          <Text style={styles.heading3}>{book?.rating}</Text>
          <FontAwesome
            name="star"
            size={IMAGE_SIZE1}
            color="#2BB789"
            resizeMode="contain"
            style={{
              marginTop: sizes.m2,
              marginLeft: sizes.m8,
            }}
          />

          <FontAwesome
            name="star"
            size={IMAGE_SIZE1}
            color="#2BB789"
            resizeMode="contain"
            style={{
              marginTop: sizes.m2,
              marginLeft: sizes.m3,
            }}
          />

          <FontAwesome
            name="star"
            size={IMAGE_SIZE1}
            color="#2BB789"
            resizeMode="contain"
            style={{
              marginTop: sizes.m2,
              marginLeft: sizes.m3,
            }}
          />

          <FontAwesome
            name="star-o"
            size={IMAGE_SIZE1}
            color="#2BB789"
            resizeMode="contain"
            style={{
              marginTop: sizes.m2,
              marginLeft: sizes.m3,
            }}
          />
        </View>

        <View style={styles.mid1}>
          <Text style={styles.heading4}>892 Ratings on Google Play</Text>
        </View>

        <View style={{ marginTop: upper_height }}>
          <Text style={{ color: "#2BB789" }}>{book?.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  main: {
    marginTop: width,
    marginLeft: sizes.m10,
  },

  heading1: {
    fontWeight: "bold",
    color: "orange",
  },

  heading2: {
    fontSize: sizes.m25,
    color: "#2BB789",
  },

  mid: {
    marginTop: sizes.m20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  heading3: {
    fontWeight: "bold",
    fontSize: sizes.m20,
  },

  mid1: {
    marginTop: upper_height,
  },

  heading4: {
    color: "grey",
    fontSize: sizes.m13,
    fontWeight: "bold",
  },
});
