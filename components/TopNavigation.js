import { View, Text } from "react-native";
import React, { useState } from "react";
import BackButton from "./BackButton";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { back_btn_style, colors } from "../design/style";

const TopNavigation = ({ title, menu_content }) => {
  const [menu, setMenu] = useState(false);

  return (
    <View style={back_btn_style.container}>
      <BackButton />
      <Text style={back_btn_style.text}>{title}</Text>
      <TouchableOpacity
        onPress={() => setMenu(!menu)}
        style={back_btn_style.wrapper}
      >
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size={20}
          color={colors._secondary}
        />
      </TouchableOpacity>
      <View style={menu ? back_btn_style.menu : back_btn_style.menu_hidden}>
        {menu_content}
      </View>
    </View>
  );
};

export default TopNavigation;
