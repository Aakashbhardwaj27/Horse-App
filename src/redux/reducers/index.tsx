import {loginReducer} from 'redux/reducers/loginReducer';
import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';

const reducers:any = {
  session: sessionReducer,
  loginReducer:loginReducer
};

const reducer = combineReducers(reducers);
export default loginReducer