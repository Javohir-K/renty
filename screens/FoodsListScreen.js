import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { colors, food_list_style } from "../design/style";
import SearchBar from "../components/SearchBar";
import { db } from "../api/firebase";
import { ScrollView } from "react-native";
import SearchList from "../components/SearchList";
import CategoryChanger from "../components/CategoryChanger";

const FoodsListScreen = () => {
  const [foods, setFoods] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    db.collection("foods").onSnapshot((snapshot) =>
      setFoods(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  const filteredPosts = foods.filter((student) => {
    return (
      student.data.name.toLowerCase().includes(searchField.toLowerCase()) &&
      student.data.category.toLowerCase().includes(category.toLowerCase())
    );
  });

  function searchList() {
    return <SearchList filteredPosts={filteredPosts} />;
  }

  return (
    <View style={food_list_style.container}>
      <View style={food_list_style.header}>
        <SearchBar searchValue={searchField} setSearch={setSearchField} />
        <CategoryChanger category={category} setCategory={setCategory} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 16 }}
      >
        <View style={food_list_style.food_list}>
          {filteredPosts.length === 0 ? (
            <Text>No product for this name</Text>
          ) : (
            searchList()
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodsListScreen;
