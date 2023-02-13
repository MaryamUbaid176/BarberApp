import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import moment from "moment";

const Account = () => {
  const data = [
    {
      name: "Ahmed",
      serviceType: ["Cutting", "Shave"],
      date: "23 Jan 2023",
      price: 1000,
    },
    {
      name: "Zain",
      serviceType: ["Cutting"],
      date: "22 Jan 2023",
      price: 1000,
    },
    {
      name: "Zain",
      serviceType: ["Cutting"],
      date: "22 Jan 2023",
      price: 1000,
    },
    {
      name: "Zain",
      serviceType: ["Cutting"],
      date: "22 Jan 2023",
      price: 1000,
    },
    {
      name: "Sid",
      serviceType: ["Cutting", "Shave"],
      date: "30 Jan 2023",
      price: 1000,
    },
    {
      name: "Hamza",
      serviceType: ["Cutting", "Shave"],
      date: "22 Jan 2023",
      price: 1000,
    },
    {
      name: "Saif",
      serviceType: ["Cutting", "Shave"],
      date: "28 Jan 2023",
      price: 250,
    },
  ];
  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>My Bookings</Text>
      </View>

      <View style={{ height: hp(80) }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            console.log("item", item);
            return (
              <View style={styles.mainContainer}>
                <Text>{item.name}</Text>

                <View style={{ flexDirection: "row" }}>
                  {item.serviceType.map((item) => (
                    <View style={styles.serviceView}>
                      <Text>{item}</Text>
                    </View>
                  ))}
                </View>

                <Text> Date: {item?.date}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  mainView: {
    height: hp(100),
  },
  headerText: {
    fontSize: wp(5),
    fontWeight: "bold",
    padding: wp(5),
    color: "black",
  },
  headerView: {
    backgroundColor: "white",
    borderBottomLeftRadius: wp(5),
    borderBottomRightRadius: wp(5),
    height: hp(10),
  },
  mainContainer: {
    borderWidth: 0.5,
    borderColor: "black",
    marginVertical: hp(1),
    paddingHorizontal: wp(5),
    paddingVertical: wp(1),
    width: wp(90),
    alignSelf: "center",
    borderRadius: wp(5),
  },
  serviceView: {
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    marginRight: wp(2),
  },
});
