import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-06rw3uj31omfki3w.us.auth0.com'
    clientId='Q6NR4TDT6WVDQPaYZ9wu4VmxfYZh9DSW'
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
