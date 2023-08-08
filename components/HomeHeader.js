import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { home_style } from "../design/style";
import { Image } from "react-native";
import ProfileImage from "../assets/kevin-wang-De50KkNbifw-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native";
import { CartStateContext, getItemCount } from "../store/cart";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../api/firebase";

const HomeHeader = () => {
  const { items } = useContext(CartStateContext);
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();
  const userData = [];

  useEffect(() => {
    db.collection("users")
      .where("id", "==", auth.currentUser.uid)
      .onSnapshot((snapshot) => {
        setUsers(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);


  users.map((item) => {
    userData.push(item.data.name);
    userData.push(item.data.phone);
  });

  // console.log(userData);

  return (
    <View style={home_style.header}>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserScreen")}
        style={home_style.profile_wrapper}
      >
        <View>
          <Image source={ProfileImage} style={home_style.profile_image} />
        </View>
        <View>
          <Text style={home_style.profile_text}>Hello, {userData[0]}</Text>
          <Text style={home_style.profile_text2}>{userData[1]}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ShoppingCart")}>
        <View style={home_style.cart_wrapper}>
          <FontAwesomeIcon icon={faShoppingCart} size={20} color="black" />
          <Text style={home_style.basket_counter}>{getItemCount(items)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
