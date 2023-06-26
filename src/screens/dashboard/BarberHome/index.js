import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Mystore from "../My store";
import Account from "./BarberList";
import MyOrders from "./MyOrders";

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
        name="My Orders"
        options={{ headerShown: false }}
        component={MyOrders}
      />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={Mystore}
      />
    </Tab.Navigator>
  );
};

// function ({ navigation }) {
//   return (
//     <Button
//       title="Go somewhere"
//       onPress={() => {
//         // Navigate using the `navigation` prop that you received
//         navigation.navigate("Home");
//       }}
//     />
//   );
// }
// Profile: (props) => <TouchableOpacity {...props} />;
//   function MyTabs() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="Profile" component={Profile} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     );
//   }

export default BarberHome;
