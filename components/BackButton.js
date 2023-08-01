import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { back_btn_style, colors } from "../design/style";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      style={back_btn_style.wrapper}
    >
      <FontAwesomeIcon icon={faArrowLeft} size={20} color={colors._secondary} />
    </TouchableOpacity>
  );
};

export default BackButton;
