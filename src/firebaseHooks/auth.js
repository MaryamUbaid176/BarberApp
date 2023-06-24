import auth from "@react-native-firebase/auth";
import firestore, { firebase } from "@react-native-firebase/firestore";
import { useState } from "react";
import Snackbar from "react-native-snackbar";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  updatePinPasscode,
  updateUser,
  updateUserImage,
} from "../redux/slices/userSlice";
import Storage from "./storage";

const Auth = () => {
  const { uploadImage } = Storage();
  const userData = useSelector((state) => state.user.userData);

  const [isloading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (phone, password, callbackFunction) => {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(phone, password)
      .then((res) => {
        console.log("res", res);
        let data = {
          email: res.user.providerData[0].email,
          name: "",
          userId: res.user.uid,
        };

        firestore()
          .collection("Users")
          .doc(res.user.uid)
          .onSnapshot(async (documentSnapshot) => {
            if (documentSnapshot.data()) {
              console.log("documentSnapshot.data()", documentSnapshot.data());

              let data = {
                email: documentSnapshot?.data().email,
                name: documentSnapshot?.data().name,
                type: documentSnapshot?.data().type,
                phone: documentSnapshot?.data().phone,
                userId: res.user.uid,
              };
              dispatch(setUser(data));

              // callbackFunction(documentSnapshot.data());
            }
          });

        // dispatch(setUser(data));
      })
      .catch((error) => {
        callbackFunction(error);
        setIsLoading(false);
      });
  };
  const handleSignup = async (
    email,
    password,
    fullname,
    number,
    type,

    callbackFunction
  ) => {
    setErrMessage("");
    setIsLoading(true);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("User account created & signed in! ", res);
        let data = {
          email: email,
          name: fullname,
          phone: number,
          type: type,
        };
        dispatch(setUser(data));
        let data1 = {
          email: email,
          name: fullname,
          phone: number,
          type: type,
        };
        firestore().collection("Users").doc(res?.user?.uid).set(data);
        firebase.auth().currentUser.updateProfile(data);
      })
      .catch((error) => {
        callbackFunction(error);
        setIsLoading(false);
        console.error("error: ", error);
      });
  };
  const barberHandleSignup = async (
    email,
    password,
    fullname,
    number,
    type,
    services,
    callbackFunction
  ) => {
    setErrMessage("");
    setIsLoading(true);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("User account created & signed in! ", res);
        let data = {
          email: email,
          name: fullname,
          phone: number,
          type: type,
          services: services,
        };
        dispatch(setUser(data));

        firestore().collection("Users").doc(res?.user?.uid).set(data);
        firebase.auth().currentUser.updateProfile(data);
      })
      .catch((error) => {
        callbackFunction(error);
        setIsLoading(false);
        console.error("error: ", error);
      });
  };
  const createrUserBooking = async (
    booking,

    callbackFunction
  ) => {
    setErrMessage("");
    setIsLoading(true);

    firestore().collection("bookings").doc(booking).set(data);
  };

  async function verifyPhoneNumber(phoneNumber) {
    const confirmation = await auth().verifyPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }
  const handleForgotPassword = async (email, callbackFunction) => {
    setErrMessage("");
    setIsLoading(true);
    console.log("email", email);
    auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        navigation.goBack();
        Snackbar.show({
          text: "Recovery link has been sent to email",
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
      .collection("Users")
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
    callbackFunction
  ) => {
    firestore()
      .collection("Users")
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
      .collection("Users")
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

  const getUser = async (callbackFunction) => {
    firestore()
      .collection("Users")
      .doc(userData?.userId)
      .onSnapshot(async (documentSnapshot) => {
        if (documentSnapshot.data()) {
          callbackFunction(documentSnapshot.data());
        }
      });
  };
  const getAllServices = async (callbackFunction) => {
    firestore()
      .collection("Services")
      .doc("serviceList")
      .onSnapshot(async (documentSnapshot) => {
        if (documentSnapshot.data()) {
          callbackFunction(documentSnapshot.data());
        }
      });
  };
  const getAllBarber = async (callbackFunction) => {
    const data = [];
    firestore()
      .collection("Users")
      .get()
      .then((querySnapshot) => {
        querySnapshot?.docs?.forEach((doc) => {
          console.log("doc", doc.data().type);
          if (doc.data().type == "barber") {
            data.push(doc.data());
          }
        });
      })
      .finally(() => {
        callbackFunction(data);
      });
  };

  return {
    handleLogin,
    handleSignup,
    barberHandleSignup,
    createrUserBooking,
    handleForgotPassword,
    updateProfileImage,
    updateProfile,
    updatePasscode,
    getUser,
    getAllServices,
    getAllBarber,
    //
    isloading,
    errMessage,
  };
};

export default Auth;
