import { View, Text, Button } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../Account";
import Setting from "../Setting";
import Mystore from "../My store";
import AddProduct from "../My store/AddProduct";

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        options={{ headerShown: false }}
        component={Account}
      />
      {/* <Tab.Screen
        name="Setting"
        options={{ headerShown: false }}
        component={Setting}
      /> */}
      <Tab.Screen
        name="Mystore"
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

export default Home;
