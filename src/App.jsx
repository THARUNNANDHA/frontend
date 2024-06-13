import React, { useEffect, useState } from 'react';
import './css/index.css';
import Fetchuserdata from './hooks/Fetchuserdata';
import Nav from "./components/Navbar"
import Carousel from "./Carousel"
import Belowcarasule from './Belowcarasule';
import Part4 from './Part4';
// import Signup from './Signup'
import Products_display from './Products_display';
import Signup from './Signup';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Login';
import Forgotpassword from './Forgotpassword'
import Homepage from './Homepage';
import axios from 'axios';
export default function App() {
    const Usertracker = () => {
        const location = useLocation();

        useEffect(() => {
            const trackUser = async () => {
                try {
                    const resp = await axios.post("/user_tracker", { location: location.pathname, timestamp: new Date() });
                    console.log(resp);
                } catch (error) {
                    console.error("error", error);
                }
            };
            trackUser();
        }, [location]);

        return null;
    };

    const [sharedValue, setSharedValue] = useState({
        name: "",
        email: "",
        password: ""
    });
    return (
        <BrowserRouter>
            <Usertracker />
            <Routes>
                <Route path="/" element={<Nav sharedValue={sharedValue} />}>
                    <Route index element={
                        <div>
                            <Homepage setSharedValue={setSharedValue} />
                        </div>
                    } />
                    <Route path="product" element={<Fetchuserdata api="/product_item_data" func={Products_display} />} />
                    <Route path="signup" element={<Fetchuserdata api="/user_data" func={Signup} />} />
                    <Route path="login" element={<Fetchuserdata api="/user_data" func={Login} />} />
                    <Route path="forgot_password" element={<Fetchuserdata api="/user_data" func={Forgotpassword} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

