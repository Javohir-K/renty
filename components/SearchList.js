import React, { useContext, useState } from "react";
import FoodCard from "./FoodCard";


function SearchList({ filteredPosts }) {
  
  const posts = filteredPosts.map((title) => (
    <FoodCard
      key={title.id}
      id={title?.id}
      {...title.data}
    />
  ));
  return posts;
}
export default SearchList;
