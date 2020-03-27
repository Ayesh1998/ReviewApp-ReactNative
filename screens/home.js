import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Button, Card } from "react-native-elements";
import { globalStyles } from "../styles/global-styles";
import { TouchableOpacity } from "react-native-gesture-handler";
// import Card from "../shared/card-component";

const Home = ({ navigation }) => {
  const [reviews, setreviews] = useState([
    {
      title: "Title 1",
      rating: 4,
      body: "lorem ipsum",
      key: "1",
      imgUrl: "../assets/images/cod4.jpg"
    },
    {
      title: "Title 2",
      rating: 5,
      body: "lorem ipsum",
      key: "2",
      imgUrl: "../assets/images/cod4.jpg"
    },
    {
      title: "Title 3",
      rating: 2,
      body: "lorem ipsum",
      key: "3",
      imgUrl: "../assets/images/cod4.jpg"
    },
    {
      title: "Title 4",
      rating: 4,
      body: "lorem ipsum",
      key: "5",
      imgUrl: "../assets/images/cod4.jpg"
    }
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
            <Card
              title={item.title}
              image={require("../assets/images/cod4.jpg")}
            ></Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
