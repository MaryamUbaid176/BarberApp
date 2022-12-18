import React, { Component } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Image ,TextInput} from 'react-native';
import LottieView from 'lottie-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Text from '../components/CustomText'
import Snackbar from 'react-native-snackbar';
import CustomButton from '../components/CustomButton';
import ClientLogin from './ClientLogin';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ClientRegister = ({ navigation }) => {
    return (
       

<KeyboardAwareScrollView style={{ height: hp(100) }} >

<View style={{ height: hp(15), backgroundColor: 'transparent', justifyContent:'center'}}>
                <Text style={{ fontSize: hp(4), color: 'black', textAlign: 'center', fontWeight: 'bold', fontFamily: 'KolkerBrush-Regular' }}>Welcome</Text>
{/* second heading */}
                <Text style={{ fontSize: wp(3),marginTop:hp(2), color: 'grey', textAlign: 'center', fontWeight:'200', fontFamily: 'KolkerBrush-Regular' }}>Please enter your account here</Text>
     </View>

{/* first logo */}
<View style={{ height: hp(70), backgroundColor:'transparent', alignItems: 'center', justifyContent: 'center' }}>
   
<TextInput placeholder='First Name'
        style={{ borderWidth: 0.5,borderRadius:20, alignSelf: 'center', marginTop: 12, width: '90%' }}
         />
 <TextInput 
        placeholder='Last Name' style={{
            borderWidth: 0.5,borderRadius:20,  alignSelf: 'center',
         marginTop: 20, width: '90%'
    }} />

<TextInput 
    placeholder='Email' style={{

        borderWidth: 0.5,borderRadius:20,
         alignSelf: 'center', marginTop: 20, width: '90%'
    }} />

<TextInput 
    placeholder='password' style={{

        borderRadius:20, borderWidth: 0.5,
         alignSelf: 'center', marginTop: 20, width: '90%'
    }} />
    <TextInput 
    placeholder='Confirm password' style={{

        borderRadius:20,borderWidth: 0.5,
         alignSelf: 'center', marginTop: 20, width: '90%'
    }} />
      <TextInput 
    placeholder='Address' style={{

        borderRadius:20, borderWidth: 0.5,
         alignSelf: 'center', marginTop: 20, width: '90%'
    }} />
      <TextInput 
    placeholder='Phone Number' style={{

        borderRadius:20, borderWidth: 0.5,
         alignSelf: 'center', marginTop: 20, width: '90%'
    }} />

</View>



<View style={{ height: hp(10),    backgroundColor:'transparent',}}>
                
                <CustomButton
    onPress={() => navigation.navigate('ClientLogin')}
 style={{
        borderRadius: hp(20), backgroundColor: '#2AAA8A',
         alignSelf: 'center',marginTop: 10, width: '90%' ,
        fontWeight:'bold' }}
        title="Register"
        titleColor={{ color: "#FFF" }}
                  />
             </View>

             <View style={{ height: hp(10), flexDirection:'row',backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
              
                
              <CustomButton
 style={{width: wp(65),
        fontWeight:'bold',
        height: hp(7),
        alignSelf:'center',
        backgroundColor:'transparent'
        }}
               title="Already have an account?"
               titleColor={{ color: "black" }}
           />
       
           <CustomButton

onPress={()=>navigation.navigate('ClientLogin')}
style={{
               
                 
    width: wp(20),
 
    marginBottom:hp(0),
  fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(7),
    alignSelf:'center',
    backgroundColor:'transparent'

    
}}
               title="Sign In"
               titleColor={{ color: "#2AAA8A" }}
           />
               </View>
   
   




</KeyboardAwareScrollView>

      
    )

}
export default ClientRegister;