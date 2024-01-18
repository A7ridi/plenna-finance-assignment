import { StyleSheet } from "react-native";

export const styling = () =>
  StyleSheet.create({
    container: {
      marginBottom: 110,
      paddingTop: 60,
      position: "relative",
      height: "100%",
      backgroundColor: "#fff",
    },
    headerTop: {
      flexDirection: "row",
      columnGap: 20,
      alignItems: "center",
      paddingHorizontal: 16,
    },
    scrollview: {
      marginTop: 40,
      paddingHorizontal: 16,
      height: 400,
    },
    cartContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    shoppingText: {
      fontSize: 18,
    },
    plusMinus: {
      flexDirection: "row",
      columnGap: 8,
      alignItems: "center",
    },
    count: {
      fontSize: 18,
    },
    imagePriceTitle: {
      flexDirection: "row",
      columnGap: 12,
      alignItems: "center",
    },
    title: {
      fontSize: 18,
    },
    cartButton: {
      paddingVertical: 8,
      margin: 12,
      backgroundColor: "#2A4BA0",
      fontSize: 20,
    },
    summaryContainer: {
      marginHorizontal: 16,
      backgroundColor: "#F8F9FB",
      borderRadius: 30,
      position: "absolute",
      bottom: 0,
      width: "90%",
    },
    summary: {
      paddingVertical: 12,
      paddingHorizontal: 18,
    },
    titlePrice: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 8,
    },
    checkoutTitle: {
      fontSize: 16,
      color: "#616A7D",
    },
    checkoutPrice: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#1E222B",
    },
  });
