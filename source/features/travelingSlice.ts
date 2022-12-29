import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "../models/model";
import { RegisteredRide } from "../models/registeredUsers.constent";
import { TravelStore } from "../models/store.model";

const initialState:TravelStore={
travelDetail:undefined,
allTravelers:[]
}

export const TravelingSlice = createSlice({
  name:'travelingSlice',
  initialState,
  reducers:{
    
  }
})
export default TravelingSlice.reducer;