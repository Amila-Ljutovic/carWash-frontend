import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './navigation';
import axios from 'axios';
import { Provider } from 'react-redux'
import store from './redux/store'

let token = localStorage.getItem('token')
//axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.baseURL = 'https://carwash-backend-1.herokuapp.com/'
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

axios.interceptors.request.use(request => {
  console.log(request);
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
