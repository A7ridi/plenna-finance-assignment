import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Home from "../screens/home/Home";
import Favourites from "../screens/favourites/Favourites";
import Profile from "../screens/profile/Profile";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {focused ? (
                  <Image
                    source={require("../assets/icons/home-filled.png")}
                    style={{ width: 25, height: 25 }}
                  />
                ) : (
                  <>
                    <Image
                      source={require("../assets/icons/home-light.png")}
                      style={{ width: 20, height: 20 }}
                    />
                    <Text style={styles.text}>Home</Text>
                  </>
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Categories"
        component={Favourites}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {focused ? (
                  <Image
                    source={require("../assets/icons/category.png")}
                    style={{ width: 20, height: 20 }}
                  />
                ) : (
                  <>
                    <Image
                      source={require("../assets/icons/category.png")}
                      style={{ width: 20, height: 20 }}
                    />
                    <Text style={styles.text}>Categories</Text>
                  </>
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {focused ? (
                  <AntDesign name="heart" size={20} color="red" />
                ) : (
                  <>
                    <AntDesign name="hearto" size={20} color="black" />
                    <Text style={styles.text}>Favourite</Text>
                  </>
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="More"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {focused ? (
                  <>
                    <Image
                      source={require("../assets/icons/more_vertical.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </>
                ) : (
                  <>
                    <Image
                      source={require("../assets/icons/more_vertical.png")}
                      style={{ width: 20, height: 20 }}
                    />
                    <Text style={styles.text}>More</Text>
                  </>
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

export const styles = StyleSheet.create({
  text: {
    color: "#8891A5",
  },
});
