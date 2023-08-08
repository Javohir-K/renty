import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "./api/firebase";
import CartProvider from "./store/cart";
import ShoppingCartSceen from "./screens/ShoppingCartSceen";
import UserScreen from "./screens/UserScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={loggedIn ? HomeScreen : LoginScreen}
          />
          <Stack.Screen
            name="ShoppingCart"
            component={loggedIn ? ShoppingCartSceen : LoginScreen}
          />
          <Stack.Screen
            name="UserScreen"
            component={loggedIn ? UserScreen : LoginScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
