import { Picker } from "@react-native-picker/picker";
import { Link } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { Field, Form } from "react-final-form";
import { Text, View } from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";
import { useToast } from "react-native-toast-notifications";
import { Error } from "../Components/Field-error";
import { AddVechileForm } from "../models/model";
import { dzongkhag } from "../models/place.constant";
import { CommonStyle } from "../styles/common.style";

export const AddVechile = ({navigation,route}:any) => {
  const [next, setNext] = useState(true);
  const [check, setCheck] = useState(true);
  const [start, setStart] = useState<object|null>(null);
  const [destination, setDestination] = useState<object|null>(null);
  const toast = useToast();
  const AddVechile = (value:AddVechileForm) => {
    console.log({...value,show_route:check,start:start,destination:destination});
    toast.show("success!!!!");
  };
  const dzongkhags = useMemo(() => {
    return dzongkhag.map((bhutan) => bhutan.name);
  }, []);
  return (
    <View style={{ justifyContent: "center", alignContent: "center" }}>
      <Form
        onSubmit={(value) => AddVechile(value as AddVechileForm)}
        render={({ handleSubmit, invalid,values }) => {
          return (
            <>
              {next ? (
                <View style={CommonStyle.forms}>
                  <Text style={{ fontWeight: "bold" }}>Driver Info</Text>
                  <Field
                    name="driver_name"
                    validate={(value) => (value?.length ? null : "Required")}
                    render={({ input }) => (
                      <TextInput
                        style={CommonStyle.input_field}
                        label="Driver Name"
                        value={input.value}
                        onChange={input.onChange}
                        onBlur={(e) => input.onBlur(e)}
                        onFocus={(e) => input.onFocus(e)}
                      />
                    )}
                  />
                  <Error name="driver_name" />
                  <Field
                    name="driver_email"
                    validate={(value) => (value?.length ? null : "Required")}
                    render={({ input }) => (
                      <TextInput
                        style={CommonStyle.input_field}
                        label="Email"
                        value={input.value}
                        onChange={input.onChange}
                        onBlur={(e) => input.onBlur(e)}
                        onFocus={(e) => input.onFocus(e)}
                      />
                    )}
                  />
                  <Error name="driver_email" />
                  <View style={CommonStyle.flex_container}>
                    <View
                      style={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Field
                        name="phone_number"
                        validate={(value) =>
                          value?.length ? null : "Required"
                        }
                        render={({ input }) => (
                          <TextInput
                            style={CommonStyle.input_field}
                            left={<TextInput.Affix text="+975" />}
                            label="Phone"
                            value={input.value}
                            keyboardType="phone-pad"
                            onChange={input.onChange}
                            onBlur={(e) => input.onBlur(e)}
                            onFocus={(e) => input.onFocus(e)}
                          />
                        )}
                      />
                      <Error name="phone_number" />
                    </View>

                    <View
                      style={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Field
                        name="lisence_number"
                        validate={(value) =>
                          value?.length ? null : "Required"
                        }
                        render={({ input }) => (
                          <TextInput
                            style={CommonStyle.input_field}
                            label="Lisence"
                            value={input.value}
                            onChange={input.onChange}
                            onBlur={(e) => input.onBlur(e)}
                            onFocus={(e) => input.onFocus(e)}
                          />
                        )}
                      />
                      <Error name="lisence_number" />
                    </View>
                    <View>
                      <Text style={{ marginLeft: 10, fontWeight: "900" }}>
                        Destination
                      </Text>
                      <View
                        style={{
                          width: "50%",
                          margin: 0,
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Field
                          name="destination_dzo"
                          render={({ input }) => {
                            return (
                              <>
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
                                  {dzongkhags.map((dzo) => {
                                    return (
                                      <Picker.Item
                                        label={`${dzo}`}
                                        value={dzo}
                                        style={{ fontWeight: "600" }}
                                      />
                                    );
                                  })}
                                </Picker>
                              </>
                            );
                          }}
                        />
                        <Field
                          name="destination_gewog"
                          render={({ input }) => {
                            return (
                              <>
                                <Picker
                                  selectedValue={input.value}
                                  onValueChange={input.onChange}
                                  style={CommonStyle.picker}
                                >
                                  <Picker.Item
                                    label="Gewog"
                                    value=""
                                    style={{ fontWeight: "600" }}
                                  />
                                  {dzongkhag
                                    .filter(
                                      (dzongkhag) =>
                                        dzongkhag.name ===
                                        values.destination_dzo
                                    )
                                    .map((dzong) =>
                                      dzong.gewogs.map((gewog) => {
                                        setDestination(gewog);
                                        return (
                                          <Picker.Item
                                            label={`${gewog.name}`}
                                            value={gewog.name}
                                            style={{ fontWeight: "600" }}
                                          />
                                        );
                                      })
                                    )}
                                </Picker>
                              </>
                            );
                          }}
                        />
                      </View>
                    </View>
                    <View style={CommonStyle.horizontal_row} />
                    <View
                      style={{
                        width: "50%",
                        margin: 0,
                      }}
                    >
                      <Text style={{ marginLeft: 10, fontWeight: "900" }}>
                        Departure
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-between",
                          margin: 0,
                        }}
                      >
                        <Field
                          name="departure_dzo"
                          render={({ input }) => {
                            return (
                              <>
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
                                  {dzongkhags.map((dzo) => {
                                    return (
                                      <Picker.Item
                                        label={`${dzo}`}
                                        value={dzo}
                                        style={{ fontWeight: "600" }}
                                      />
                                    );
                                  })}
                                </Picker>
                              </>
                            );
                          }}
                        />
                        <Field
                          name="departure_gewog"
                          render={({ input }) => {
                            return (
                              <>
                                <Picker
                                  selectedValue={input.value}
                                  onValueChange={input.onChange}
                                  style={CommonStyle.picker}
                                >
                                  <Picker.Item
                                    label="Gewog"
                                    value=""
                                    style={{ fontWeight: "600" }}
                                  />
                                  {dzongkhag
                                    .filter(
                                      (dzongkhag) =>
                                        dzongkhag.name === values.departure_dzo
                                    )
                                    .map((dzong) =>
                                      dzong.gewogs.map((gewog) => {
                                        setStart(gewog);
                                        return (
                                          <Picker.Item
                                            label={`${gewog.name}`}
                                            value={gewog.name}
                                            style={{ fontWeight: "600" }}
                                          />
                                        );
                                      })
                                    )}
                                </Picker>
                              </>
                            );
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <Button
                    style={CommonStyle.blue_button}
                    onPress={() => setNext(false)}
                    // disabled={!values.driver_name && !values.driver_email && !values.departure_dzo && !values.destination_dzo}
                  >
                    <Text style={CommonStyle.button_text}> Next</Text>
                  </Button>
                </View>
              ) : (
                <View style={CommonStyle.forms}>
                  <Text style={{ fontWeight: "bold" }}>Vechile Info</Text>
                  <Field
                    name="vechile_name"
                    validate={(value) => (value?.length ? null : "Required")}
                    render={({ input }) => (
                      <TextInput
                        style={CommonStyle.input_field}
                        label="Vechile Name"
                        value={input.value}
                        onChange={input.onChange}
                        onBlur={(e) => input.onBlur(e)}
                        onFocus={(e) => input.onFocus(e)}
                      />
                    )}
                  />
                  <Error name="vechile_name" />
                  <Field
                    name="vechile_number"
                    validate={(value) => (value?.length ? null : "Required")}
                    render={({ input }) => (
                      <TextInput
                        style={CommonStyle.input_field}
                        label="Vechile Number"
                        value={input.value}
                        onChange={input.onChange}
                        onBlur={(e) => input.onBlur(e)}
                        onFocus={(e) => input.onFocus(e)}
                      />
                    )}
                  />
                  <Error name="vechile_number" />
                  <Field
                    name="available_seat"
                    render={({ input }) => (
                      <TextInput
                        style={CommonStyle.input_field}
                        label="Seat Available"
                        value={input.value}
                        onChange={input.onChange}
                        keyboardType="numeric"
                        onBlur={(e) => input.onBlur(e)}
                        onFocus={(e) => input.onFocus(e)}
                      />
                    )}
                  />
                  <Field
                    name="estimated_time"
                    render={({ input }) => (
                      <TextInput
                        style={CommonStyle.input_field}
                        label="Estimated Time"
                        right={<TextInput.Affix text="Hours"/>}
                        value={input.value}
                        onChange={input.onChange}
                        keyboardType="numeric"
                      />
                    )}
                  />
                  <Field
                    name="show_route"
                    render={({ input }) => {
                      return (
                        <View
                          style={{
                            justifyContent: "center",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            margin: 6,
                          }}
                        >
                          <Checkbox
                            status={check ? "checked" : "unchecked"}
                            onPress={() => setCheck(!check)}
                          />
                          {/* <Link
                            to={{ screen: "maps" }}
                            
                          > */}
                          <Button
                            onPress={() =>
                              navigation.navigate("maps", {
                                sourcePlace: start,
                                destinationPlace: destination,
                              })
                            }
                          >
                            <Text
                              style={{
                                color: "#4d4d4d",
                                justifyContent: "center",
                                paddingTop: 6,
                                textDecorationLine: "underline",
                              }}
                            >
                              Show this Route?
                            </Text>
                          </Button>
                          {/* </Link> */}
                        </View>
                      );
                    }}
                  />
                  <Button
                    style={CommonStyle.blue_button}
                    onPress={handleSubmit}
                  >
                    <Text style={CommonStyle.button_text}> Add</Text>
                  </Button>
                </View>
              )}
            </>
          );
        }}
      />
    </View>
  );
};
