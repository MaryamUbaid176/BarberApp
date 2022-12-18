import React, { Component, useEffect, useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Image ,TextInput} from 'react-native';
import LottieView from 'lottie-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Text from '../components/CustomText'
import Snackbar from 'react-native-snackbar';
import CustomButton from '../components/CustomButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import GetLocation from 'react-native-get-location';
import BarberLogin from './BarberLogin';

const BarberRegister = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Haircut', value: 'haircut'},
      {label: 'shave', value: 'shave'}
    ]);




    // useEffect=(()=>{
    //     GetLocation.getCurrentPosition({
    //         enableHighAccuracy: true,
    //         timeout: 15000,
    //     })
    //     .then(location => {
    //         console.log("location:: >> ", location);
    //     })
    //     .catch(error => {
    //         const { code, message } = error;
    //         console.warn(code, message);
    //     })
    // },[])
    return (
       


<KeyboardAwareScrollView style={{ height: hp(100) }} >

{/* first logo */}
<View style={{ height: hp(15), backgroundColor: 'rgba(0,0,0,0.05)', alignItems: 'center', justifyContent: 'center' }}>
    <LottieView
        style={{ height: wp(60), width: wp(60) }}
        source={require('../Assets/lottie/122850-office-chair.json')}
        autoPlay
        loop={false}
    />
</View>



 <View style={{ height: hp(5), backgroundColor: '#425747', justifyContent:'center'}}>
    <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', fontWeight: 'bold', fontFamily: 'KolkerBrush-Regular' }}>CREATE AN ACCOUNT</Text>
</View>

 <View style={{ height: hp(70), backgroundColor: '#425747', }}>

        <TextInput placeholder='Business name'
        style={{ borderRadius: 6, backgroundColor: 'lightgrey', alignSelf: 'center', marginTop: 12, width: '80%' }}
         />
        <TextInput 
        placeholder='Enter email' style={{

        borderRadius: 6, backgroundColor: 'lightgrey', alignSelf: 'center', marginTop: 20, width: '80%'
    }} /> 

<TextInput 
    placeholder='Enter password' style={{

        borderRadius: 6, backgroundColor: 'lightgrey', alignSelf: 'center', marginTop: 20, width: '80%'
    }} />
<TextInput 
    placeholder='Shop name' style={{

        borderRadius: 6, backgroundColor: 'lightgrey', alignSelf: 'center', marginTop: 20, width: '80%'
    }} />

<TextInput 
    placeholder='Shop name' style={{

        borderRadius: 6, backgroundColor: 'lightgrey', alignSelf: 'center', marginTop: 20, width: '80%'
    }} />


    </View>



{/* 
  <DropDownPicker
    multiple={true}
style={{width:''}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    /> */}
 

<CustomButton
 onPress={() => navigation.navigate('BarberLogin')}
                     style={{
                        backgroundColor: '#425747',
                        width: wp(90),
                        marginTop: wp(8),
                        borderRadius: wp(2),
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: hp(7),
                        alignSelf:'center',
                        backgroundColor:'grey'
                    }}
                    title="Register"
                    titleColor={{ color: "#FFF" }}
                />
   
   

{/* </View>  */}


</KeyboardAwareScrollView>

      
    )

}
export default BarberRegister;