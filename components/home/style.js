import { StyleSheet } from "react-native";

export const styling = () =>
  StyleSheet.create({
    container: {
      paddingTop: 50,
      paddingHorizontal: 16,
      backgroundColor: "#2A4BA0",
      height: 260,
      color: "#FFFFFF",
    },
    headerTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerName: {
      color: "#F8F9FB",
      fontSize: 22,
      fontWeight: "600",
    },
    input: {
      color: "#fff",
      backgroundColor: "#153075",
    },
    search: {
      paddingTop: 35,
    },
    deliveryContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 29,
    },
    deliveryTxt: {
      color: "#F8F9FB",
      fontSize: 11,
      fontWeight: "800",
      letterSpacing: 0.22,
      textTransform: "uppercase",
      opacity: 0.5,
    },
    delivery: {
      gap: 4,
    },
    location: {
      flexDirection: "row",
      columnGap: 10,
      alignItems: "center",
    },
    deliveryDesc: {
      color: "#F8F9FB",
      fontSize: 14,
      fontWeight: "500",
    },
  });
