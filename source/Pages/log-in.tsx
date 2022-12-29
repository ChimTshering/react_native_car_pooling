import { useState } from "react";
import { Field, Form } from "react-final-form";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useToast } from "react-native-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { Error } from "../Components/Field-error";
import { LogUserIn } from "../features/driver-vechile-slice";
import { LoggedInCred } from "../models/model";
import { RegisteredUsers } from "../models/registeredUsers.constent";
import { CommonStyle } from "../styles/common.style";

export const LogIn = ({ navigation }: any) => {
  const [isSecure, setIsSecure] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector(
    (state: RootState) => state.vechile.isLoggedIn
  );
  const toast = useToast();
  const signIn = (values: LoggedInCred) => {
    RegisteredUsers.forEach((user) => {
      dispatch(LogUserIn(values));
      if (isLoggedIn) {
        navigation.navigate("reserve_vechile");
      }
    });
  };
  return (
    <Form
      onSubmit={(values) => signIn(values as LoggedInCred)}
      render={({ handleSubmit, values }) => {
        return (
          <View style={{ justifyContent: "center", height: "90%" }}>
            <View style={CommonStyle.forms}>
              <Field
                name="user_name"
                render={({ input }) => {
                  return (
                    <TextInput
                      label="User Name"
                      value={input.value}
                      onChange={input.onChange}
                      style={CommonStyle.input_field}
                    />
                  );
                }}
              />
              <Field
                name="password"
                render={({ input }) => {
                  return (
                    <TextInput
                      label="Password"
                      value={input.value}
                      onChange={input.onChange}
                      style={CommonStyle.input_field}
                      right={
                        <TextInput.Icon
                          icon={`${isSecure ? "eye-off" : "eye"}`}
                          onPress={() =>
                            isSecure ? setIsSecure(false) : setIsSecure(true)
                          }
                        />
                      }
                      secureTextEntry={isSecure}
                    />
                  );
                }}
              />
              <Button
                onPress={handleSubmit}
                mode="elevated"
                style={{
                  margin: 10,
                  backgroundColor: "#1926FF",
                  borderRadius: 8,
                  width: "40%",
                  alignSelf: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Log In
                </Text>
              </Button>
            </View>
          </View>
        );
      }}
    />
  );
};
