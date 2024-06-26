import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './contexts/AuthContext.jsx'
import UserProvider from './contexts/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <AuthProvider>
      <App />
      </AuthProvider>
    </UserProvider>
  </React.StrictMode>,
)
