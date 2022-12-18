import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Text from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import Login from '../Login';
const SelectUser = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: hp(50), backgroundColor: 'rgba(0,0,0,0.05)'}}>
        <Text
          style={{
            fontFamily: 'italic',
            top: 50,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: wp(8),
            color: '#2AAA8A',
            fontWeight: 'bold',
          }}>
          BARBERIA
        </Text>

        <LottieView
          style={{flex: 1}}
          // source={require('./Assets/lottie/122850-office-chair.json')}
          source={require('../../../Assets/lottie/88425-multiple-spinning-dotted-rings-loading.json')}
          autoPlay
          loop
        />
      </View>

      <View
        style={{
          flex: 1,
          height: hp(30),
          borderTopRightRadius: hp(10),
          borderTopLeftRadius: hp(10),
        }}>
        <CustomButton
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
          style={{
            backgroundColor: '#2AAA8A',
            width: wp(90),
            marginTop: wp(10),
            borderRadius: wp(2),
            justifyContent: 'center',
            alignItems: 'center',
            height: hp(7),
            alignSelf: 'center',
            borderTopRadius: hp(20),
          }}
          title="As a  User"
          titleColor={{color: '#FFF'}}
        />
        <CustomButton
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
          style={{
            backgroundColor: '#2AAA8A',
            width: wp(90),
            marginTop: wp(5),
            borderRadius: wp(2),
            justifyContent: 'center',
            alignItems: 'center',
            height: hp(7),
            alignSelf: 'center',
          }}
          title="As a  Barber"
          titleColor={{color: '#FFF'}}
        />
      </View>
    </View>
  );
};
export default SelectUser;
