import React, { useState } from "react";
import { View, TextInput, ScrollView, StyleSheet, Button } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Text from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import SelectBarber from "../SelectBarber";

const Booking = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView
      style={{ height: hp(100), backgroundColor: "grey" }}
    >
      <KeyboardAwareScrollView
        style={{ height: hp(100), backgroundColor: "transparent" }}
      >
        {/* first heading */}
        <View
          style={{
            height: hp(10),
            backgroundColor: "transparent",
            justifyContent: "center",
            marginLeft: wp(2),
            width: wp(95),
          }}
        >
          <TextInput
            placeholder="Search by Name ...."
            style={{
              borderRadius: 10,
              backgroundColor: "white",
              borderWidth: 1,
            }}
          />
        </View>
        {/* second box */}
        <View
          style={{
            height: hp(30),
            backgroundColor: "blue",
            justifyContent: "center",
            marginLeft: wp(2),
            width: wp(95),
            marginTop: hp(2),
          }}
        >
          <ScrollView horizontal={true} style={styles.container}>
            <View>
              <CustomButton
                onPress={() => navigation.navigate("Booking")}
                style={{
                  width: 220,
                  height: 70,
                  padding: 10,
                  height: hp(20),
                  marginLeft: hp(1),
                }}
                title="bookNoew"
                titleColor={{ color: "pink" }}
              />

              {/* <Button
              //   onPress={this.onPressButton}
              title="Button 1"
              color="#FF3D00"
            /> */}
            </View>
            <View>
              <CustomButton
                onPress={() => navigation.navigate("ForgotPassword")}
                style={{
                  width: 220,
                  height: 70,
                  padding: 10,
                  height: hp(20),
                  marginLeft: hp(1),
                }}
                title="bookNoew"
                titleColor={{ color: "pink" }}
              />

              {/* <Button
              //   onPress={this.onPressButton}
              title="Button 1"
              color="#FF3D00"
            /> */}
            </View>
            {/* <Text style={{ fontSize: 22, padding: 10 }}>javatpoint</Text>
          <View style={[{ width: 220, height: 70, padding: 10 }]}> */}

            <View>
              <CustomButton
                onPress={() => navigation.navigate("ForgotPassword")}
                style={{
                  width: 220,
                  height: 70,
                  padding: 10,
                  height: hp(20),
                  marginLeft: hp(1),
                }}
                title="book2"
                titleColor={{ color: "pink" }}
              />

              {/* <Button
              //   onPress={this.onPressButton}
              title="Button 1"
              color="#FF3D00"
            /> */}
            </View>
            <View>
              <CustomButton
                onPress={() => navigation.navigate("ForgotPassword")}
                style={{
                  width: 220,
                  height: 70,
                  padding: 10,
                  height: hp(20),
                  marginLeft: hp(1),
                }}
                title="book3"
                titleColor={{ color: "pink" }}
              />

              {/* <Button
              //   onPress={this.onPressButton}
              title="Button 1"
              color="#FF3D00"
            /> */}
            </View>
            <Text style={{ fontSize: 22, padding: 10 }}>If you like</Text>
            <View style={[{ width: 220, height: 70, padding: 10 }]}>
              <Button
                //   onPress={this.onPressButton}
                title="Button 4"
                color="#FF3DFF"
              />
            </View>
            <Text style={{ fontSize: 22, padding: 10 }}>
              Scrolling horizontal
            </Text>
            <View style={[{ width: 220, height: 70, padding: 10 }]}>
              <Button
                //   onPress={this.onPressButton}
                title="Button 5"
                color="#3DFF00"
              />
            </View>
          </ScrollView>
        </View>
        {/* third box */}

        <View
          style={{
            height: hp(30),
            backgroundColor: "blue",
            justifyContent: "center",
            marginLeft: wp(2),
            width: wp(95),
            marginTop: hp(2),
          }}
        >
          <ScrollView horizontal={true} style={styles.container}>
            <Text
              style={{
                fontSize: 22,
                padding: 10,
                height: hp(20),
                backgroundColor: "red",
              }}
            >
              Horizontal ScrollView
            </Text>
            <View>
              <CustomButton
                onPress={() => navigation.navigate("ForgotPassword")}
                style={{
                  width: 220,
                  height: 70,
                  padding: 10,
                  height: hp(20),
                  marginLeft: hp(1),
                }}
                title="booksecondrow"
                titleColor={{ color: "pink" }}
              />

              {/* <Button
              //   onPress={this.onPressButton}
              title="Button 1"
              color="#FF3D00"
            /> */}
            </View>
            {/* <Text style={{ fontSize: 22, padding: 10 }}>javatpoint</Text>
          <View style={[{ width: 220, height: 70, padding: 10 }]}> */}

            <View>
              <CustomButton
                onPress={() => navigation.navigate("ForgotPassword")}
                style={{
                  width: 220,
                  height: 70,
                  padding: 10,
                  height: hp(20),
                  marginLeft: hp(1),
                }}
                title="book2"
                titleColor={{ color: "pink" }}
              />

              {/* <Button
/
              color="#FF3D00"
            /> */}
            </View>
            <Text style={{ fontSize: 22, padding: 10 }}>If you like</Text>
            <View style={[{ width: 220, height: 70, padding: 10 }]}>
              <Button
                //   onPress={this.onPressButton}
                title="Button 4"
                color="#FF3DFF"
              />
            </View>
            <Text style={{ fontSize: 22, padding: 10 }}>
              Scrolling horizontal
            </Text>
            <View style={[{ width: 220, height: 70, padding: 10 }]}>
              <Button
                //   onPress={this.onPressButton}
                title="Button 5"
                color="#3DFF00"
              />
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            height: hp(10),
            backgroundColor: "pink",
            justifyContent: "center",
            marginLeft: wp(2),
            width: wp(95),
          }}
        ></View>
      </KeyboardAwareScrollView>
    </KeyboardAwareScrollView>
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
