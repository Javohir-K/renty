import { StatusBar } from "react-native";
import { Platform } from "react-native";
import { StyleSheet } from "react-native";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export const colors = {
  _primary: "#EBE5DD",
  _secondary: "#FFF8EF",
  _accent: "#557A46",
  _yellow: "#F8BF40",
  _white: "#FFFFFF",
  _dark: "#2A2828",
  _grey: "#767B7B",
  _brown: "#443010",
  //
};

export const login_style = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    backgroundColor: colors._primary,
    paddingHorizontal: "10%",
    flex: 1,
    justifyContent: "space-between",
  },
  logo: {
    flexDirection: "row",
    paddingTop: 80,
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
  logo_text: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors._accent,
  },
  form: {
    flexDirection: "column",
    gap: 20,
  },
  form_title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  form_input: {
    backgroundColor: colors._secondary,
    padding: 8,
    fontSize: 16,
    borderRadius: 4,
  },
  form_button: {
    backgroundColor: colors._accent,
    padding: 8,
    borderRadius: 4,
  },
  form_button_text: {
    fontSize: 18,
    color: colors._white,
    textAlign: "center",
  },
  google_login_button: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors._secondary,
    borderRadius: 4,
  },
  glb_text: {
    fontSize: 18,
  },
  sign_up_btn: {
    color: colors._accent,
    fontSize: 16,
  },
});

export const home_style = StyleSheet.create({
  container: {
    backgroundColor: colors._primary,
    flex: 1,
    // gap: 24,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 15,
    paddingHorizontal: 16,
    paddingTop: statusBarHeight + 16,
    paddingBottom: 64,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors._accent,
  },
  profile_wrapper: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  profile_image: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  profile_text: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors._secondary,
  },
  profile_text2: {
    color: colors._primary,
  },
  cart_wrapper: {
    width: 48,
    height: 48,
    backgroundColor: colors._secondary,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: 50,
  },
  basket_counter: {
    position: "absolute",
    top: -8,
    right: -8,
    zIndex: 111,
    color: colors._white,
    backgroundColor: colors._yellow,
    borderRadius: 50,
    width: 24,
    height: 24,
    textAlign: "center",
  },
  discount_wrapper: {
    marginHorizontal: 16,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 24,
    backgroundColor: colors._brown,
    flexDirection: "row",
    alignItems: "center",
  },
  dw_left: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },
});

export const search_style = StyleSheet.create({
  search_wrapper: {
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors._secondary,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: "100%",
  },
  clear_wrapper: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  container: {
    paddingHorizontal: 16,
    position: "absolute",
    top: "-50%",
    width: "100%",
  },
});

export const food_card_style = StyleSheet.create({
  card_wrapper: {
    paddingVertical: 20,
  },
  card: {
    width: 180,
    height: 190,
    position: "relative",
    backgroundColor: colors._accent,
    borderRadius: 24,
    padding: 16,
    paddingBottom: 32,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  card_image_wrapper: {
    position: "absolute",
    top: -18,
    zIndex: 2,
  },
  card_image: {
    width: 110,
    height: 115,
    objectFit: "cover",
  },
  shopping_cart: {
    position: "absolute",
    bottom: -25,
    borderRadius: 50,
    borderWidth: 5,
    backgroundColor: colors._yellow,
    borderColor: colors._primary,
  },
  shopping_cart_wrapper: {
    padding: 10,
  },
});

export const home_recommendations_style = StyleSheet.create({
  header: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  header_link: {
    color: colors._grey,
  },
});

export const food_list_style = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: colors._primary,
    // paddingTop: statusBarHeight,
  },
  header: {
    paddingTop: 32,
    // padding: 16,
    alignItems: "center",
    gap: 16,
  },
  header_text: {
    fontSize: 20,
  },

  search_wrapper: {
    // flex: 1,
    backgroundColor: colors._secondary,
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
  },
  search_input: {
    flex: 1,
    fontSize: 16,
  },
  food_list: {
    flexDirection: "row",
    gap: 18,
    flexWrap: "wrap",
  },
});

export const category_style = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 10,
    // backgroundColor: colors._accent,
    width: "100%",
    paddingHorizontal: 16,
  },
  button_active: {
    backgroundColor: colors._accent,
    paddingVertical: 8,
    borderRadius: 50,
    minWidth: 80,
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: colors._secondary,
    paddingVertical: 8,
    borderRadius: 50,
    minWidth: 80,
    paddingHorizontal: 24,
  },
  button_active_text: {
    textAlign: "center",
    color: colors._secondary,
    fontSize: 16,
  },
  button_text: {
    textAlign: "center",
    color: colors._grey,
    fontSize: 16,
  },
});

export const shopping_cart_style = StyleSheet.create({
  container: {
    // paddingTop: statusBarHeight,
    paddingHorizontal: 16,
    backgroundColor: colors._primary,
    flex: 1,
    // position: "relative",
  },
  header_text: {
    fontSize: 20,
    textAlign: "center",
    padding: 16,
  },
  items_wrapper: {
    flexDirection: "column",
    gap: 14,
    paddingTop: 16,
  },
  subtotal_wrapper: {
    flexDirection: "column",
    gap: 16,
  },
  subtotal_inner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sub_text: {
    color: colors._grey,
    // fontWeight: "bold",
    fontSize: 16,
  },
  price_text: {
    color: colors._accent,
    fontSize: 16,
  },
  btn: {
    backgroundColor: colors._dark,
    padding: 16,
    borderRadius: 50,
    justifyContent: "center",
    flexDirection: "row",
  },
  btn_text: {
    color: colors._secondary,
    fontSize: 18,
  },
});

export const basket_food_card_style = StyleSheet.create({
  card_wrapper: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },
  image: {
    width: 84,
    height: 84,
    objectFit: "cover",
  },
  image_wrapper: {
    padding: 16,
    backgroundColor: colors._accent,
    borderRadius: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    color: colors._grey,
  },
  basket_updater: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 8,
  },
});

export const back_btn_style = StyleSheet.create({
  wrapper: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  container: {
    paddingTop: statusBarHeight,
    flexDirection: "row",
    // paddingBottom: 8,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors._accent,
    // borderBottomLeftRadius: 24,
    // borderBottomRightRadius: 24,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors._secondary,
  },
  menu: {
    display: "flex",
    position: "absolute",
    right: 0,
    top: "120%",
    backgroundColor: colors._secondary,
    padding: 16,
    zIndex: 11111,
  },
  menu_hidden: {
    display: "none",
  },
});

export const user_screen_style = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    // paddingTop: statusBarHeight,
    backgroundColor: colors._primary,
    flex: 1,
  },
  main: {
    padding: 16,
  },
});
