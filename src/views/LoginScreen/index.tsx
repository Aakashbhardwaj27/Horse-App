import React, {useState} from 'react'
import LoginForm from 'components/LoginForm'
import './index.scss'
import { Dispatch } from "redux"
import { useDispatch } from "react-redux";
import { Login } from 'redux/actions/actionCreators';

const LoginScreen=()=> {
    const [email,setEmail]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    const [rememberUser,setRememberUser]=useState<boolean>(false)
    const dispatch: Dispatch<any> = useDispatch();
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(Login(email,password,rememberUser))
       }

   return (
       <div className='formscreen-container'>
  <LoginForm  setEmail={setEmail} setPassword={setPassword} setRememberUser={setRememberUser} rememberUser={rememberUser} onSubmit={onSubmit}  />
       </div>
  )
}



export default LoginScreen