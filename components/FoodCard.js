import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { colors, food_card_style } from "../design/style";
import {
  CartDispatchContext,
  addToCart,
  removeFromCart,
  updateQty,
} from "../store/cart";

const FoodCard = ({ image, id, name, desc, price, handleAdd }) => {
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const dispatch = useContext(CartDispatchContext);
  const onAdd = () => {
    const product = { id, price, quantity: 1 };
    addToCart(dispatch, product);
  };

  return (
    <View style={food_card_style.card_wrapper}>
      <View style={food_card_style.card}>
        <View style={food_card_style.card_image_wrapper}>
          <Image source={{ uri: image }} style={food_card_style.card_image} />
        </View>
        <View>
          <Text
            style={{
              color: colors._white,
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {name}
          </Text>
          <Text
            style={{ fontSize: 12, color: colors._yellow, textAlign: "center" }}
          >
            {desc}
          </Text>
        </View>
        <Text
          style={{
            color: colors._white,
            fontWeight: "bold",
            fontSize: 16,
            marginTop: 8,
            textAlign: "center",
          }}
        >
          {currencyFormat(price)}
        </Text>
        {/* <Text>{count}</Text> */}
        <View style={food_card_style.shopping_cart}>
          <TouchableOpacity
            onPress={onAdd}
            style={food_card_style.shopping_cart_wrapper}
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              size={18}
              color={colors._white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;
