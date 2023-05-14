import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import CustomButton from "../../../components/CustomButton";
import Text from "../../../components/CustomText";
import Auth from "../../../firebaseHooks/auth";
import styles from "./styles";
import { setUser } from "../../../redux/slices/userSlice";

const Login = (props) => {
  const dispatch = useDispatch();
  const [errMessage, setErrMessage] = useState("");

  const { handleLogin, isloading } = Auth();

  // console.log("called", props.route.params);

  //console.log("called in login up ", props.route.params);
  return (
    <KeyboardAwareScrollView style={styles.mainContainer}>
      {/* first heading */}
      <View style={styles.mainView}>
        <Text style={styles.maintextone}>Welcome Back!</Text>
        {/* second heading */}
        <Text style={styles.maintexttwo}>Please enter your account here</Text>
      </View>
      <View style={styles.viewinput}>
        <TextInput placeholder="Email" style={styles.textinput} />

        <TextInput placeholder="Password" style={styles.textinput} />
      </View>

      <CustomButton
        onPress={() => props.navigation.navigate("ForgotPassword")}
        style={styles.forgetView}
        title="Forget Password?"
        titleColor={{ color: "black" }}
      />

      <View style={{ height: hp(20), backgroundColor: "transparent" }}>
        <Text style={{ color: "red" }}>{errMessage}</Text>
        <CustomButton
          onPress={() => {
            // let data = {
            //   email: "nasr@gmail",
            //   name: "Nasr",
            //   userId: 123,
            // };

            // dispatch(setUser(data));

            // handleLogin(Email, pass, (error) => {
            handleLogin("nasr@gmail.com", "Test123#", (error) => {
              if (error) {
                console.log("error:::::: ", error);
                if (error.code === "auth/user-not-found") {
                  setErrMessage("No user found with this email");
                }
                if (error.code === "auth/wrong-password") {
                  setErrMessage("Email or password is incorrent");
                }
                if (error.code === "auth/invalid-email") {
                  setErrMessage("That email address is invalid!");
                }
              } else {
                console.log("res...>> ", res);
              }
            });
          }}
          style={styles.btn}
          title="Login"
        />
      </View>

      {/* tibb */}
      <View style={styles.donthaveaccountView}>
        <CustomButton
          onPress={() => props.navigation.navigate("ForgotPassword")}
          style={styles.btnone}
          title="Don't have an account?"
          titleColor={{ color: "black" }}
        />

        <CustomButton
          onPress={() =>
            props.navigation.navigate("SignUp", {
              type: props?.route?.params?.type,
            })
          }
          style={styles.btntwo}
          title="Signup"
          titleColor={{ color: "#2AAA8A" }}
        />
      </View>
      {/* end */}
    </KeyboardAwareScrollView>
  );
};
export default Login;

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
