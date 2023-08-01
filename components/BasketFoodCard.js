import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Image } from "react-native";
import { basket_food_card_style, colors } from "../design/style";
import {
  clearCart,
  removeFromCart,
  updateQty,
  CartDispatchContext,
} from "../store/cart";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMinus,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

const BasketFoodCard = ({ image, name, id, desc, price, amount }) => {
  const dispatch = useContext(CartDispatchContext);

  const handleRemove = (productId) => {
    return removeFromCart(dispatch, productId);
  };

  const updateQTY = (productId) => {
    return updateQty(dispatch, productId);
  };
 
  return (
    <View style={basket_food_card_style.card_wrapper}>
      <View style={basket_food_card_style.image_wrapper}>
        <Image style={basket_food_card_style.image} source={{ uri: image }} />
      </View>
      <View>
        <View>
          <Text style={basket_food_card_style.title}>{name}</Text>
          <Text style={basket_food_card_style.text}>{desc}</Text>
          <Text style={basket_food_card_style.text}>${price}</Text>
        </View>
        <View style={basket_food_card_style.basket_updater}>
          <TouchableOpacity onPress={() => handleRemove(id)}>
            <FontAwesomeIcon
              icon={faMinusCircle}
              size={20}
              color={colors._grey}
            />
          </TouchableOpacity>
          <Text>{amount}</Text>
          <TouchableOpacity onPress={() => updateQTY(id)}>
            <FontAwesomeIcon
              icon={faPlusCircle}
              size={20}
              color={colors._grey}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BasketFoodCard;
