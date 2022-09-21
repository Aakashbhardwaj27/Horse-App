import axios from "axios"
import HttpStatusCode from "constants/HttpStatusCode"
import * as actionTypes from "../actionConstants"
const url =process.env.REACT_APP_API_ENDPOINT
export function Login(email: string,password:string,rememberUser:boolean) {
  const action: primaryAction = {
    type: actionTypes.LOGIN,
    email:email,
    password:process.env.REACT_APP_PROXY_PASSWORD,
    rememberUser:rememberUser
  }
  return LoginHttpRequest(action)
}

export function Logout() {
    const action: LogoutAction = {
      type: actionTypes.LOGOUT
    }
    return async(dispatch: DispatchType)=>{dispatch(action)}
  }

export function getHourseData(token:string){
  const action={
    type: actionTypes.FETCH_HORSE_DATA,
    token:token
  }
  return HorseDataHttpRequest(action)
}


export function LoginHttpRequest(action: primaryAction) {
  return async(dispatch: DispatchType) => {
     axios.post(`${url}/auth`,{email:action.email,password:action.password})
     .then((res)=>{
      if(res.status===HttpStatusCode.OK) {
      dispatch({type:action.type,token:res.data.token,rememberUser:action.rememberUser})
      }else{
        console.log(res.statusText)
      }
    })
     .catch((err)=>console.log(err))
  }
}

export function HorseDataHttpRequest(action:{type:string,token:string}) {
  return async(dispatch:(args:{type:string,horseData:horseData,shouldRefresh:boolean})=>{token:string}) => {
    const config = {
      headers: { Authorization: `Bearer ${action.token}` }
  };
     axios.get(`${url}/results`,config)
     .then((res)=>{
      if(res.status===HttpStatusCode.OK) {
        dispatch({ type: action.type,horseData:res.data,shouldRefresh:false});
      }
      else if(res.status===HttpStatusCode.NO_CONTENT){
        dispatch({type:actionTypes.API_TIMEOUT,horseData:res.data,shouldRefresh:true})
      }
    })
    .catch((err)=>console.log(err))
}}


