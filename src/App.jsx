import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { RoutesHeader } from './routes/RoutesHeader';

function App() {

  return (
    <div id="app">
      <BrowserRouter forceRefresh={true}>
        <Header />
        <RoutesHeader />
      </BrowserRouter>
    </div>
  )
}

export default App;
