import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Mystore from "../My store";
import Account from "./Account";

const BarberHome = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        options={{ headerShown: false }}
        component={Account}
      />
      <Tab.Screen
        name="Mystore"
        options={{ headerShown: false }}
        component={Mystore}
      />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={Mystore}
      />
    </Tab.Navigator>
  );
};

export default BarberHome;
