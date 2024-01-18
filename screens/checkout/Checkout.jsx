import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styling } from "./style";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import { Button, Divider, IconButton, MD3Colors } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  getTotalQuantity,
  increaseQuantity,
} from "../../redux/slice/cartSlice";

const Checkout = ({ navigation }) => {
  const styles = styling();
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalQuantity = useSelector(getTotalQuantity);

  const subtotal = cartProducts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleIncrease = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecrease = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.headerTop}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Entypo
            style={styles.chevronIcon}
            name="chevron-small-left"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.shoppingText}>Shopping Cart ({totalQuantity})</Text>
      </View>

      {totalQuantity === 0 && (
        <View style={{ marginTop: 50 }}>
          <Text style={{ textAlign: "center", fontSize: 18 }}>
            No items added
          </Text>
        </View>
      )}

      <ScrollView style={styles.scrollview}>
        {cartProducts?.map((item, id) => (
          <View key={id}>
            <View style={styles.cartContainer}>
              <View style={styles.imagePriceTitle}>
                <Image
                  source={{
                    uri: item?.thumbnail ?? "",
                  }}
                  width={40}
                  height={40}
                  style={{ borderRadius: 12 }}
                />
                <View style={styles.priceTitle}>
                  <Text style={styles.title}>
                    {item?.title.length > 14
                      ? item?.title.substring(0, 14) + "..."
                      : item?.title ?? ""}
                  </Text>
                  <Text style={styles.price}>${item?.price ?? 0}</Text>
                </View>
              </View>
              <View style={styles.plusMinus}>
                <IconButton
                  icon="minus"
                  iconColor={MD3Colors.secondary0}
                  mode="contained"
                  size={20}
                  onPress={() => handleDecrease(item.id)}
                  style={{ backgroundColor: "#F8F9FB" }}
                />
                <Text style={styles.count}>{item.quantity}</Text>
                <IconButton
                  icon="plus"
                  iconColor={MD3Colors.secondary10}
                  mode="contained"
                  size={20}
                  onPress={() => handleIncrease(item.id)}
                  style={{ backgroundColor: "#F8F9FB" }}
                />
              </View>
            </View>
            <Divider
              style={{ marginVertical: 12, backgroundColor: "#EBEBFB" }}
            />
          </View>
        ))}
      </ScrollView>

      {totalQuantity > 0 && (
        <View style={styles.summaryContainer}>
          <View style={styles.summary}>
            <View style={styles.titlePrice}>
              <Text style={styles.checkoutTitle}>Subtotal</Text>
              <Text style={styles.checkoutPrice}>${subtotal}</Text>
            </View>
            <View style={styles.titlePrice}>
              <Text style={styles.checkoutTitle}>Delivery</Text>
              <Text style={styles.checkoutPrice}>$2.00</Text>
            </View>
            <View style={styles.titlePrice}>
              <Text style={styles.checkoutTitle}>Total</Text>
              <Text style={styles.checkoutPrice}>
                ${(subtotal + 2).toFixed(2)}
              </Text>
            </View>
          </View>
          <Button mode="contained" style={styles.cartButton} onPress={() => {}}>
            Proceed To checkout
          </Button>
        </View>
      )}
    </View>
  );
};

export default Checkout;
