import React, { useEffect, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
const SplashScreen = (props) => {
  // useEffect(() => {
  //   setInterval(() => {
  //     props.navigation.navigate("SelectUser");
  //   }, 5000);
  // }, []);

  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      props.navigation.replace("SelectUser");
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LottieView
        style={{ flex: 1 }}
        source={require("../../../Assets/lottie/122850-office-chair.json")}
        autoPlay
        loop
      />

      {/* <TouchableOpacity onPress={() => props.navigation.navigate("SelectUser")}>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
      </TouchableOpacity> */}
    </View>
  );
};
export default SplashScreen;
