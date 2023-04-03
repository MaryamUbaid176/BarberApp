import React from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { JumpingTransition } from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/slices/userSlice";
const Mystore = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={{ height: hp(100), backgroundColor: "tranparent" }}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.imgView} />

        <Text style={styles.titleText}>Maryam</Text>
        <Text style={styles.titleText}>Maryam@gmail.com</Text>
      </View>

      <TouchableOpacity
        onPress={() => dispatch(logOut())}
        style={styles.logOutBtn}
      >
        <Text style={{ marginTop: hp(3), fontWeight: "bold" }}>Logout</Text>
      </TouchableOpacity>
      {/* <View style={{ height: wp(20), backgroundColor: "green" }}>
        <TouchableOpacity onPress={() => navigation.navigate("AddProduct")}>
          <Text style={{ height: wp(20), backgroundColor: "grey" }}>store</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AddProduct")}>
          <Image
            style={{
              marginBottom: hp(15),

              width: wp(20),
              marginTop: wp(45),
              borderRadius: wp(2),
              justifyContent: "center",
              alignItems: "center",
              height: hp(7),
              alignSelf: "center",
              backgroundColor: "transparent",
            }}
            source={{
              uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
            }}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Mystore;

const styles = StyleSheet.create({
  mainView: {
    height: hp(100),
  },
  headerText: {
    fontSize: wp(5),
    fontWeight: "bold",
    padding: wp(5),
    color: "black",
  },
  titleText: {
    alignSelf: "center",
    color: "darkblue",
  },
  imgView: {
    height: wp(35),
    width: wp(35),
    borderWidth: 0.5,
    borderRadius: wp(40),
    backgroundColor: "lightgrey",
    alignSelf: "center",
    marginVertical: hp(5),
  },
  logOutBtn: {
    height: hp(20),
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
    // justifyContent: "center",
  },
});
