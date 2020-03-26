import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { globalStyles } from "./global-styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const [reviews, setreviews] = useState([
    { title: "Title 1", rating: 4, body: "lorem ipsum", key: "1" },
    { title: "Title 2", rating: 5, body: "lorem ipsum", key: "2" },
    { title: "Title 3", rating: 2, body: "lorem ipsum", key: "3" },
    { title: "Title 4", rating: 4, body: "lorem ipsum", key: "5" }
  ]);

  const pressHandler = ({ naviagtion }) => {
    navigation.navigate("ReveiwDetails");
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReveiwDetails", item)}
          >
            <Text style={globalStyles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
