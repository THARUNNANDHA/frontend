import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from "./App"
import Carousel from "./Carousel"
import Belowcarasule from './Belowcarasule';
import Part4 from './Part4';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Carousel />
    <Belowcarasule/>
    <Part4 /> */}
    <App />
  </React.StrictMode>
);

