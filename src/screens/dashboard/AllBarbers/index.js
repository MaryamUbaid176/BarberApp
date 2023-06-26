import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Auth from "../../../firebaseHooks/auth";

const AllBarbers = (props) => {
  const { getAllBarber, isloading } = Auth();

  const [barberList, setBarberList] = useState([]);

  useEffect(() => {
    getAllBarber((data) => {
      setBarberList(data);
    });
  }, []);

  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Barber List</Text>
      </View>

      <View style={{ height: hp(80) }}>
        <FlatList
          data={barberList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.mainContainer}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("BarberDetail", { data: item });
                  }}
                >
                  <Text>{item.name}</Text>

                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {item.services.map((item) => (
                      <View style={styles.serviceView}>
                        <Text>{item}</Text>
                      </View>
                    ))}
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default AllBarbers;

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
    marginTop: wp(2),
  },
});
