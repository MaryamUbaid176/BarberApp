import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const CustomButton = (props) => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "red",
      width: wp(30),
      borderRadius: wp(2),
      justifyContent: "center",
      alignItems: "center",
      height: hp(7),
    },

    myText: {
      fontSize: wp("5%"), // End result looks like the provided UI mockup
    },
  });

  return (
    <TouchableOpacity
      disabled={props.loading}
      onPress={props.onPress}
      style={[styles.mainContainer, props.style]}
    >
      {props.loading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <Text style={[styles.myText, props.titleColor]}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;
