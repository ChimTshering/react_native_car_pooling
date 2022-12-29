import { AddVechileForm, LoggedInCred, registerUser } from '../models/model';
export type TravelStore={
  travelDetail?:AddVechileForm,
  allTravelers?:AddVechileForm[],
}

export type VechileStore = {
  isLoggedIn?:boolean,
  logInDriver?:LoggedInCred,
  registerUser?:registerUser[]|null
}