import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const AddProduct = ({ navigation }) => {
  return (
    <View style={{ height: hp(100), backgroundColor: "red" }}>
      <View style={{ height: hp(10), backgroundColor: "#D3D3D3" }}>
        <Text style={styles.header}> AddProduct</Text>
      </View>

      <View style={{ height: hp(30), backgroundColor: "yellow" }}></View>

      <View style={{ height: hp(50), backgroundColor: "white" }}>
        <View style={styles.container}>
          <TextInput style={styles.input} placeholder="Product Name" />
          {/* // left={<TextInput.Icon name="account" />} */}

          <TextInput style={styles.input} placeholder="Product Price" />
          <TextInput
            style={styles.input}
            placeholder="Product Detail"
            multiline={true}
            maxLength={40}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Mystore")}
            style={{
              backgroundColor: "#D3D3D3",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              width: hp(40),
              height: hp(5),
              justifyContent: "center",
              marginLeft: hp(7),
              borderRadius: hp(2),
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  header: {
    Color: "#000000",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginTop: 5,
  },
});

export default AddProduct;
