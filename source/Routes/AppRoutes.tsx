import React from "react";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../Pages/home";
import { Profile } from "../Pages/profile";
import { Text } from "react-native";
import { RegistrationForm } from "../Pages/registration-form";
import { CommonStyle } from "../styles/common.style";
import { LogIn } from "../Pages/log-in";
import { ReserveVechile } from "../Pages/reserve-vechile";
import { RideDetail } from "../Pages/RideDetail";
import { Title } from "react-native-paper";
import { AddVechile } from "../Pages/add-vechile";
import { Maps } from "../Pages/maps";

const Stack = createNativeStackNavigator();

export const AppRoutes = ({ navigation }: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: CommonStyle.header,
          headerTitleStyle: CommonStyle.header_title,
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="Reg_form"
          component={RegistrationForm}
          options={{
            title: "Registration Form",
          }}
        />
        <Stack.Screen
          name="log_in"
          component={LogIn}
          options={{
            title: "Sign In",
          }}
        />
        <Stack.Screen
          name="reserve_vechile"
          component={ReserveVechile}
          options={{
            title: "Search Your Ride!",
            headerTitleStyle: { color: "#333333" },
            headerRight: () => {
              return (
                <Link
                  to={{ screen: "log_in" }}
                  style={{
                    backgroundColor: "#1926FF",
                    borderRadius: 8,
                    alignSelf: "flex-end",
                    padding: 15,
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Log In
                  </Text>
                </Link>
              );
            },
          }}
        />
        <Stack.Screen name="ride_detail" component={RideDetail} options={({route}:any)=>({title:route.params.vechileName,
      headerRight: () => {
              return (
                <Link
                  to={{ screen: "log_in" }}
                  style={CommonStyle.header_button}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Log In
                  </Text>
                </Link>
              );}})} />
              <Stack.Screen name="add_vechile" component={AddVechile} options={{title:""} }/>
              <Stack.Screen name="maps" component={Maps} options ={{title:''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
