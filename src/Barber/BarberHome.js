import React, { useState } from 'react';
import { ImageBackground,Icon,Platform, StyleSheet,  TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Text from '../components/CustomText';
import CustomButton from '../components/CustomButton';




const BarberHome = ({navigation}) => {
    
    return (
    
    <KeyboardAwareScrollView style={{ height: hp(100),backgroundColor:'transparent' }} >

         
{/* first heading */}
    <View style={{ height: hp(80), backgroundColor: 'transparent',alignSelf:'center'}}>
             
    <LottieView
                    style={{ height: wp(80), width: wp(90) }}
                    source={require('../Assets/lottie/92867-email-sent.json')}
                    autoPlay
                    loop={false}
                />
     </View>

     <View style={{ height: hp(10),    backgroundColor:'transparent',}}>
                
                <CustomButton
   
   onPress={() => navigation.navigate('BarberLogin')}
                       style={{
                          borderRadius: 20, backgroundColor: '#2AAA8A', alignSelf: 'center',
           marginTop: 20, width: '90%' ,
           fontWeight:'bold'
                      }}
                      title="Get Started"
                      titleColor={{ color: "#FFF" }}
                  />
             </View>
  

        </KeyboardAwareScrollView >


    )

}
export default BarberHome;




