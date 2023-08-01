import { View, Text } from "react-native";
import React, { useState } from "react";
import { category_style } from "../design/style";
import { Pressable } from "react-native";
import { ScrollView } from "react-native";

const CategoryChanger = ({ category, setCategory }) => {
  return (
    <View style={{ width: "100%" }}>
      <ScrollView
        // style={{ paddingLeft: 16 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={category_style.container}>
          <Pressable
            id="btn"
            style={
              category === ""
                ? category_style.button_active
                : category_style.button
            }
            onPress={() => setCategory("")}
          >
            <Text
              style={
                category === ""
                  ? category_style.button_active_text
                  : category_style.button_text
              }
            >
              All
            </Text>
          </Pressable>
          <Pressable
            id="btn"
            style={
              category === "burger"
                ? category_style.button_active
                : category_style.button
            }
            onPress={() => setCategory("burger")}
          >
            <Text
              style={
                category === "burger"
                  ? category_style.button_active_text
                  : category_style.button_text
              }
            >
              Burgers
            </Text>
          </Pressable>
          <Pressable
            id="btn"
            style={
              category === "pizza"
                ? category_style.button_active
                : category_style.button
            }
            onPress={() => setCategory("pizza")}
          >
            <Text
              style={
                category === "pizza"
                  ? category_style.button_active_text
                  : category_style.button_text
              }
            >
              Pizza
            </Text>
          </Pressable>
          <Pressable
            id="btn"
            style={
              category === "hot-dog"
                ? category_style.button_active
                : category_style.button
            }
            onPress={() => setCategory("hot-dog")}
          >
            <Text
              style={
                category === "hot-dog"
                  ? category_style.button_active_text
                  : category_style.button_text
              }
            >
              Hot-dog
            </Text>
          </Pressable>
          <Pressable
            id="btn"
            style={
              category === "drinks"
                ? category_style.button_active
                : category_style.button
            }
            onPress={() => setCategory("drinks")}
          >
            <Text
              style={
                category === "drinks"
                  ? category_style.button_active_text
                  : category_style.button_text
              }
            >
              Drinks
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryChanger;
