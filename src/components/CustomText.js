import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomText = ({ children, style }) => {
    const styles = StyleSheet.create({
        mainContainer: {
            backgroundColor: 'red',
            width: wp(30),
            borderRadius: wp(2),
            justifyContent: 'center',
            alignItems: 'center',
            height: hp(7)
        },

        myText: {
            color: '#000', fontSize: wp('5%') // End result looks like the provided UI mockup
        }
    });

    return (
        <Text style={[styles.myText, style]}>{children}</Text>
    )

}
export default CustomText;