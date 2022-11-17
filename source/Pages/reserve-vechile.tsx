import { Picker } from "@react-native-picker/picker";
import { useCallback, useMemo, useState } from "react";
import { Field, Form } from "react-final-form";
import { ScrollView, Text, View } from "react-native";
import { Button, List } from "react-native-paper";
import { FActionButton } from "../Components/fab";
import { dzongkhag } from "../models/place.constant";
import { CommonStyle } from "../styles/common.style";
import { HomeStyles } from "../styles/home.style";

export const ReserveVechile = ({ navigation }: any) => {
  const [dzo, setDzo] = useState("");
  const [gewog, setGewog] = useState("");
  const dzongkhags = useMemo(() => {
    return dzongkhag.map((bhutan) => bhutan.name);
  }, []);
  const HandleSearch = (value: Record<string, any>) => {
    console.log(value);
  };

  return (
    <>
      <View style={CommonStyle.large_forms}>
        <Form onSubmit={(value)=>HandleSearch(value)} render={({handleSubmit,form,values})=>{return (
          <>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                margin: 0,
              }}
            >
              <View
                style={{
                  width: "50%",
                  margin: 0,
                }}
              >
                <Text style={{ marginLeft: 10, fontWeight: "900" }}>
                  Going From
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
                    name="going_dzongkhag"
                    render={({ input }) =>{
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
                    )}}
                  />
                  <Field
                    name="going_gewog"
                    render={({ input }) =>{ 
                      return(
                      <Picker
                        selectedValue={input.value}
                        onValueChange={(ItemValue)=>{input.onChange(ItemValue);}}
                        style={CommonStyle.picker}
                      >
                        <Picker.Item
                          label="Gewog"
                          value=""
                          style={{ fontWeight: "600" }}
                        />
                        {dzongkhag
                          .filter((dzongkhag) => dzongkhag.name === values.going_dzongkhag)
                          .map((dzong) =>
                            dzong.gewogs.map((gewog) => {
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
                    )}}
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
                  Going To
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
                    name="reaching_dzongkhag"
                    render={({ input }) => (
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
                            // setDzo(dzo);
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
                    )}
                  />
                  <Field
                    name="reaching_gewog"
                    render={({ input }) => (
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
                          .filter((dzongkhag) => dzongkhag.name === values.reaching_dzongkhag)
                          .map((dzong) =>
                            dzong.gewogs.map((gewog) => {
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
                    )}
                  />
                </View>
              </View>
              <View style={CommonStyle.horizontal_row} />
              <Button
                style={HomeStyles.searchBtn}
                onPress={handleSubmit}
              >
                <Text style={HomeStyles.button_text}>Search</Text>
              </Button>
            </View>
          </>
        );}}/>
       
        <View>
          <ScrollView
            style={{
              width: "100%",
              height: "50%",
              borderColor: "#999999",
              borderWidth: 1,
              margin: 0,
              padding: 0,
            }}
            scrollEnabled
            showsVerticalScrollIndicator
          >
            <List.Item
              title={`Bolero`}
              description={`Thimphu to Phuntsholing  Avaibable Seat: 3`}
              style={{ alignItems: "flex-end" }}
              onPress={() =>
                navigation.navigate("ride_detail", { vechileName: "Bolero" })
              }
            />
            <View style={CommonStyle.horizontal_row} />
            <List.Item
              title={`Van`}
              description={`Thimphu to Phuntsholing  Avaibable Seat: 3`}
              style={{ alignItems: "flex-end" }}
              onPress={() =>
                navigation.navigate("ride_detail", { vechileName: "Van" })
              }
            />
            <View style={CommonStyle.horizontal_row} />
          </ScrollView>
        </View>
      </View>
      <FActionButton />
    </>
  );
};
