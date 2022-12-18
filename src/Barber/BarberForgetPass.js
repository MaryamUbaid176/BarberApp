import React, { useState } from 'react';
import { ImageBackground,Icon,Platform, StyleSheet,  TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Text from '../components/CustomText'
import Snackbar from 'react-native-snackbar';

import CustomButton from '../components/CustomButton';

const Barberforgetpass = ({ navigation }) => {
    
    return (
    
        <KeyboardAwareScrollView style={{ height: hp(100), borderBottomLeftRadius:hp(30) }} >

            {/* first logo */}
            <View style={{ height: hp(25), backgroundColor: 'rgba(0,0,0,0.05)', alignItems: 'center', justifyContent: 'center' }}>
           
                <LottieView
                    style={{ height: wp(60), width: wp(60) }}
                    source={require('../Assets/lottie/122850-office-chair.json')}
                    autoPlay
                    loop={false}
                />
            
            </View >
            



            <View style={{ height: hp(10), backgroundColor: '#425747', justifyContent:'center',borderTopRightRadius:hp(5),borderTopLeftRadius:hp(5)}}>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold', fontFamily: 'KolkerBrush-Regular' }}>Enter Email</Text>
            </View>
            <View style={{ height: hp(35), backgroundColor: '#425747',borderBottomLeftRadius:hp(5),borderBottomRightRadius:hp(5) }}>



         <TextInput placeholder='Enter email'
 
         style={{ borderRadius: 6, backgroundColor: 'lightgrey', alignSelf: 'center', 
         marginTop: 12, width: '90%' }} />


              
              

                <TouchableOpacity
                    style={{ marginLeft: hp(40), borderRadius: 10, backgroundColor: 'grey', marginTop: 20, color: 'black', height: hp(8), width: '20%', alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ color: 'white' }}>Send</Text>
                </TouchableOpacity>


             
                  
             

            </View>


        </KeyboardAwareScrollView >


    )

}
export default Barberforgetpass;