import { Field } from "react-final-form";
import { Text, View } from "react-native";
import { ErrorName } from "../models/model";

export const Error = ({ name }: ErrorName) => {
  return (
    <Field name={name} subscription={{ error: true, touched: true }}>
      {({ meta: { error, touched } }) => {
        return error && touched ? (
          <View>
            <Text style={{ color: "#FF0000" }}>{error}</Text>
          </View>
        ) : (
          <></>
        );
      }}
    </Field>
  );
};
