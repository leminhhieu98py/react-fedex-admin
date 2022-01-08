import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './assets/css/index.css'

import Authentication from './components/authentication/Authentication'
// import Layout from './components/layout/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Authentication />
    {/* <Layout /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
