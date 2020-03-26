import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "./global-styles";

const ReviewDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{navigation.getParam("title")}</Text>
      <Text style={globalStyles.text}>{navigation.getParam("body")}</Text>
      <Text style={globalStyles.text}>{navigation.getParam("rating")}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     padding: 24
//   }
// });

export default ReviewDetails;
