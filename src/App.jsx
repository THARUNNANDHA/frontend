import React from 'react';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import Fetchuserdata from './hooks/Fetchuserdata';
import Nav from "./components/Navbar"
import Carousel from "./Carousel"
import Belowcarasule from './Belowcarasule';
import Part4 from './Part4';
// import Signup from './Signup'
import Products_display from './Products_display';
import Signup from './Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={
                        <div>
                            <Carousel />
                            <Belowcarasule/>
                            <Part4 />
                        </div>
                    }/>
                    <Route path="product" element={<Fetchuserdata api="/product_item_data" func={Products_display} />} />
                    <Route path="signup" element ={<Fetchuserdata api="/user_data" func={Signup} />} />  
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <Nav /> */}
//     <Fetchuserdata 
//       api='/data'
//       func={Products_display} 
//     />
//     {/* <Nav />
//     <Carousel />
//     <Belowcarasule/>
//     <Part4 /> */}
    
//   </React.StrictMode>
// );

reportWebVitals();
