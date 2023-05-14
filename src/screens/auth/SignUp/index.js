import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomButton from "../../../components/CustomButton";
import Text from "../../../components/CustomText";

import Snackbar from "react-native-snackbar";
import Auth from "../../../firebaseHooks/auth";
import styles from "./styles";
import { hp, wp } from "../../../util";

const SignUp = (props) => {
  const [Email, setEmail] = useState("nasr@gmail.com");
  const [pass, setPass] = useState("Test123#");
  const [Name, setName] = useState("Nasr");
  const [PhoneNo, setPhoneNo] = useState("1234567");

  const [errMessage, setErrMessage] = useState("");
  const { handleSignup, isloading } = Auth();
  //console.log("calledddd", types);
  console.log("called in login up ", props.route.params);
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
      </View>

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
              handleSignup(
                Email,
                pass,
                Name,
                PhoneNo,
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

{
  /* <KeyboardAwareScrollView style={{ height: hp(100), borderBottomLeftRadius:hp(30) }} > */
}

{
  /* first logo */
}
{
  /* <View style={{ height: hp(25), backgroundColor: 'rgba(0,0,0,0.05)', alignItems: 'center', justifyContent: 'center' }}>

    <LottieView
        style={{ height: wp(60), width: wp(60) }}
        source={require('../Assets/lottie/122850-office-chair.json')}
        autoPlay
        loop={false}
    />

</View > */
}

{
  /* <View style={{ height: hp(10), backgroundColor: '#425747', justifyContent:'center',borderTopRightRadius:hp(5),borderTopLeftRadius:hp(5)}}>
    <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', fontWeight: 'bold', fontFamily: 'KolkerBrush-Regular' }}>SIGN IN</Text>
</View>
<View style={{ height: hp(45), backgroundColor: '#425747',borderBottomLeftRadius:hp(5),borderBottomRightRadius:hp(5) }}>



<TextInput placeholder='Enter email'

style={{ borderRadius: 6, backgroundColor: 'lightgrey', alignSelf: 'center', 
marginTop: 12, width: '90%' }} />


  
    <TextInput 
    placeholder='Enter Password'
    style={{

        borderRadius: 6, backgroundColor: 'lightgrey', alignSelf: 'center', marginTop: 20, width: '90%'
    }} />

    <TouchableOpacity
        style={{ marginLeft: 20, borderRadius: 10, backgroundColor: 'grey', marginTop: 20, color: 'black', height: hp(8), width: '90%', alignItems: 'center', justifyContent: 'center' }} >
        <Text style={{ color: 'white' }}>SIGN IN</Text>
    </TouchableOpacity>


    <View style={{ height: hp(20), flexDirection:'row',backgroundColor: 'rgba(0,0,0,0.05)', alignItems: 'center', justifyContent: 'center' }}>
  
    
       <CustomButton
         onPress={()=>props.navigation.navigate('ForgotPassword')}
 
         style={{
        
          
            width: wp(60),
            marginTop: wp(5),
            marginBottom:hp(15),
            borderRadius: wp(2),
            justifyContent: 'center',
            alignItems: 'center',
            height: hp(7),
            alignSelf:'center',
            backgroundColor:'transparent'
        
            
        }}
        title="create an account"
        titleColor={{ color: "#FFF" }}
    />

    <CustomButton
     onPress={()=>props.navigation.navigate('ForgotPassword')}
         style={{
            marginBottom:hp(15),
           
            width: wp(50),
            marginTop: wp(5),
            borderRadius: wp(2),
            justifyContent: 'center',
            alignItems: 'center',
            height: hp(7),
            alignSelf:'center',
            backgroundColor:'transparent'
        }}
        title="forget password!"
        titleColor={{ color: "#FFF" }}
    />
        </View>
 

</View>


</KeyboardAwareScrollView >
 */
}
