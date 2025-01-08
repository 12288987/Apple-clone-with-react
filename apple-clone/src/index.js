import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './asset/css/fontawesome.css'
import './asset/css/solid.css'
import './asset/bootstrap.css'
import './asset/style.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

