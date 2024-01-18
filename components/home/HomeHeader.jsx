import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styling } from "./style";
import { Feather, Octicons } from "@expo/vector-icons";
import { Badge, Searchbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getTotalQuantity } from "../../redux/slice/cartSlice";

const HomeHeader = ({ searchQuery, setSearchQuery }) => {
  const styles = styling();
  const navigation = useNavigation();
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      <View style={styles.headerTop}>
        <Text style={styles.headerName}>Hey, Rahul</Text>
        <TouchableOpacity
          style={{ marginRight: 6 }}
          onPress={() => navigation.navigate("Checkout")}
        >
          <Feather
            name="shopping-bag"
            size={20}
            color="white"
            style={{ position: "relative" }}
          />
          <Badge style={{ position: "absolute", bottom: 8, left: 8 }}>
            {totalQuantity}
          </Badge>
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <Searchbar
          placeholder="Search Products or store"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.input}
          placeholderTextColor="#8891A5"
          iconColor="white"
          inputStyle={{ color: "#fff" }}
        />
      </View>

      <View style={styles.deliveryContainer}>
        <View style={styles.delivery}>
          <Text style={styles.deliveryTxt}>Delivery to</Text>
          <View style={styles.location}>
            <Text style={styles.deliveryDesc}>Green Way 3000, Sylhet</Text>
            <Octicons name="chevron-down" size={24} color="#B2BBCE" />
          </View>
        </View>

        <View style={styles.delivery}>
          <Text style={styles.deliveryTxt}>Within</Text>
          <View style={styles.location}>
            <Text style={styles.deliveryDesc}>1 Hour</Text>
            <Octicons name="chevron-down" size={24} color="#B2BBCE" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
