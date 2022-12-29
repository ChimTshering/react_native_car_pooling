import { View } from "react-native";
import { Button, Dialog, Paragraph } from "react-native-paper";
import { SuccessModal } from "../models/model";

export const SuccessDialog = ({title,body,showModel,setShowModel}:SuccessModal)=>{
  return(<View>
<Dialog visible ={showModel}>
<Dialog.Title>{title}</Dialog.Title>
<Dialog.Content>
  <Paragraph>{body}</Paragraph>
</Dialog.Content>
<Dialog.Actions>
  <Button onPress={()=>setShowModel(false)}>Ok</Button>
</Dialog.Actions>

</Dialog>
  </View>);
}