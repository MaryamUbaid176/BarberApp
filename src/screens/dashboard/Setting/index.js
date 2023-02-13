import { View, Text, Button } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Setting = () => {
  return (
    <Button
      title="setting"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate("Account");
      }}
    />
  );
};

export default Setting;
