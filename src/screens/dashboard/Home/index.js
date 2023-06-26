import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AllBarbers from "../AllBarbers";
import Mystore from "../My store";
import MyBookings from "../MyBookings";

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="BarberList"
        options={{ headerShown: false }}
        component={AllBarbers}
      />
      <Tab.Screen
        name="MyBookings"
        options={{ headerShown: false }}
        component={MyBookings}
      />

      <Tab.Screen
        name="Setting"
        options={{ headerShown: false }}
        component={Mystore}
      />
    </Tab.Navigator>
  );
};

export default Home;
