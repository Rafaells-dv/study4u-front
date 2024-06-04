import React, {useContext} from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes  from './routes/PublicRoutes';
import  PrivateRoutes  from './routes/PrivateRoutes';
import { AuthContext } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  const { auth } = useContext(AuthContext)

  return (
    <>
      <Router>
        {auth ? <><PrivateRoutes /></> : <><Header /><PublicRoutes /></>}
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;
