import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "./global-styles";

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
