import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  reserveBtn: {
    height: 60,
    backgroundColor: "#E6BA33",
    alignSelf: "center",
    borderRadius: 9,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
searchBtn: {
    height: 40,
    backgroundColor: "#E6BA33",
    alignSelf: "center",
    borderRadius: 9,
    textAlign: "center",
    justifyContent: "center",
    marginBottom:20,
    padding:0

  },
  body: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  box: {
    width: "100%",
    height: "110%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    margin: 0,
  },
  button_text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  bg_img: {
    height: "60%",
    width: "100%",
    marginTop: 10,
    // marginBottom:15,
  },
  text_view: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 20,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "100%",
    height: "30%",
    margin: 0,
    marginBottom: 20,
    borderRadius: 10,
    position: "relative",
  },
  quote_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    padding: 4,
    fontStyle: "italic",
    width: "90%",
    textAlign: "center",
  },
});
