import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>Gamezone</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 320,
    // backgroundColor: "red",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,

    textAlign: "center",
    color: "#333",
    letterSpacing: 1
  },
  icon: {
    position: "absolute",
    left: 10
  }
});

export default Header;
