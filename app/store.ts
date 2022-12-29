import { configureStore } from "@reduxjs/toolkit";
import TravelReducer from "../source/features/travelingSlice";
import VechileReducer from '../source/features/driver-vechile-slice'
export const store = configureStore({
  reducer:{
    travel:TravelReducer,
    vechile:VechileReducer
  }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;