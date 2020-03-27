import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/review-details";
import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />
      };
    }
  },
  ReveiwDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details"
      //headerStyle: { backgroundColor: "#eee" }
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#dee3e0",
      height: 60
    }
  }
});

export default createAppContainer(HomeStack);
