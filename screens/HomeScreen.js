import { View, Text, Button } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { home_style } from "../design/style";
import HomeHeader from "../components/HomeHeader";
import { ScrollView } from "react-native";
import FoodListScreen from "./FoodsListScreen";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={home_style.container}>
      <StatusBar style="light" animated />
      <HomeHeader />
      <FoodListScreen />
    </View>
  );
};

export default HomeScreen;
