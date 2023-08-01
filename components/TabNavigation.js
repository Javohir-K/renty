import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCartShopping,
  faHome,
  faPizzaSlice,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import FoodsListScreen from "../screens/FoodsListScreen";
import UserScreen from "../screens/UserScreen";
import ShoppingCartSceen from "../screens/ShoppingCartSceen";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { colors } from "../design/style";
import { useContext } from "react";
import { CartStateContext, getItemCount } from "../store/cart";

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  const navigation = useNavigation();

  const { items } = useContext(CartStateContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors._white}
      barStyle={{ backgroundColor: colors._dark }}
      inactiveColor={colors._primary}
      labeled={true}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faHome} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Foods"
        component={FoodsListScreen}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faPizzaSlice} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCartSceen}
        options={{
          tabBarLabel: getItemCount(items),

          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCartShopping} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faUser} color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
