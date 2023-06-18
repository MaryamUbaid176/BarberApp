import auth, { firebase } from "@react-native-firebase/auth";
import { useSelector } from "react-redux";
import Login from "./screens/auth/Login";

import ForgotPassword from "./screens/auth/ForgotPassword";
import SignUp from "./screens/auth/SignUp";
import SplashScreen from "./screens/auth/SplashScreen";
import SelectUser from "./screens/auth/UserType/SelectUser";
import BarberHome from "./screens/dashboard/BarberHome";
import Home from "./screens/dashboard/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useEffect, useState } from "react";
import firebaseConfig from "./config/firebase";
import Booking from "./screens/Customer/Booking";

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
