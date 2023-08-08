import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { login_style } from "../design/style";
import GoogleIcon from "../assets/google.png";
import PizzaIcon from "../assets/pizza.png";

import { auth, db } from "../api/firebase";
import { Pressable } from "react-native";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginScreen = () => {
  const [screen, setScreen] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [checkpassword, setCheckPassword] = useState("");
  const navigation = useNavigation();
  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const signIn = async (e) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (
        error.code === "auth/invalid-email" ||
        error.code === "auth/wrong-password"
      ) {
        setError("Your email or password was incorrect");
      } else if (error.code === "auth/email-already-in-use") {
        setError("An account with this email already exists");
      } else {
        setError("There was a problem with your request");
      }
    }
  };

  const createAccount = async () => {
    try {
      if (password === checkpassword) {
        await createUserWithEmailAndPassword(auth, email, password);
        await db.collection("users").add({
          id: auth.currentUser.uid,
          email: email,
          name: name,
          phone: phone,
        });
      } else setErrorPassword("Passwords don't match");
    } catch (e) {
      alert(e.message);
    }
  };

  if (screen === "login") {
    return (
      <View style={login_style.container}>
        <View style={login_style.logo}>
          <Text style={login_style.logo_text}>Renty</Text>
          <Image source={PizzaIcon} style={{ height: 32, width: 32 }} />
        </View>
        <View style={login_style.form}>
          <Text style={login_style.form_title}>Login to your Account</Text>
          <TextInput
            style={login_style.form_input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={login_style.form_input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          {error && <Text style={{ color: "red" }}>{error}</Text>}
          <TouchableOpacity onPress={signIn} style={login_style.form_button}>
            <Text style={login_style.form_button_text}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
            <Pressable onPress={(e) => setScreen("signup")}>
              <Text style={login_style.sign_up_btn}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  } else if (screen === "signup") {
    return (
      <View style={login_style.container}>
        <View style={login_style.logo}>
          <Text style={login_style.logo_text}>Renty</Text>
          <Image source={PizzaIcon} style={{ height: 32, width: 32 }} />
        </View>
        <View style={login_style.form}>
          <Text style={login_style.form_title}>Create new account</Text>
          <TextInput
            style={login_style.form_input}
            placeholder="Full name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={login_style.form_input}
            placeholder="Phone number"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <TextInput
            style={login_style.form_input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={login_style.form_input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <TextInput
            style={login_style.form_input}
            placeholder="Re-enter password"
            value={checkpassword}
            onChangeText={(text) => setCheckPassword(text)}
            secureTextEntry={true}
          />
          <Text>{errorPassword}</Text>
          <TouchableOpacity
            onPress={createAccount}
            style={login_style.form_button}
          >
            <Text style={login_style.form_button_text}>Create account</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 16 }}>Already have an account?</Text>
            <Pressable onPress={(e) => setScreen("login")}>
              <Text style={login_style.sign_up_btn}>Sign in</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
};

export default LoginScreen;
