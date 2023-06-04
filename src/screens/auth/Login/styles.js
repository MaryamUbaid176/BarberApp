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
    height: hp(20),
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  maintextone: {
    fontSize: hp(6),
    height: hp(10),
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "KolkerBrush-Regular",
  },
  maintexttwo: {
    fontSize: wp(4),
    height: hp(10),
    color: "grey",
    textAlign: "center",
    fontWeight: "200",
    fontFamily: "KolkerBrush-Regular",
  },
  inputview: { height: hp(20), backgroundColor: "transparent" },
  textinput: {
    height: hp(10),
    borderRadius: hp(2),
    borderWidth: 0.4,
    alignSelf: "center",
    marginTop: hp(2),
    width: "90%",
    padding: hp(2),
  },

  forgetView: {
    backgroundColor: "transparent",
    // marginTop: hp(10),
    width: "70%",
    height: hp(10),
    fontSize: hp(3),
    fontWeight: "bold",
    marginLeft: hp(20),
  },
  btn: {
    height: hp(10),
    borderRadius: hp(2),
    backgroundColor: "#2AAA8A",
    alignSelf: "center",
    width: "90%",
  },
  donthaveaccountView: {
    // marginTop: hp(5),
    height: hp(10),
    width: "95%",
    flexDirection: "row",
    backgroundColor: "transparent",
    marginBottom: hp(10),
    justifyContent: "center",
  },
  btnone: {
    width: wp(52),
    fontWeight: "bold",
    height: hp(10),
    alignSelf: "center",
    marginBottom: wp(10),
    backgroundColor: "transparent",
  },
  btntwo: {
    width: wp(18),
    fontWeight: "bold",
    height: hp(10),
    alignSelf: "center",
    marginBottom: wp(10),
    backgroundColor: "transparent",
  },
});

export default styles;
