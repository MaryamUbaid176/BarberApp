import React, {useState} from 'react';
import {
  ImageBackground,
  Icon,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Text from '../components/CustomText';
import Snackbar from 'react-native-snackbar';
import ClientRegister from './ClientRegister';
import CustomButton from '../components/CustomButton';

const Clientforgetpassword = ({navigation}) => {
  return (
    <KeyboardAwareScrollView
      style={{height: hp(100), borderBottomLeftRadius: hp(30)}}>
      {/* first logo */}
      <View
        style={{
          height: hp(20),
          backgroundColor: '',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LottieView
          style={{height: wp(30), width: wp(60)}}
          source={require('../Assets/lottie/92867-email-sent.json')}
          autoPlay
          loop={false}
        />
      </View>

      <View
        style={{
          height: hp(20),
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
          Forget Password
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
          Please enter your phone number here
        </Text>
      </View>

      <View style={{height: hp(40), backgroundColor: 'transparent'}}>
        <TextInput
          placeholder="Email or phone number"
          style={{
            // placeholderTextColor: 'green',
            underlineColorAndroid: 'grey',
            borderWidth: 0.5,

            borderRadius: 20,
            alignSelf: 'center',
            marginTop: hp(10),
            width: '90%',
          }}
        />
      </View>
      <View style={{height: hp(10), backgroundColor: 'transparent'}}>
        <CustomButton
          onPress={() => navigation.navigate('ClientHome')}
          style={{
            borderRadius: 20,
            backgroundColor: '#2AAA8A',
            alignSelf: 'center',
            marginTop: 20,
            width: '90%',
            fontWeight: 'bold',
          }}
          title="Get Code"
          titleColor={{color: '#FFF'}}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Clientforgetpassword;
