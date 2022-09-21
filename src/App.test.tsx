import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import LoginScreen from './views/LoginScreen';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import reducer from 'redux/reducers/index';
import thunk from 'redux-thunk';

  const store:any = createStore(reducer, applyMiddleware(thunk));
  beforeEach(()=>{
    render(   <Provider store={store}><LoginScreen /></Provider>)
    
  })
  
  test('Login screen testing', async () => {
  
    const eMail = screen.getByTestId('email-input-element')
    const password = screen.getByTestId('password-input-element')
    userEvent.type(eMail, "test@gmail.com")
    userEvent.type(password, "test123")
    userEvent.click(screen.getByTestId('login-button-element'))

})