import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  CartDispatchContext,
  CartStateContext,
  clearCart,
  getBasketTotal,
} from "../store/cart";
import { shopping_cart_style } from "../design/style";
import { db } from "../api/firebase";
import { Button } from "react-native";
import BasketFoodCard from "../components/BasketFoodCard";
import { ScrollView } from "react-native";
import { auth } from "../api/firebase";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import TopNavigation from "../components/TopNavigation";

const ShoppingCartSceen = () => {
  const { items } = useContext(CartStateContext);
  const [foods, setFoods] = useState([]);
  const currentDate = format(new Date(), "MMM d, yyyy. hh:mma");

  const dispatch = useContext(CartDispatchContext);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    db.collection("foods").onSnapshot((snapshot) =>
      setFoods(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  const handleAdd = async () => {
    await db.collection("orders").add({
      order: items,
      total: getBasketTotal(items),
      userId: auth.currentUser.uid,
      orderTime: currentDate,
    });
  };

  const clearCartItem = () => {
    items.map((item) => {
      return clearCart(dispatch, item.id);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <TopNavigation
        title={"My Cart"}
        menu_content={
          <Button title="Clear Cart" onPress={() => clearCartItem()} />
        }
      />
      <View style={shopping_cart_style.container}>
        <ScrollView>
          <View style={shopping_cart_style.items_wrapper}>
            {items.length === 0 ? (
              <Text>Cart is empty</Text>
            ) : (
              items.map((item) =>
                foods
                  .filter((food) => {
                    return food.id === item.id;
                  })
                  .map((x) => (
                    <BasketFoodCard
                      key={x.id}
                      {...x.data}
                      id={x.id}
                      amount={item?.quantity}
                    />
                  ))
              )
            )}
          </View>
        </ScrollView>
        <View style={shopping_cart_style.subtotal_wrapper}>
          <View style={shopping_cart_style.subtotal_inner}>
            <Text style={shopping_cart_style.sub_text}>Order:</Text>
            <Text style={shopping_cart_style.price_text}>
              ${getBasketTotal(items)}
            </Text>
          </View>
          <View style={shopping_cart_style.subtotal_inner}>
            <Text style={shopping_cart_style.sub_text}>Delivery:</Text>
            <Text style={shopping_cart_style.price_text}>Free</Text>
          </View>
          <View style={shopping_cart_style.subtotal_inner}>
            <Text style={shopping_cart_style.sub_text}>Total:</Text>
            <Text style={shopping_cart_style.price_text}>
              ${getBasketTotal(items)}
            </Text>
          </View>
          <TouchableOpacity style={shopping_cart_style.btn} onPress={handleAdd}>
            <Text style={shopping_cart_style.btn_text}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ShoppingCartSceen;
