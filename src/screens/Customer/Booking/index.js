import React, { useState } from "react";
import { View, TextInput, ScrollView, StyleSheet, Button } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Text from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";

const Booking = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView
      style={{ height: hp(100), backgroundColor: "grey" }}
    ></KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  /*    buttonStyle:{ 
        height: 50, 
        width: 70, 
    }*/
});
export default Booking;

{
  /* second heading */
}
{
  /* <Text
          style={{
            fontSize: wp(3),
            marginTop: hp(2),
            color: "grey",
            textAlign: "center",
            fontWeight: "200",
            fontFamily: "KolkerBrush-Regular",
          }}
        > */
}
{
  /* Please enter your account here
        </Text>
      </View>
      <View style={{ height: hp(20), backgroundColor: "transparent" }}>
        <TextInput
          placeholder="Email"
          style={{
            borderRadius: 20,
            borderWidth: 0.5,
            alignSelf: "center",
            marginTop: 12,
            width: "90%",
          }}
        /> */
}

{
  /* <TextInput
          placeholder="Password"
          style={{
            borderWidth: 0.5,
            borderRadius: 20,
            alignSelf: "center",
            marginTop: 20,
            width: "90%",
          }}
        />
      </View> */
}

{
  /* <View style={{ height: hp(15), backgroundColor: "transparent" }}>
        <CustomButton
          onPress={() => navigation.navigate("ForgotPassword")}
          style={{
            backgroundColor: "transparent",
            width: wp(50),
            height: hp(4),
            fontSize: hp(5),
            fontWeight: "bold",
            marginLeft: hp(25),
          }}
          title="Forget Password?"
          titleColor={{ color: "black" }}
        /> */
}
{
  /* </View>

      <View style={{ height: wp(10), backgroundColor: "transparent" }}>
        <CustomButton
          onPress={() => navigation.navigate("ForgotPassword")}
          style={{
            borderRadius: 20,
            backgroundColor: "#2AAA8A",
            alignSelf: "center",
            marginTop: 20,
            width: "90%",
            fontWeight: "bold",
          }}
          title="Login"
          titleColor={{ color: "#FFF" }}
        />
      </View> */
}

{
  /* tibb */
}
{
  /* <View
        style={{
          marginTop: hp(5),
          height: hp(8),
          width: wp("80%"),
          flexDirection: "row",
          backgroundColor: "transparent",
          alignItems: "center",
          marginLeft: "10%",
          justifyContent: "center",
        }}
      > */
}
{
  /* <CustomButton
          onPress={() => navigation.navigate("ForgotPassword")}
          style={{
            width: wp(55),
            marginTop: wp(25),
            marginBottom: hp(15),
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
            height: hp(7),
            alignSelf: "center",
            backgroundColor: "transparent",
          }}
          title="Don't have an account?"
          titleColor={{ color: "black" }}
        /> */
}

{
  /* <CustomButton
          onPress={() => navigation.navigate("SignUp")}
          style={{
            marginBottom: hp(5),

            width: wp(20),
            marginTop: wp(8),
            borderRadius: wp(2),
            justifyContent: "center",
            alignItems: "center",
            height: hp(7),
            alignSelf: "center",
            backgroundColor: "transparent",
          }}
          title="Signup"
          titleColor={{ color: "#2AAA8A" }}
        /> */
}
