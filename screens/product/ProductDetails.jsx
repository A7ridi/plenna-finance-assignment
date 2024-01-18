import React, { useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  ActivityIndicator,
  Badge,
  Button,
  MD2Colors,
} from "react-native-paper";
import { styling } from "./style";
import { StatusBar } from "expo-status-bar";
import { Entypo, Feather, AntDesign } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { AirbnbRating } from "react-native-ratings";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToStore,
  getTotalQuantity,
  toggleLike,
} from "../../redux/slice/cartSlice";

const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const styles = styling();
  const { productId } = route.params;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const totalQuantity = useSelector(getTotalQuantity);
  const likedItems = useSelector((state) => state.cart.likedItems);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchData();
    }
  }, [productId]);

  const liked = useMemo(() => likedItems.includes(productId), [likedItems]);

  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.headerTop}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.navigate("Home")}
        >
          <Entypo
            style={styles.chevronIcon}
            name="chevron-small-left"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Checkout")}
          style={{ marginRight: 6 }}
        >
          <Feather
            name="shopping-bag"
            size={20}
            color="black"
            style={{ position: "relative" }}
          />
          <Badge style={{ position: "absolute", bottom: 8, left: 8 }}>
            {totalQuantity}
          </Badge>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={{ marginTop: 100 }}>
          <ActivityIndicator
            animating={true}
            size={"large"}
            color={MD2Colors.red800}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.title}>{data?.title ?? ""}</Text>
          <View style={styles.ratingContainer}>
            <AirbnbRating
              count={5}
              defaultRating={data?.rating ?? 0}
              size={20}
              showRating={false}
            />
            <Text style={styles.rating}>110 Reviews</Text>
          </View>

          <View style={{ marginVertical: 15, position: "relative" }}>
            <SliderBox
              images={data?.images ?? []}
              dotColor={"#F9B023"}
              inactiveDotColor={"#E4E4E4"}
              autoplay
              circleloop
            />
            <TouchableOpacity
              style={styles.heartIcon}
              onPress={() => dispatch(toggleLike(data.id))}
            >
              {liked ? (
                <AntDesign name="heart" size={22} color="red" />
              ) : (
                <AntDesign name="hearto" size={24} color="white" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.priceChip}>
            <Text style={styles.price}>${data?.price ?? 0}/KG</Text>
            <View style={styles.chip}>
              <Text style={styles.chipText}>$22.04 OFF</Text>
            </View>
          </View>

          <View style={styles.buttons}>
            <Button
              mode="outlined"
              style={[styles.cartButton, { borderColor: "#2A4BA0" }]}
              labelStyle={{ color: "#2A4BA0" }}
              onPress={() => dispatch(addProductToStore(data))}
            >
              Add To Cart
            </Button>
            <Button
              mode="contained"
              style={[styles.cartButton, { backgroundColor: "#2A4BA0" }]}
              onPress={() => {
                dispatch(addProductToStore(data));
                navigation.navigate("Checkout");
              }}
            >
              Buy Now
            </Button>
          </View>

          <View style={styles.details}>
            <Text style={styles.detailsText}>Details</Text>
            <Text style={styles.descText}>{data?.description ?? ""}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProductDetails;
