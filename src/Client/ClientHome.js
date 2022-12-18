import React, { useState } from 'react';
import { ImageBackground,Icon,Platform, StyleSheet,  TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Text from '../components/CustomText'
import Snackbar from 'react-native-snackbar';
import ClientRegister from './ClientRegister';
import CustomButton from '../components/CustomButton';
import Clientforgetpassword from './Clientforgetpassword';


const ClientHome = () => {
    
    return (
    
    <KeyboardAwareScrollView style={{ height: hp(100),backgroundColor:'transparent' }} >

         
{/* first heading */}
<View style={{ height: hp(25), flexDirection:'row',backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
              
                
              <CustomButton
  
        
                style={{
               
                 
                   width: wp(55),
                   marginTop: wp(45),
                   marginBottom:hp(15),
                 fontWeight:'bold',
                   justifyContent: 'center',
                   alignItems: 'center',
                   height: hp(7),
                   alignSelf:'center',
                   backgroundColor:'transparent'
               
                   
               }}
               title="Don't have an account?"
               titleColor={{ color: "black" }}
           />
       
           <CustomButton

onPress={()=>navigation.navigate('ClientRegister')}
                style={{
                   marginBottom:hp(15),
                  
                   width: wp(20),
                   marginTop: wp(45),
                   borderRadius: wp(2),
                   justifyContent: 'center',
                   alignItems: 'center',
                   height: hp(7),
                   alignSelf:'center',
                   backgroundColor:'transparent'
               }}
               title="Signup"
               titleColor={{ color: "#2AAA8A" }}
           />
               </View>

{/* 


     {/* <View style={{ height: hp(20), backgroundColor: 'transparent'}}>


     <TextInput placeholder='Email'
         style={{ borderRadius: 20, borderWidth: 0.5, alignSelf: 'center', 
         marginTop: 12, width: '90%' }} />

     <TextInput 
        placeholder='Password'
        style={{ borderWidth: 0.5,borderRadius: 20, alignSelf: 'center',
         marginTop: 20, width: '90%' }} />

            
</View>

    <View style={{ height: hp(5) ,backgroundColor:'transparent'}}>
              
                
                   <CustomButton
                     onPress={()=>navigation.navigate('Clientforgetpassword')}
             
                     style={{
                    
                   backgroundColor:'transparent',
                        width: wp(50),
                        height:hp(5),
                        fontSize:hp(5),
                        fontWeight:'bold',
                        marginLeft:hp(25)
                 
                    
                        
                    }}
                    title="Forget Password?"
                    titleColor={{ color: "black" }}
                />
                </View>

              <View style={{ height: hp(10),    backgroundColor:'transparent',}}>
                
              <CustomButton
  onPress={() => navigation.navigate('ClientHome')}

                     style={{
                        borderRadius: 20, backgroundColor: '#2AAA8A', alignSelf: 'center',
         marginTop: 20, width: '90%' ,
         fontWeight:'bold'
                    }}
                    title="Login"
                    titleColor={{ color: "#FFF" }}
                />
           </View>
          

          {/* tibb */}
          <View style={{ height: hp(25), flexDirection:'row',backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
              
                
              <CustomButton
  
        
                style={{
               
                 
                   width: wp(55),
                   marginTop: wp(45),
                   marginBottom:hp(15),
                 fontWeight:'bold',
                   justifyContent: 'center',
                   alignItems: 'center',
                   height: hp(7),
                   alignSelf:'center',
                   backgroundColor:'transparent'
               
                   
               }}
               title="Don't have an account?"
               titleColor={{ color: "black" }}
           />
       
           <CustomButton

onPress={()=>navigation.navigate('ClientRegister')}
                style={{
                   marginBottom:hp(15),
                  
                   width: wp(20),
                   marginTop: wp(45),
                   borderRadius: wp(2),
                   justifyContent: 'center',
                   alignItems: 'center',
                   height: hp(7),
                   alignSelf:'center',
                   backgroundColor:'transparent'
               }}
               title="Signup"
               titleColor={{ color: "#2AAA8A" }}
           />
               </View> 
          {/* end */}

   
               
          
 

        </KeyboardAwareScrollView >


    )

}
export default ClientHome;






 


