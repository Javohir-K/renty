import { View, Text, Button } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../api/firebase";
import { useNavigation } from "@react-navigation/native";
import TopNavigation from "../components/TopNavigation";
import { user_screen_style } from "../design/style";

const UserScreen = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={user_screen_style.container}>
      <TopNavigation title={"My Profile"} />
      <View style={user_screen_style.main}>
        <Text>UserScreen</Text>
        <Text>{auth.currentUser?.email}</Text>
        <Button title="Logout" onPress={logout} />
      </View>
    </View>
  );
};

export default UserScreen;
