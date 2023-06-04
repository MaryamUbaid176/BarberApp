// // In MainApp.js in a new project

// import {LogBox} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SelectUser from './screens/auth/UserType/SelectUser';
import auth, { firebase } from "@react-native-firebase/auth";
import { useSelector } from "react-redux";
import Login from "./screens/auth/Login";

// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ForgotPassword from "./screens/auth/ForgotPassword";
import SignUp from "./screens/auth/SignUp";
import SplashScreen from "./screens/auth/SplashScreen";
import SelectUser from "./screens/auth/UserType/SelectUser";
import Home from "./screens/dashboard/Home";
import BarberHome from "./screens/dashboard/BarberHome";

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

// function MainApp() {
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

// export default MainApp;
// import CusHome from "./screens/Customer/";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useEffect, useState } from "react";
import Booking from "./screens/Customer/Booking";
import Account from "./screens/dashboard/BarberHome/Account";
import Mystore from "./screens/dashboard/My store";
import AddProduct from "./screens/dashboard/My store/AddProduct";
import firebaseConfig from "./config/firebase";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SelectUser" component={SelectUser} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeStack = () => {
  const userData = useSelector((state) => state.user.userData);
  console.log("userData", userData?.type);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        {userData?.type == "user" ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="BarberHome"
            component={BarberHome}
            options={{ headerShown: false }}
          />
        )}

        {/* <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const CustomerStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeStack">
        <Stack.Screen name="" component={Booking} />
        <Stack.Screen name="Booking" component={Booking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function MainApp() {
  const userData = useSelector((state) => state.user.userData);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return <>{userData ? <HomeStack /> : <AuthStack />}</>;
}

export default MainApp;
