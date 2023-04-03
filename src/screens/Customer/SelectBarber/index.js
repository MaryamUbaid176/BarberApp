import React, { useState } from "react";
import { View, TextInput, ScrollView, StyleSheet, Button } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Text from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import Booking from "../Booking";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const SelectBarber = ({ navigation }) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SelectUser"
        options={{ headerShown: false }}
        component={Booking}
      />

      <Tab.Screen
        name="Mystore"
        options={{ headerShown: false }}
        component={Booking}
      />
    </Tab.Navigator>

    // <KeyboardAwareScrollView
    //   style={{ height: hp(100), backgroundColor: "transparent" }}
    // >
    //   {/* first heading */}
    //   <View
    //     style={{
    //       height: hp(10),
    //       backgroundColor: "transparent",
    //       justifyContent: "center",
    //       marginLeft: wp(2),
    //       width: wp(95),
    //     }}
    //   >
    //     <TextInput
    //       placeholder="Search by Name ...."
    //       style={{ borderRadius: 10, backgroundColor: "white", borderWidth: 1 }}
    //     />
    //   </View>
    //   {/* second box */}
    //   <View
    //     style={{
    //       height: hp(30),
    //       backgroundColor: "blue",
    //       justifyContent: "center",
    //       marginLeft: wp(2),
    //       width: wp(95),
    //       marginTop: hp(2),
    //     }}
    //   >
    //     <ScrollView horizontal={true} style={styles.container}>
    //       <View>
    //         <CustomButton
    //           onPress={() => navigation.navigate("Booking")}
    //           style={{
    //             width: 220,
    //             height: 70,
    //             padding: 10,
    //             height: hp(20),
    //             marginLeft: hp(1),
    //           }}
    //           title="bookNoew"
    //           titleColor={{ color: "pink" }}
    //         />

    //         {/* <Button
    //           //   onPress={this.onPressButton}
    //           title="Button 1"
    //           color="#FF3D00"
    //         /> */}
    //       </View>
    //       <View>
    //         <CustomButton
    //           onPress={() => navigation.navigate("ForgotPassword")}
    //           style={{
    //             width: 220,
    //             height: 70,
    //             padding: 10,
    //             height: hp(20),
    //             marginLeft: hp(1),
    //           }}
    //           title="bookNoew"
    //           titleColor={{ color: "pink" }}
    //         />

    //         {/* <Button
    //           //   onPress={this.onPressButton}
    //           title="Button 1"
    //           color="#FF3D00"
    //         /> */}
    //       </View>
    //       {/* <Text style={{ fontSize: 22, padding: 10 }}>javatpoint</Text>
    //       <View style={[{ width: 220, height: 70, padding: 10 }]}> */}

    //       <View>
    //         <CustomButton
    //           onPress={() => navigation.navigate("ForgotPassword")}
    //           style={{
    //             width: 220,
    //             height: 70,
    //             padding: 10,
    //             height: hp(20),
    //             marginLeft: hp(1),
    //           }}
    //           title="book2"
    //           titleColor={{ color: "pink" }}
    //         />

    //         {/* <Button
    //           //   onPress={this.onPressButton}
    //           title="Button 1"
    //           color="#FF3D00"
    //         /> */}
    //       </View>
    //       <View>
    //         <CustomButton
    //           onPress={() => navigation.navigate("ForgotPassword")}
    //           style={{
    //             width: 220,
    //             height: 70,
    //             padding: 10,
    //             height: hp(20),
    //             marginLeft: hp(1),
    //           }}
    //           title="book3"
    //           titleColor={{ color: "pink" }}
    //         />

    //         {/* <Button
    //           //   onPress={this.onPressButton}
    //           title="Button 1"
    //           color="#FF3D00"
    //         /> */}
    //       </View>
    //       <Text style={{ fontSize: 22, padding: 10 }}>If you like</Text>
    //       <View style={[{ width: 220, height: 70, padding: 10 }]}>
    //         <Button
    //           //   onPress={this.onPressButton}
    //           title="Button 4"
    //           color="#FF3DFF"
    //         />
    //       </View>
    //       <Text style={{ fontSize: 22, padding: 10 }}>
    //         Scrolling horizontal
    //       </Text>
    //       <View style={[{ width: 220, height: 70, padding: 10 }]}>
    //         <Button
    //           //   onPress={this.onPressButton}
    //           title="Button 5"
    //           color="#3DFF00"
    //         />
    //       </View>
    //     </ScrollView>
    //   </View>
    //   {/* third box */}

    //   <View
    //     style={{
    //       height: hp(30),
    //       backgroundColor: "blue",
    //       justifyContent: "center",
    //       marginLeft: wp(2),
    //       width: wp(95),
    //       marginTop: hp(2),
    //     }}
    //   >
    //     <ScrollView horizontal={true} style={styles.container}>
    //       <Text
    //         style={{
    //           fontSize: 22,
    //           padding: 10,
    //           height: hp(20),
    //           backgroundColor: "red",
    //         }}
    //       >
    //         Horizontal ScrollView
    //       </Text>
    //       <View>
    //         <CustomButton
    //           onPress={() => navigation.navigate("ForgotPassword")}
    //           style={{
    //             width: 220,
    //             height: 70,
    //             padding: 10,
    //             height: hp(20),
    //             marginLeft: hp(1),
    //           }}
    //           title="booksecondrow"
    //           titleColor={{ color: "pink" }}
    //         />

    //         {/* <Button
    //           //   onPress={this.onPressButton}
    //           title="Button 1"
    //           color="#FF3D00"
    //         /> */}
    //       </View>
    //       {/* <Text style={{ fontSize: 22, padding: 10 }}>javatpoint</Text>
    //       <View style={[{ width: 220, height: 70, padding: 10 }]}> */}

    //       <View>
    //         <CustomButton
    //           onPress={() => navigation.navigate("ForgotPassword")}
    //           style={{
    //             width: 220,
    //             height: 70,
    //             padding: 10,
    //             height: hp(20),
    //             marginLeft: hp(1),
    //           }}
    //           title="book2"
    //           titleColor={{ color: "pink" }}
    //         />

    //         {/* <Button
    //           //   onPress={this.onPressButton}
    //           title="Button 1"
    //           color="#FF3D00"
    //         /> */}
    //       </View>
    //       <View>
    //         <CustomButton
    //           onPress={() => navigation.navigate("ForgotPassword")}
    //           style={{
    //             width: 220,
    //             height: 70,
    //             padding: 10,
    //             height: hp(20),
    //             marginLeft: hp(1),
    //           }}
    //           title="book3"
    //           titleColor={{ color: "pink" }}
    //         />

    //         {/* <Button
    //           //   onPress={this.onPressButton}
    //           title="Button 1"
    //           color="#FF3D00"
    //         /> */}
    //       </View>
    //       <Text style={{ fontSize: 22, padding: 10 }}>If you like</Text>
    //       <View style={[{ width: 220, height: 70, padding: 10 }]}>
    //         <Button
    //           //   onPress={this.onPressButton}
    //           title="Button 4"
    //           color="#FF3DFF"
    //         />
    //       </View>
    //       <Text style={{ fontSize: 22, padding: 10 }}>
    //         Scrolling horizontal
    //       </Text>
    //       <View style={[{ width: 220, height: 70, padding: 10 }]}>
    //         <Button
    //           //   onPress={this.onPressButton}
    //           title="Button 5"
    //           color="#3DFF00"
    //         />
    //       </View>
    //     </ScrollView>
    //   </View>

    //   <View
    //     style={{
    //       height: hp(10),
    //       backgroundColor: "pink",
    //       justifyContent: "center",
    //       marginLeft: wp(2),
    //       width: wp(95),
    //     }}
    //   ></View>
    // </KeyboardAwareScrollView>
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
export default SelectBarber;

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
