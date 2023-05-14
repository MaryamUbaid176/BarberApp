import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(100),
    backgroundColor: "transparent",
  },
  mainView: {
    height: hp(15),
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  maintextone: {
    fontSize: hp(5),
    height: hp(10),
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "KolkerBrush-Regular",
  },
  maintexttwo: {
    fontSize: wp(3),
    height: hp(5),
    color: "grey",
    textAlign: "center",
    fontWeight: "200",
    fontFamily: "KolkerBrush-Regular",
  },
  inputview: { height: hp(20), backgroundColor: "transparent" },
  textinput: {
    height: hp(8),
    borderRadius: hp(1),
    borderWidth: 0.4,
    alignSelf: "center",
    marginTop: hp(2),
    width: "90%",
  },

  btn: {
    height: hp(10),
    borderRadius: hp(2),
    backgroundColor: "#2AAA8A",
    alignSelf: "center",
    marginTop: hp(5),
    width: "90%",
    fontWeight: "bold",
  },
  donthaveaccountView: {
    // marginTop: hp(5),
    height: hp(40),
    width: wp(95),
    flexDirection: "row",
    backgroundColor: "transparent",
    marginBottom: hp(10),
    justifyContent: "center",
  },
  btnone: {
    width: wp(52),
    fontWeight: "bold",
    height: hp(10),

    // alignSelf: "center",
    // marginBottom: wp(10),
    backgroundColor: "transparent",
    marginTop: hp(8),
  },
  btntwo: {
    fontWeight: "bold",
    width: wp(18),
    height: hp(10),
    // alignSelf: "center",
    // marginBottom: wp(10),
    backgroundColor: "transparent",
    marginTop: hp(8),
  },
});

export default styles;
