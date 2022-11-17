import { Link } from "@react-navigation/native";
import { FAB } from "react-native-paper";
import { CommonStyle } from "../styles/common.style";

export const FActionButton = ({navigation}:any)=>{
  return (
    <Link to={{ screen: "add_vechile" }} style={CommonStyle.fab}>
      <FAB
        icon="plus"
        color="#ffffff"
        animated={true}
        style={CommonStyle.fab}
      />
    </Link>
  );
}