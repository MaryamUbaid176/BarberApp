import moment from "moment";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import DatePicker from "react-native-date-picker";
import Snackbar from "react-native-snackbar";
import { useSelector } from "react-redux";
import Auth from "../../../firebaseHooks/auth";
import { hp, wp } from "../../../util";

export default function BarberDetail(props) {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState();
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState([]);
  const userData = useSelector((state) => state.user.userData);
  const {
    createrUserBooking,
    createrBarberBooking,
    getAllServices,
    isloading,
  } = Auth();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Barber name: </Text>
      <Text>{props.route?.params?.data.name} </Text>

      <Text style={styles.title}>Services: </Text>

      <View style={{ flexDirection: "row" }}>
        {props.route?.params?.data?.services.map((item) => (
          <TouchableOpacity
            onPress={() => {
              if (selectedService.includes(item)) {
                let temp = selectedService.filter((items) => item != items);
                setSelectedService(temp);
              } else {
                setSelectedService([...selectedService, item]);
              }
            }}
            style={
              selectedService.includes(item)
                ? styles.selected
                : styles.serviceView
            }
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.title}>Select timings: </Text>

      <TouchableOpacity style={styles.dateView} onPress={() => setOpen(true)}>
        <Text>
          {selectedDate
            ? moment(selectedDate).format("DD MM YYYY / hh:mm")
            : "Select Timing"}
        </Text>
      </TouchableOpacity>
      <DatePicker
        minimumDate={new Date()}
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
          setSelectedDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          if (selectedService.length == 0) {
            Snackbar.show({
              text: "Please select service",
              duration: Snackbar.LENGTH_SHORT,
            });
          } else if (!selectedDate) {
            Snackbar.show({
              text: "Please select date",
              duration: Snackbar.LENGTH_SHORT,
            });
          } else {
            let booking = {
              barberId: props.route?.params?.data?.userId,
              barberName: props.route?.params?.data.name,
              services: selectedService,
              date: moment(selectedDate).format("DD-MM-YYYY: hh:mm:ss"),
              createdBy: userData,
              status: "pending",
            };

            // console.log("booking", booking);
            createrUserBooking(booking, (callbackFunction) => {
              console.log("callbackFunction...>> ", callbackFunction);

              if (callbackFunction) {
                createrBarberBooking(booking, (resDone) => {
                  Alert.alert(
                    "Success",
                    "Your booking has been created successfully!",
                    [{ text: "OK", onPress: () => props.navigation.popToTop() }]
                  );
                });
              }
            });
          }
        }}
        style={styles.button}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: hp(2),
            alignSelf: "center",
          }}
        >
          Confirm Booking
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(100),
    padding: wp(5),
  },
  title: {
    fontWeight: "600",
    marginTop: hp(2),
    fontWeight: "bold",
    color: "black",
  },

  serviceView: {
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    marginRight: wp(2),
  },
  selected: {
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#2AAA8A",
    borderRadius: 5,
    marginRight: wp(2),
  },
  dateView: {
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    marginRight: wp(2),
    marginTop: hp(1),
  },
  button: {
    height: hp(8),
    width: wp(90),
    backgroundColor: "#2AAA8A",
    marginTop: hp(45),
  },
});