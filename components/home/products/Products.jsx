import React, { useEffect, useMemo, useState } from "react";
import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styling } from "./style";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addProductToStore, toggleLike } from "../../../redux/slice/cartSlice";

const Products = ({ searchQuery }) => {
  const styles = styling();
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const likedItems = useSelector((state) => state.cart.likedItems);

  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setData(result?.products ?? []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery, data]
  );

  const Card = ({ item }) => {
    const liked = likedItems.includes(item.id);
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("ProductDetails", { productId: item.id, liked })
        }
      >
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => dispatch(toggleLike(item.id))}
        >
          {liked ? (
            <AntDesign name="heart" size={22} color="red" />
          ) : (
            <AntDesign name="hearto" size={24} color="black" />
          )}
        </TouchableOpacity>
        <Image source={{ uri: item?.thumbnail }} style={styles.image} />
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.cartButton}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => dispatch(addProductToStore(item))}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 12 }}>Recommended</Text>
      {loading ? (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item?.id?.toString()}
          numColumns={2}
          renderItem={({ item }) => <Card item={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Products;
