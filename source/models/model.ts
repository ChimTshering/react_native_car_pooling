export type HeaderType = {
  title: string;
  navigation?:any
};
export type ErrorName = {
  name:string,
  errors?:string|undefined
};
export type ReserveModel = {
  register:boolean,
  setRegister:(register:boolean)=>void
}
export type MapRouteProps = {
  showRoute:boolean,
  setShowRouteMap:(route:boolean)=>void
}
export type AddVechileForm = {
  ref_id?: string;
  driver_name: string;
  driver_email: string;
  phone_number: string;
  lisence_number: string;
  destination_dzo: string;
  destination_gewog: string;
  departure_dzo: string;
  departure_gewog: string;
  vechile_name: string;
  vechile_number: string;
  available_seat?: number;
  show_route:boolean;
  start?:Start
  destination?:Start
};
export type Start = {
  name:string
  latitude:number
  longitude:number
}
export type LoggedInCred = {
  user_name:string,
  password:string
}
export type registerUser = {
  user_name:string,
  email:string,
  phone_number:number
  password:string,
  confirm_password?:string,
};
export type SuccessModal = {
  title:string;
  body:string;
  showModel:boolean
  setShowModel:(show:boolean)=>void
};