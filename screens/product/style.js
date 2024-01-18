import { StyleSheet } from "react-native";

export const styling = () =>
  StyleSheet.create({
    container: {
      marginBottom: 110,
      marginTop: 60,
    },
    headerTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 16,
    },
    backIcon: {
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 30,
      borderRadius: 20,
      backgroundColor: "rgba(239, 239, 240)",
    },
    title: {
      fontSize: 50,
      paddingHorizontal: 16,
    },
    rating: {
      paddingHorizontal: 16,
      fontSize: 14,
      color: "#A1A1AB",
    },
    price: {
      color: "#2A4BA0",
      fontSize: 16,
      fontWeight: "600",
    },
    chip: {
      backgroundColor: "#2A4BA0",
      paddingVertical: 6,
      width: 100,
      borderRadius: 40,
      alignItems: "center",
      justifyContent: "center",
      height: 30,
    },
    chipText: {
      color: "#fff",
      fontSize: 14,
    },
    priceChip: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 20,
      paddingHorizontal: 16,
    },
    buttons: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      marginVertical: 20,
    },
    cartButton: {
      width: "48%",
      paddingVertical: 8,
    },
    details: {
      paddingHorizontal: 16,
    },
    detailsText: {
      fontSize: 16,
    },
    descText: {
      color: "#8891A5",
      fontSize: 16,
      marginTop: 8,
    },
    ratingContainer: {
      alignItems: "center",
      flexDirection: "row",
      marginTop: 6,
      marginLeft: 12,
    },
    heartIcon: {
      position: "absolute",
      top: 16,
      right: 20,
    },
  });
