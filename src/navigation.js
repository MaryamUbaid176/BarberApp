// // In App.js in a new project

// import * as React from 'react';
// import {LogBox} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SelectUser from './screens/auth/UserType/SelectUser';
import Login from "./screens/auth/Login";

// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from "./screens/auth/SplashScreen";
import SelectUser from "./screens/auth/UserType/SelectUser";
import ForgotPassword from "./screens/auth/ForgotPassword";
import Home from "./screens/dashboard/Home";
// import Profile from "./screens/dashboard/Profile";

// const Stack = createNativeStackNavigator();

// const AuthStack = props => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="SplashScreen" component={SplashScreen} />
//       <Stack.Screen name="SelectUser" component={SelectUser} />
//       {/* <Stack.Screen name="Login" component={Login} /> */}
//       <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//     </Stack.Navigator>
//   );
// };

// function App() {
//   LogBox.ignoreAllLogs();
//   return (
//     <NavigationContainer>
//       <AuthStack />
//     </NavigationContainer>
//     // <NavigationContainer>
//     //   <Stack.Navigator initialRouteName="Home">
//     //     <Stack.Screen
//     //       name="SplashScreen"
//     //       component={SplashScreen}
//     //       options={{headerShown: false}}
//     //     />
//     //     <Stack.Screen
//     //       name="Home"
//     //       component={Home}
//     //       options={{headerShown: false}}
//     //     />
//     //     <Stack.Screen
//     //       name="BarberHome"
//     //       component={BarberHome}
//     //       options={{headerShown: false}}
//     //     />

//     //     <Stack.Screen
//     //       name="BCreateProfile"
//     //       component={BCreateProfile}
//     //       options={{headerShown: false}}
//     //     />
//     //     <Stack.Screen
//     //       name="BarberLogin"
//     //       component={BarberLogin}
//     //       options={{headerShown: false}}
//     //     />
//     //     <Stack.Screen
//     //       name="BarberRegister"
//     //       component={BarberRegister}
//     //       options={{headerShown: false}}
//     //     />
//     //     <Stack.Screen
//     //       name="Barberforgetpass"
//     //       component={Barberforgetpass}
//     //       options={{headerShown: false}}
//     //     />

//     //     <Stack.Screen
//     //       name="ClientLogin"
//     //       component={ClientLogin}
//     //       options={{headerShown: false}}
//     //     />
//     //     <Stack.Screen
//     //       name="ClientRegister"
//     //       component={ClientRegister}
//     //       options={{headerShown: false}}
//     //     />
//     //     <Stack.Screen
//     //       name="ClientHome"
//     //       component={ClientHome}
//     //       options={{headerShown: false}}
//     //     />
//     //     <Stack.Screen
//     //       name="Clientforgetpassword"
//     //       component={Clientforgetpassword}
//     //       options={{headerShown: false}}
//     //     />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//   );
// }

// export default App;
import CusHome from "./screens/Customer/CusHome";

import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "./screens/dashboard/Account";
import Mystore from "./screens/dashboard/My store";
import AddProduct from "./screens/dashboard/My store/AddProduct";
import Booking from "./screens/Customer/Booking";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SelectUser" component={SelectUser} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Mystore"
          component={Mystore}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const CustomerStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CusHome">
        <Stack.Screen name="CusHome" component={CusHome} />
        <Stack.Screen name="Booking" component={Booking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  return <CustomerStack />;
  // <HomeStack />;
  // <AuthStack />;
}

export default App;
