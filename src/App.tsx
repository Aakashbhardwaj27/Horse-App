import './styles/App.scss';
import LoginScreen from 'views/LoginScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux"
import Dashboard from 'views/Dashboard';



const App = () => {

  const token = useSelector(
    (state: { token: string }) => state.token
  )


  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={token ? <Dashboard /> : <LoginScreen />} />
          <Route path="/dashboard" element={token ? <Dashboard /> : <LoginScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
