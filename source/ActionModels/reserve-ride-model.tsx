import { Picker } from "@react-native-picker/picker";
import { Field, Form } from "react-final-form";
import { ScrollView, Text, View } from "react-native";
import { Button, Dialog, Modal, Portal, TextInput } from "react-native-paper";
import { useToast } from "react-native-toast-notifications";
import { Error } from "../Components/Field-error";
import { ReserveModel } from "../models/model";
import { CommonStyle } from "../styles/common.style";

export const ReserveRideModel = (props: ReserveModel) => {
  const toast = useToast();
  const submitReservation = (values:Record<string, any>) => {
    props.setRegister(false);
    console.log(values);
    toast.show('success');
    // navigation.navigate("reserve_vechile");
  };
  return (
    <View style={{ height: "100%", position: "absolute",width:'100%' }}>
      <Portal>
        <Modal
          visible={props.register}
         onDismiss={()=>props.setRegister(false)} 
          contentContainerStyle={{
            margin: 0,
            padding: 0,
            justifyContent: "center",
            width: "100%",
            alignSelf: "center",
          }}
        >
          {/* <Dialog.Content
            style={{
              margin: 0,
              padding: 0,
              position: "absolute",
              width: "100%",
            }}
            > */}
          <Form
            onSubmit={(values) => submitReservation(values)}
            render={({ handleSubmit,invalid,values,valid }) => {
              return (
                <View style={CommonStyle.forms}>
                  <Text style={{ fontWeight: "bold" }}>Reserve Ride</Text>
                  <ScrollView>
                    <Field
                      validate={(value) => (value?.length ? null : "Required")}
                      name="passenger_name"
                      render={({ input }) => {
                        return (
                          <TextInput
                            value={input.value}
                            label="Enter Name"
                            style={CommonStyle.input_field}
                            keyboardType="default"
                            onChange={input.onChange}
                            onBlur={(e) => input.onBlur(e)}
                            onFocus={(e) => input.onFocus(e)}
                          />
                        );
                      }}
                    />
                    <Error name="passenger_name" />
                    <Field
                      name="phone_number"
                      validate={(value) => (value?.length ? null : "Required")}
                      render={({ input }) => {
                        return (
                          <TextInput
                            value={input.value}
                            label="Enter Phone Number"
                            left={<TextInput.Affix text="+975" />}
                            style={CommonStyle.input_field}
                            keyboardType="phone-pad"
                            onChange={input.onChange}
                            onBlur={(e) => input.onBlur(e)}
                            onFocus={(e) => input.onFocus(e)}
                          />
                        );
                      }}
                    />
                    <Error name="phone_number" />
                    <Field
                      name="email"
                      validate={(value) => (value?.length ? null : "Required")}
                      render={({ input }) => {
                        return (
                          <TextInput
                            value={input.value}
                            label="Enter Email"
                            style={CommonStyle.input_field}
                            keyboardType="email-address"
                            onChange={input.onChange}
                            onBlur={(e) => input.onBlur(e)}
                            onFocus={(e) => input.onFocus(e)}
                          />
                        );
                      }}
                    />
                    <Error name="email" />
                    <View
                      style={{
                        width: "50%",
                        margin: 0,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-between",
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        <Field
                          name="pickup_point"
                          render={({ input }) => {
                            return (
                              <View
                                style={{
                                  flexDirection: "column",
                                  display: "flex",
                                  width: "100%",
                                  justifyContent: "space-between",
                                  margin: 0,
                                }}
                              >
                                <Text
                                  style={{ marginLeft: 10, fontWeight: "900" }}
                                >
                                  Pickup point
                                </Text>
                                <Picker
                                  selectedValue={input.value}
                                  onValueChange={input.onChange}
                                  style={CommonStyle.picker}
                                >
                                  <Picker.Item
                                    label="Dzongkhag"
                                    value=""
                                    style={{ fontWeight: "600" }}
                                  />
                                  <Picker.Item
                                    label="Tashigang"
                                    value="tgang"
                                  />
                                  <Picker.Item label="Thimphu" value="tmphu" />
                                </Picker>
                              </View>
                            );
                          }}
                        />
                        <Field
                          name="drop_point"
                          render={({ input }) => {
                            return (
                              <View
                                style={{
                                  flexDirection: "column",
                                  display: "flex",
                                  width: "100%",
                                  justifyContent: "space-between",
                                  margin: 0,
                                }}
                              >
                                <Text
                                  style={{ marginLeft: 10, fontWeight: "900" }}
                                >
                                  Drop Point
                                </Text>
                                <Picker
                                  selectedValue={input.value}
                                  onValueChange={input.onChange}
                                  style={CommonStyle.picker}
                                >
                                  <Picker.Item
                                    label="Dzongkhag"
                                    value=""
                                    style={{ fontWeight: "600" }}
                                  />
                                  <Picker.Item
                                    label="Tashigang"
                                    value="tgang"
                                  />
                                  <Picker.Item label="Thimphu" value="tmphu" />
                                </Picker>
                              </View>
                            );
                          }}
                        />
                      </View>
                    </View>
                  </ScrollView>
                  <Button onPress={handleSubmit} disabled={invalid}>
                    {" "}
                    Request Reservation
                  </Button>
                </View>
              );
            }}
          />
          {/* </Dialog.Content> */}
        </Modal>
      </Portal>
    </View>
  );
};
