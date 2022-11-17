import { StyleSheet } from "react-native";

 export const CommonStyle = StyleSheet.create({
   header: {
     backgroundColor: "#E6BA33",
     alignSelf: "center",
     height: 65,
     margin: 0,
   },
   header_title: {
     fontWeight: "900",
     paddingStart: 35,
   },
   forms: {
     position: "relative",
     marginTop: 35,
     width: "85%",
     alignSelf: "center",
     padding: 15,
     backgroundColor: "#FAFAFA",
     borderRadius: 10,
     justifyContent: "center",
     alignContent: "center",
   },
   large_forms: {
     marginLeft: 3,
     marginRight: 3,
     marginTop: 40,
     backgroundColor: "#FAFAFA",
     borderRadius: 10,
     justifyContent: "center",
     alignContent: "center",
   },
   input_field: {
     backgroundColor: "#fff",
     marginTop: 10,
     marginBottom: 10,
   },
   picker: {
     borderBottomWidth: 2,
     borderBottomColor: "#E6BA33",
     width: "100%",
     justifyContent: "center",
     margin: 0,
     padding: 0,
     fontSize:12
   },
   flex_container: {
     width: "100%",
     margin: 5,
     alignContent: "space-around",
     display: "flex",
     flexDirection: "row",
     alignItems: "center",
     flexWrap: "wrap",
   },
   horizontal_row: {
     borderBottomColor: "#999999",
     borderBottomWidth: 1,
     width: "100%",
     marginBottom: 10,
     marginTop: 0,
   },
   fab: {
     position: "absolute",
     borderRadius: 40,
     backgroundColor: "#1926ff",
     justifyContent: "flex-end",
     alignSelf: "flex-end",
     bottom: 20,
     right: 15,
   },
   header_button: {
     backgroundColor: "#1926FF",
     borderRadius: 8,
     alignSelf: "flex-end",
     padding: 15,
     paddingTop: 10,
     paddingBottom: 10,
   },
   blue_button: {
     backgroundColor: "#1926FF",
     borderRadius: 8,
     alignSelf: "center",
   },
   button_text:{
    textAlign:'center',
    fontWeight:'bold',
    color:'#ffffff'
   }
 });