import { Link } from "@react-navigation/native";
import { Image, ImageBackground, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { HomeStyles } from "../styles/home.style";

export const Home = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require("../../assets/route_google_map.png")}
      style={{ height: "105%", width: "100%", marginTop: -30 }}
    >
      <View style={HomeStyles.box}>
        <View style={HomeStyles.text_view}>
          <Text style={HomeStyles.quote_text}>are you going </Text>
          <Text style={HomeStyles.quote_text}>Somewhere in Bhutan ?</Text>
          <Text style={HomeStyles.quote_text}>
            "Let us make your travel better !"
          </Text>
        </View>
        <Button
          style={HomeStyles.reserveBtn}
          onPress={() => navigation.navigate("reserve_vechile")}
        >
          <Text style={HomeStyles.button_text}>Reserve your Ride</Text>
        </Button>
        <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
          <Button
            style={{
              margin: 10,
              backgroundColor: "#1926FF",
              borderRadius: 8,
              width: "40%",
            }}
            onPress={() => navigation.navigate("log_in")}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Sign in</Text>
          </Button>
          <Text style={{ fontWeight: "700" }}>
            Don't have an account?{" "}
            <Link
              to={{ screen: "Reg_form" }}
              style={{
                color: "#1926FF",
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Sign Up
            </Link>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
