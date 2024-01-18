import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const OfferBanner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icons/image-icon.png")}
        style={{ width: 68, height: 68 }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.getText}>Get</Text>
        <Text style={styles.offer}>50% OFF</Text>
        <Text style={styles.desc}>On first 03 order</Text>
      </View>
    </View>
  );
};

export default OfferBanner;

const styles = StyleSheet.create({
  container: {
    width: 269,
    height: 123,
    flexShrink: 0,
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: "#F9B023",
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    rowGap: 4,
  },
  getText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  offer: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  desc: {
    fontSize: 15,
    color: "#FFFFFF",
  },
});
