import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  text: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333"
  },
  paragraph: {
    marginVertical: 20,
    lineHeight: 20
  }
});

export const images = {
  ratings: {
    "1": require("../assets/images/rating-1.png"),
    "2": require("../assets/images/rating-2.png"),
    "3": require("../assets/images/rating-3.png"),
    "4": require("../assets/images/rating-4.png"),
    "5": require("../assets/images/rating-5.png")
  }
};
