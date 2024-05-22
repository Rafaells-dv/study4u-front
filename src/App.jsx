import React, {useContext} from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes  from './routes/PublicRoutes';
import  PrivateRoutes  from './routes/PrivateRoutes';
import { AuthContext } from './contexts/AuthContext';

function App() {

  const { auth } = useContext(AuthContext)

  return (
    <Router>
      {auth ? <><PrivateRoutes /></> : <><Header /><PublicRoutes /></>}
    </Router>
  )
}

export default App;
