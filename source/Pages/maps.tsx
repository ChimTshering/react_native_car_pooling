import { Text, View } from "react-native";
import MapView, { Callout, Marker, Polyline } from "react-native-maps";
import { Start } from "../models/model";

export const Maps =({route}:any) =>{
  const {sourcePlace,destinationPlace} = route.params
  console.log("hiii", sourcePlace, destinationPlace);
  return (
    <View>
      <MapView
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
        initialRegion={{
          latitude: sourcePlace.latitude,
          longitude: sourcePlace.longitude,
          longitudeDelta: 1.6,
          latitudeDelta: 2,
        }}
      >
        <Marker
          coordinate={{
            latitude: sourcePlace.latitude,
            longitude: sourcePlace.longitude,
          }}
        >
          <Callout tooltip={true}>
            <Text
              style={{
                backgroundColor: "#fff",
                borderRadius: 5,
                fontWeight: "bold",
              }}
            >
              {sourcePlace.name}
            </Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: destinationPlace.latitude,
            longitude: destinationPlace.longitude,
          }}
        >
          <Callout tooltip={true}>
            <Text
              style={{
                backgroundColor: "#fff",
                borderRadius: 5,
                fontWeight: "bold",
              }}
            >
              {destinationPlace.name}
            </Text>
          </Callout>
        </Marker>
        <Polyline
          coordinates={[
            {
              latitude: sourcePlace.latitude,
              longitude: sourcePlace.longitude,
            },
            {
              latitude: destinationPlace.latitude,
              longitude: destinationPlace.longitude,
            },
          ]}
          strokeColor="#000"
        ></Polyline>
      </MapView>
    </View>
  );
}