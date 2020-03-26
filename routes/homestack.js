import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/review-details";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GamezZone"
      //headerStyle: { backgroundColor: "#ebb" }
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
      backgroundColor: "#dee3e0"
    }
  }
});

export default createAppContainer(HomeStack);
