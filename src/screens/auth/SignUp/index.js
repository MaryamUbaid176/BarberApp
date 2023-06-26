import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomButton from "../../../components/CustomButton";
import Text from "../../../components/CustomText";

import Snackbar from "react-native-snackbar";
import Auth from "../../../firebaseHooks/auth";
import styles from "./styles";
import { hp, wp } from "../../../util";
import DropDownPicker from "react-native-dropdown-picker";

const SignUp = (props) => {
  const [Email, setEmail] = useState("nasr@gmail.com");
  const [pass, setPass] = useState("Test123#");
  const [Name, setName] = useState("Nasr");
  const [PhoneNo, setPhoneNo] = useState("1234567");
  // const [ShopName, setShopName] = useState("almirahh");
  const [errMessage, setErrMessage] = useState("");
  const { barberHandleSignup, handleSignup, getAllServices, isloading } =
    Auth();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllServices((services) => {
      let temp = [];
      services.item.map((item) => {
        let data = { label: item, value: item };
        temp.push(data);
      });
      setItems(temp);
    });
  }, []);

  return (
    <KeyboardAwareScrollView style={styles.mainContainer}>
      <View style={styles.mainView}>
        <Text style={styles.maintextone}>Welcome Back!</Text>

        <Text style={styles.maintexttwo}>Please create your account here</Text>
      </View>
      <View style={{ backgroundColor: "transparent" }}>
        <TextInput
          placeholder="Email"
          onChangeText={(e) => setEmail(e)}
          style={styles.textinput}
        />

        <TextInput
          placeholder="Password"
          onChangeText={(e) => setPass(e)}
          style={styles.textinput}
        />

        <TextInput
          placeholder="Enter Name"
          onChangeText={(e) => setName(e)}
          style={styles.textinput}
        />

        <TextInput
          placeholder="Phone No"
          onChangeText={(e) => setPhoneNo(e)}
          style={styles.textinput}
        />
        {/* <TextInput
          placeholder="Shop Name"
          onChangeText={(e) => setShopName(e)}
          style={styles.textinput}
        /> */}
      </View>
      {props.route.params.type == "barber" && (
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          theme="DARK"
          multiple={true}
          mode="BADGE"
          containerStyle={{ width: wp(90), alignSelf: "center" }}
          style={styles.DropDownPicker}
        />
      )}
      <View style={{ backgroundColor: "transparent" }}>
        <CustomButton
          onPress={() => {
            if (!Email) {
              Snackbar.show({
                text: "Please enter email ",
                duration: Snackbar.LENGTH_SHORT,
              });
            } else if (!pass) {
              Snackbar.show({
                text: "Please enter password ",
                duration: Snackbar.LENGTH_SHORT,
              });
            } else if (!Name) {
              Snackbar.show({
                text: "Please enter Name ",
                duration: Snackbar.LENGTH_SHORT,
              });
            } else if (!PhoneNo) {
              Snackbar.show({
                text: "Please enter PhoneNo",
                duration: Snackbar.LENGTH_SHORT,
              });
            } else {
              if (props.route.params.type == "user") {
                handleSignup(
                  Email,
                  pass,
                  Name,
                  PhoneNo,
                  // ShopName,
                  props.route.params.type,

                  (error) => {
                    if (error) {
                      console.log("error:::::: ", error);
                      if (error.code === "auth/email-already-in-use") {
                        setErrMessage("Email address is already in use!");
                      }
                      if (error.code === "auth/invalid-email") {
                        setErrMessage("That email address is invalid!");
                      }
                    }
                  }
                );
              } else {
                let services = value;
                barberHandleSignup(
                  Email,
                  pass,
                  Name,
                  PhoneNo,
                  // ShopName,
                  props.route.params.type,
                  services,
                  (error) => {
                    if (error) {
                      console.log("error:::::: ", error);
                      if (error.code === "auth/email-already-in-use") {
                        setErrMessage("Email address is already in use!");
                      }
                      if (error.code === "auth/invalid-email") {
                        setErrMessage("That email address is invalid!");
                      }
                    }
                  }
                );
              }
            }
            // props.navigation.navigate("ForgotPassword")
          }}
          style={styles.btn}
          loading={isloading}
          title="SignUp"
          titleColor={{ color: "#FFF" }}
        />
      </View>

      <Text
        style={{
          color: "red",
          marginLeft: hp(5),
          fontSize: hp(2),
        }}
      >
        {errMessage}
      </Text>
      <View style={styles.donthaveaccountView}>
        <CustomButton
          // onPress={() => props.navigation.navigate("SignUp")}
          style={styles.btnone}
          title="Don't have an account?"
          titleColor={{ color: "black" }}
        />

        <CustomButton
          onPress={() => {
            props.navigation.goBack();
          }}
          style={styles.btntwo}
          title="Sign In"
          // onPress={() => props.navigation.navigate("SignUp")}
          titleColor={{ color: "#2AAA8A" }}
        />
      </View>
      {/* end */}
    </KeyboardAwareScrollView>
  );
};
export default SignUp;
