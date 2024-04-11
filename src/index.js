import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import Nav from "./components/Navbar"
import Carousel from "./components/Carousel"
import Belowcarasule from './components/Belowcarasule';
import Part4 from './components/Part4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Nav />
    <Carousel />
    <Belowcarasule/>
    <Part4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
