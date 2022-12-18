import React, {useEffect} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
const SplashScreen = props => {
  useEffect(() => {
    setInterval(() => {
      props.navigation.navigate('SelectUser');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LottieView
        style={{flex: 1}}
        source={require('../../../Assets/lottie/122850-office-chair.json')}
        autoPlay
        loop
      />
    </View>
  );
};
export default SplashScreen;
