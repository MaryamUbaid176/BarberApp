import auth from '@react-native-firebase/auth';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {useDispatch, useSelector} from 'react-redux';
import {
  setUser,
  updatePinPasscode,
  updateUser,
  updateUserImage,
} from '../redux/slices/userSlice';
import Storage from './storage';

const Auth = () => {
  const {uploadImage} = Storage();
  const userData = useSelector(state => state.user.userData);

  const [isloading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (phone, password, callbackFunction) => {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(phone, password)
      .then(res => {
        let data = {
          email: res.user.providerData[0].email,
          name: '',
          userId: res.user.uid,
        };

        dispatch(setUser(data));
      })
      .catch(error => {
        callbackFunction(error);
        setIsLoading(false);
      });
  };
  const handleSignup = async (
    phone,
    password,
    fullname,
    number,
    currencyCode,
    profileImage,
    country,
    callbackFunction,
  ) => {
    setErrMessage('');
    setIsLoading(true);

    auth()
      .createUserWithEmailAndPassword(phone, password)
      .then(res => {
        console.log('profileImage', profileImage);
        console.log('country', country);
        if (profileImage != null) {
          let storagePath = 'user/';
          uploadImage(
            profileImage,
            storagePath,
            onSuccess => {
              if (onSuccess) {
                let data = {
                  email: phone.toLowerCase(),
                  name: fullname,
                  phone: number,
                  currency: currencyCode,
                  userId: res?.user?.uid,
                  profileImage: onSuccess,
                  country: country,
                  enablePasscode: false,
                  passcode: '',
                };
                dispatch(setUser(data));
                firestore().collection('Users').doc(res?.user?.uid).set(data);
                firebase.auth().currentUser.updateProfile(data);
              }
            },
            imgProgress => {
              console.log('imgProgress', imgProgress);
            },
          );
        } else {
          console.log('User account created & signed in! ', res);
          let data = {
            email: phone,
            name: fullname,
            phone: number,
            currency: currencyCode,
            userId: res?.user?.uid,
            profileImage: '',
            country: country,
            enablePasscode: false,
            passcode: '',
          };
          dispatch(setUser(data));
          firestore().collection('Users').doc(res?.user?.uid).set(data);
          firebase.auth().currentUser.updateProfile(data);
          // verifyPhoneNumber(phone);
        }
      })
      .catch(error => {
        callbackFunction(error);
        setIsLoading(false);
        console.error('error: ', error);
      });
  };
  async function verifyPhoneNumber(phoneNumber) {
    const confirmation = await auth().verifyPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }
  const handleForgotPassword = async (email, callbackFunction) => {
    setErrMessage('');
    setIsLoading(true);
    console.log('email', email);
    auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        navigation.goBack();
        Snackbar.show({
          text: 'Recovery link has been sent to email',
          duration: Snackbar.LENGTH_SHORT,
        });
      })
      .catch(function (error) {
        callbackFunction(error);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  const updateProfileImage = async (image, callbackFunction) => {
    firestore()
      .collection('Users')
      .doc(userData.userId)
      .update({
        profileImage: image,
      })
      .then(() => {
        dispatch(updateUserImage(image));
      });
    callbackFunction(image);
  };
  const updateProfile = async (
    name,
    phone,
    countryName,
    currencySymbol,
    callbackFunction,
  ) => {
    firestore()
      .collection('Users')
      .doc(userData.userId)
      .update({
        country: countryName,
        name: name,
        phone: phone,
        currency: currencySymbol,
      })
      .then(() => {
        let data = {
          country: countryName,
          name: name,
          phone: phone,
          currency: currencySymbol,
        };
        callbackFunction(true);
        dispatch(updateUser(data));
      });
  };
  const updatePasscode = async (code, show, callbackFunction) => {
    firestore()
      .collection('Users')
      .doc(userData.userId)
      .update({
        passcode: code,
        enablePasscode: show,
      })
      .then(() => {
        let data = {
          passcode: code,
          enablePasscode: show,
        };
        callbackFunction(true);
        dispatch(updatePinPasscode(data));
      });
  };

  const getUser = async callbackFunction => {
    firestore()
      .collection('Users')
      .doc(userData?.userId)
      .onSnapshot(async documentSnapshot => {
        if (documentSnapshot.data()) {
          callbackFunction(documentSnapshot.data());
        }
      });
  };

  return {
    handleLogin,
    handleSignup,
    handleForgotPassword,
    updateProfileImage,
    updateProfile,
    updatePasscode,
    getUser,
    //
    isloading,
    errMessage,
  };
};

export default Auth;