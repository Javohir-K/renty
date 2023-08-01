import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faDeleteLeft,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { colors, search_style } from "../design/style";
import { TextInput } from "react-native";

const SearchBar = ({ setSearch, searchValue }) => {
  return (
    <View style={search_style.container}>
      <View style={search_style.search_wrapper}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size={20}
          color={colors._grey}
        />
        <TextInput
          placeholder="Find what you want..."
          style={{ fontSize: 16, flex: 1 }}
          value={searchValue}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity
          onPress={() => setSearch("")}
          style={
            searchValue.length === 0
              ? search_style.hide
              : search_style.clear_wrapper
          }
        >
          <FontAwesomeIcon icon={faDeleteLeft} size={18} color={colors._dark} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
