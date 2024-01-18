import { StyleSheet } from "react-native";

export const styling = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      marginBottom: 110,
      marginLeft: 8,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    card: {
      width: "48%",
      marginBottom: 16,
      marginRight: 6,
      borderRadius: 12,
      overflow: "hidden",
      backgroundColor: "#fff",
      position: "relative",
    },
    image: {
      width: "100%",
      height: 120,
      resizeMode: "cover",
    },
    title: {
      fontSize: 14,
      marginHorizontal: 8,
      marginBottom: 18,
      marginTop: 0,
    },
    price: {
      fontSize: 16,
      fontWeight: "bold",
      marginHorizontal: 8,
      marginTop: 6,
    },
    addButton: {
      backgroundColor: "#2A4BA0",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      width: 30,
      height: 30,
    },
    addButtonText: {
      color: "#fff",
      fontSize: 18,
      paddingBottom: 2,
    },
    cartButton: { position: "absolute", bottom: 24, right: 10 },
    heartIcon: { position: "absolute", top: 10, left: 10, zIndex: 1 },
  });
