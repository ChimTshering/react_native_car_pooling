import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { ReserveRideModel } from "../ActionModels/reserve-ride-model";
import { FActionButton } from "../Components/fab";
import { CommonStyle } from "../styles/common.style";
import { HomeStyles } from "../styles/home.style";

export const RideDetail = ({navigation}:any) => {
  const [register,setRegister] = useState(false);
  const [showRoute, setShowRoute] = useState(false);
  const ReserveRideMode =()=>{
    setRegister(true)
  }
   const showMap=()=>{
    navigation.navigate('maps')
   }
  return (
    <>
      <View
        style={{
          height: "100%",
          width: "95%",
          alignSelf: "center",
          alignItems: "center",
          margin: 10,
          flex: 2,
          flexDirection: "column",
          marginTop: 60,
        }}
      >
        <View style={CommonStyle.flex_container}>
          <View style={{ alignItems: "center", width: "50%" }}>
            <Text>Vechile Name : </Text>
            <Text style={{ fontWeight: "900" }}>Bolero</Text>
          </View>
          <View style={{ alignItems: "center", width: "50%" }}>
            <Text>Vechile Number : </Text>
            <Text style={{ fontWeight: "900" }}>BP-2-A1977</Text>
          </View>
        </View>
        <View style={CommonStyle.flex_container}>
          <View style={{ alignItems: "center", width: "50%" }}>
            <Text>Driver : </Text>
            <Text style={{ fontWeight: "900" }}>Tashi Dakpa</Text>
          </View>
          <View style={{ alignItems: "center", width: "50%" }}>
            <Text>Mobile Number : </Text>
            <Text style={{ fontWeight: "900" }}>+975 17432309</Text>
          </View>
        </View>
        <View style={CommonStyle.flex_container}>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              paddingLeft: "15%",
            }}
          >
            <Text>Email address : </Text>
            <Text style={{ fontWeight: "900" }}>Dakpa@gmail.com</Text>
          </View>
        </View>
        <View style={CommonStyle.horizontal_row} />
        <View style={CommonStyle.flex_container}>
          <View style={{ alignItems: "center", width: "50%" }}>
            <Text>Going From : </Text>
            <Text style={{ fontWeight: "900" }}>Thimphu</Text>
          </View>
          <View style={{ alignItems: "center", width: "50%" }}>
            <Text>Going To : </Text>
            <Text style={{ fontWeight: "900" }}>Phuntsholing</Text>
          </View>
        </View>
        <View style={CommonStyle.flex_container}>
          <View style={{ alignItems: "center", width: "50%" }}>
            <Text>Start Date : </Text>
            <Text style={{ fontWeight: "900" }}>23rd Nov 2022</Text>
          </View>
          <View style={{ alignItems: "center", width: "50%" }}>
            <Text>Arrival Date : </Text>
            <Text style={{ fontWeight: "900" }}>23rd Nov 2022</Text>
          </View>
        </View>
        <View style={CommonStyle.horizontal_row} />
        <View style={CommonStyle.flex_container}>
          <View style={{ alignItems: "center", width: "50%" }}>
            <Text>Estimated travel time : </Text>
            <Text style={{ fontWeight: "900", textAlign: "center" }}>
              6 Hrs
            </Text>
          </View>
          <View style={{ alignItems: "center", width: "50%" }}>
            <Text>Available Seat : </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, color: "#1926FF" }}
            >
              2
            </Text>
          </View>
        </View>
        <View style={CommonStyle.horizontal_row} />
        <Text
          style={{ textDecorationLine: "underline" }}
          onPress={() => showMap()}
        >
          Show Route ?
        </Text>
        <Button
          style={{
            width: "95%",
            backgroundColor: "#1926FF",
            borderRadius: 8,
            alignSelf: "center",
            marginTop: 20,
          }}
          onPress={ReserveRideMode}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Reserve this Ride ?
          </Text>
        </Button>
      </View>
      {register ? (
        <ReserveRideModel register={register} setRegister={setRegister} />
      ) : null}
      <FActionButton />
    </>
  );
};
