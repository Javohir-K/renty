import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import FoodCard from "./FoodCard";
import { home_recommendations_style } from "../design/style";

const HomeRecommendations = () => {
  return (
    <View>
      <View style={home_recommendations_style.header}>
        <Text style={home_recommendations_style.header_title}>Popular now</Text>
        <Pressable>
          <Text style={home_recommendations_style.header_link}>See more</Text>
        </Pressable>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", gap: 12, paddingHorizontal: 16 }}>
          <Text>Foods</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeRecommendations;
