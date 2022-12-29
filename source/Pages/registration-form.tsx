import { useState } from "react";
import {
  NativeSyntheticEvent,
  ScrollView,
  TextInputChangeEventData,
  View,
} from "react-native";
import { Button, Checkbox, Text, TextInput } from "react-native-paper";
import { CommonStyle } from "../styles/common.style";
import { Field, Form as FinalForm } from "react-final-form";
import { Link } from "@react-navigation/native";
import { Error } from "../Components/Field-error";
import { registerUser } from "../models/model";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { RegisterUser } from "../features/driver-vechile-slice";
import { useToast } from "react-native-toast-notifications";
import { SuccessDialog } from "../Components/registration-success-model";

export const RegistrationForm = ({ navigation }: any) => {
  const [isSecure, setIsSecure] = useState(true);
  const [isPassSecure, setIsPassSecure] = useState(true);
  const toast = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const submit = (values: registerUser) => {
    if (values.password === values.confirm_password) {
      dispatch(RegisterUser(values));
      navigation.navigate("log_in");
    } else toast.show("Password miss-match");
  };
  return (
    <View style={{ justifyContent: "center" }}>
      <ScrollView>
        <FinalForm
          onSubmit={(value) => submit(value as registerUser)}
          render={({ handleSubmit }) => {
            return (
              <View style={CommonStyle.forms}>
                <Field
                  name="user_name"
                  validate={(value) =>
                    value?.length ? null : "Required Field"
                  }
                  render={({ input }) => {
                    return (
                      <TextInput
                        style={CommonStyle.input_field}
                        label="User Name*"
                        value={input.value}
                        placeholderTextColor="#000"
                        mode="outlined"
                        outlineColor="#242A66"
                        onChange={input.onChange}
                        onBlur={(e) => input.onBlur(e)}
                        onFocus={(e) => input.onFocus(e)}
                      />
                    );
                  }}
                />
                <Error name="user_name" />
                <Field
                  name="phone_number"
                  validate={(value) =>
                    value?.length ? null : "Required Field"
                  }
                  render={({ input }) => {
                    return (
                      <TextInput
                        left={<TextInput.Affix text="+975" />}
                        style={CommonStyle.input_field}
                        label="Phone Number*"
                        value={input.value}
                        placeholderTextColor="#000"
                        onChange={input.onChange}
                        onBlur={(e) => input.onBlur(e)}
                        onFocus={(e) => input.onFocus(e)}
                        mode="outlined"
                        keyboardType="phone-pad"
                        outlineColor="#242A66"
                      />
                    );
                  }}
                />
                <Error name="phone_number" />
                <Field
                  name="email"
                  render={({ input }) => {
                    return (
                      <TextInput
                        style={CommonStyle.input_field}
                        label="Email Address"
                        value={input.value}
                        placeholderTextColor="#000"
                        onChange={input.onChange}
                        mode="outlined"
                        outlineColor="#242A66"
                        keyboardType="email-address"
                      />
                    );
                  }}
                />
                <Field
                  name="password"
                  render={({ input }) => {
                    return (
                      <TextInput
                        style={CommonStyle.input_field}
                        label="Password"
                        value={input.value}
                        placeholderTextColor="#000"
                        onChange={input.onChange}
                        mode="outlined"
                        outlineColor="#242A66"
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
                <Field
                  name="confirm_password"
                  render={({ input }) => {
                    return (
                      <TextInput
                        style={CommonStyle.input_field}
                        label="Confirm password"
                        value={input.value}
                        placeholderTextColor="#000"
                        onChange={input.onChange}
                        mode="outlined"
                        outlineColor="#242A66"
                        right={
                          <TextInput.Icon
                            icon={`${isPassSecure ? "eye-off" : "eye"}`}
                            onPress={() =>
                              isPassSecure
                                ? setIsPassSecure(false)
                                : setIsPassSecure(true)
                            }
                          />
                        }
                        secureTextEntry={isPassSecure}
                      />
                    );
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 15,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 12,
                      justifyContent: "center",
                    }}
                  >
                    Already have an Account ? {"  "}
                    <Link
                      to={{ screen: "log_in" }}
                      style={{
                        color: "#1926FF",
                        fontWeight: "bold",
                        textDecorationLine: "underline",
                        fontSize: 14,
                      }}
                    >
                      Sign in
                    </Link>
                  </Text>
                </View>
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
                    Register
                  </Text>
                </Button>
              </View>
            );
          }}
        />
      </ScrollView>
      {/* <Text>'register here'</Text> */}
    </View>
  );
};
