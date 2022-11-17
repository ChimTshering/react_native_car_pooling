import { useState } from "react";
import { Field, Form } from "react-final-form";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Error } from "../Components/Field-error";
import { CommonStyle } from "../styles/common.style";

export const LogIn = ({navigation}:any) => {
  const [isSecure, setIsSecure]= useState(true);
  const signIn = (values: Record<string, any>) => {
    console.log(values);
    navigation.navigate("reserve_vechile");
  };
  return (
    <Form
      onSubmit={(values)=>signIn(values)}
      
      render={({handleSubmit,values}) => {
        return (
          <View style = {{justifyContent:'center', height:'90%'
          }}>
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
