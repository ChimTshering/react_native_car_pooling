import { RootState } from './../../app/store';
import { useSelector } from 'react-redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoggedInCred, registerUser } from '../models/model';
import { RegisteredUsers } from '../models/registeredUsers.constent';
import { VechileStore } from '../models/store.model';

const initialState:VechileStore={
isLoggedIn:false,
registerUser:[],
logInDriver:undefined
}

export const VechileSlice = createSlice({
  name: "VechileSlice",
  initialState,
  reducers: {
    RegisterUser: (state, action: PayloadAction<registerUser>) => {
      state.logInDriver = action.payload;
      state.isLoggedIn= true;
    },
    LogUserIn:((state,action:PayloadAction<LoggedInCred>)=>{
      // console.log(action.payload,RegisteredUsers);
      if(state.logInDriver!==undefined){
        if (
          state.logInDriver.password === action.payload.password &&
          state.logInDriver.user_name === action.payload.user_name
        ) {
          state.logInDriver = action.payload;
          state.isLoggedIn = true;
        }
      }else{
      RegisteredUsers.forEach(user=>{
        if((user.password===action.payload.password)&&(user.user_name===action.payload.user_name)){
          state.logInDriver = action.payload;
          state.isLoggedIn=true;
        }
      })}
    }),
  },
});
export default VechileSlice.reducer;
export const {RegisterUser,LogUserIn}=VechileSlice.actions