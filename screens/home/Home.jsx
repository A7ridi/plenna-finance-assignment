import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import HomeHeader from "../../components/home/HomeHeader";
import OfferBanner from "../../components/home/OfferBanner";
import Products from "../../components/home/products/Products";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View>
      <HomeHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <View style={{ height: 400 }}>
        <OfferBanner />
        <Products searchQuery={searchQuery} />
      </View>
    </View>
  );
};

export default Home;
