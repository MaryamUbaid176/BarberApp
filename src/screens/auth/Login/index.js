import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Text from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';

const Login = ({navigation}) => {
  return (
    <KeyboardAwareScrollView
      style={{height: hp(100), backgroundColor: 'transparent'}}>
      {/* first heading */}
      <View
        style={{
          height: hp(40),
          backgroundColor: 'transparent',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: hp(4),
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'KolkerBrush-Regular',
          }}>
          Welcome Back!
        </Text>
        {/* second heading */}
        <Text
          style={{
            fontSize: wp(3),
            marginTop: hp(2),
            color: 'grey',
            textAlign: 'center',
            fontWeight: '200',
            fontFamily: 'KolkerBrush-Regular',
          }}>
          Please enter your account here
        </Text>
      </View>
      <View style={{height: hp(20), backgroundColor: 'transparent'}}>
        <TextInput
          placeholder="Email"
          style={{
            borderRadius: 20,
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 12,
            width: '90%',
          }}
        />

        <TextInput
          placeholder="Password"
          style={{
            borderWidth: 0.5,
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 20,
            width: '90%',
          }}
        />
      </View>

      <View style={{height: hp(5), backgroundColor: 'transparent'}}>
        <CustomButton
          onPress={() => navigation.navigate('Clientforgetpassword')}
          style={{
            backgroundColor: 'transparent',
            width: wp(50),
            height: hp(5),
            fontSize: hp(5),
            fontWeight: 'bold',
            marginLeft: hp(25),
          }}
          title="Forget Password?"
          titleColor={{color: 'black'}}
        />
      </View>

      <View style={{height: hp(10), backgroundColor: 'transparent'}}>
        <CustomButton
          onPress={() => navigation.navigate('BCreateProfile')}
          style={{
            borderRadius: 20,
            backgroundColor: '#2AAA8A',
            alignSelf: 'center',
            marginTop: 20,
            width: '90%',
            fontWeight: 'bold',
          }}
          title="Login"
          titleColor={{color: '#FFF'}}
        />
      </View>

      {/* tibb */}
      <View
        style={{
          height: hp(25),
          flexDirection: 'row',
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomButton
          onPress={() => navigation.navigate('BarberRegister')}
          style={{
            width: wp(55),
            marginTop: wp(45),
            marginBottom: hp(15),
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
            height: hp(7),
            alignSelf: 'center',
            backgroundColor: 'transparent',
          }}
          title="Don't have an account?"
          titleColor={{color: 'black'}}
        />

        <CustomButton
          onPress={() => navigation.navigate('ClientRegister')}
          style={{
            marginBottom: hp(15),

            width: wp(20),
            marginTop: wp(45),
            borderRadius: wp(2),
            justifyContent: 'center',
            alignItems: 'center',
            height: hp(7),
            alignSelf: 'center',
            backgroundColor: 'transparent',
          }}
          title="Signup"
          titleColor={{color: '#2AAA8A'}}
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
         onPress={()=>navigation.navigate('ClientRegister')}
 
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
     onPress={()=>navigation.navigate('Clientforgetpassword')}
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
