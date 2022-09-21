import * as actionTypes from '../actionConstants'
const persistenceKey:any =process.env.REACT_APP_PERSISTENCE_KEY
const initialState = {
 token:sessionStorage.getItem(persistenceKey) || '',
 horseData:[],
 shouldRefresh:false
}

export const loginReducer = (state = initialState,action: primaryAction): ResponseState => {
    switch (action.type) {
      case actionTypes.LOGIN:
       const data=action.token || ''
       if(action.rememberUser){
           sessionStorage.setItem(persistenceKey,data)
       }
       
     
       return {
            ...state,
          token:data,
        }
      case actionTypes.LOGOUT:
          sessionStorage.removeItem(persistenceKey)
          clearInterval('timer')
          return {
                token:'',
                hourseData:[]
              }
      case actionTypes.FETCH_HORSE_DATA:
        const horseData= action.horseData
        const horseDatas=horseData?.event==="start"? state.horseData?.filter((e:horseData)=>e.time===0):state.horseData
        const existingHorse=horseDatas?.find((e:horseData)=> e.horse.id===horseData?.horse.id);
        const returnData =
        {  ...state,
           horseData:
           existingHorse?
           [...horseDatas.filter((e:horseData)=>e.horse.id!==horseData?.horse.id),horseData]
            : 
           state?.horseData?.length>0?[...horseDatas,horseData]:[horseData]
        } 
      
          return returnData

      case actionTypes.API_TIMEOUT:
        return {
          ...state,shouldRefresh:action.shouldRefresh
        }
    }
    return state
  }
