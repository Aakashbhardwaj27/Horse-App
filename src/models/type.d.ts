interface FormProps {
    setEmail:React.Dispatch<React.SetStateAction<string>>;
    setPassword:React.Dispatch<React.SetStateAction<string>>;
    setRememberUser:React.Dispatch<React.SetStateAction<boolean>>;
    rememberUser:boolean;
    onSubmit:(e:React.FormEvent)=>void;
   }
  
  type LoginState = {
      token:string
  }

  type ResponseState=Promise
 
  type horseData = {
    event:string,
    horse:{
      id:number,
      name:string
    },
    time:number
  }

  type primaryAction = {
      type:string
      email:string
      password?:string
      token?:string
      horseData?:horseData
      rememberUser?:boolean
      shouldRefresh?:boolean
     
  }

  type LogoutAction = {
    type:string
  }

  type DispatchType = (args: primaryAction|LogoutAction) => primaryAction|LogoutAction