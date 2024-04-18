import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import Fetchuserdata from './hooks/Fetchuserdata';
// import Nav from "./components/Navbar"
// import Carousel from "./Carousel"
// import Belowcarasule from './Belowcarasule';
// import Part4 from './Part4';
// import Signup from './Signup'
import Products_display from './Products_display';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Nav /> */}
    <Fetchuserdata 
      api='/data'
      func={Products_display} 
    />
    {/* <Nav />
    <Carousel />
    <Belowcarasule/>
    <Part4 /> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
