import { View, Text } from "react-native";
import React from "react";
import CoverImg from "../assets/food.png";
import { Image } from "react-native";
import { colors, home_style } from "../design/style";

const Discount = () => {
  return (
    <View style={home_style.discount_wrapper}>
      <View style={home_style.dw_left}>
        <Text style={{ color: colors._grey }}>#eatwelleveryday</Text>
        <Text
          style={{ color: colors._white, fontWeight: "bold", fontSize: 16 }}
        >
          Do you have a 70% off meal coupon!
        </Text>
        <Text style={{ color: colors._accent }}>
          Promo period 4-28 Aug 2023
        </Text>
      </View>
      <View>
        <Image source={CoverImg} style={{ width: 140, height: 140 }} />
      </View>
    </View>
  );
};

export default Discount;
