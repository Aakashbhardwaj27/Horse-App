import { applyMiddleware, compose, createStore } from 'redux';
import reducer from 'redux/reducers/index';
import thunkMiddleware from 'redux-thunk';

  
import { sessionService } from 'redux-react-session';
export const store:any = createStore(reducer, compose(applyMiddleware(thunkMiddleware)));
const validateSession = (session:any) => {
  // check if your session is still valid
  

  return true;
}

const options = { refreshOnCheckAuth: false, redirectPath: '/bg', driver: 'COOKIES', validateSession,expires:1000*60*5 };
sessionService.initSessionService(store,options)
  .then(() => console.log('a session was refreshed from your storage'))
  .catch(() => console.log('there is no session in your storage'));
