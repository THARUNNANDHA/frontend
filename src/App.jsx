import React, { useEffect, useState } from 'react';
import './css/index.css';
import Fetchuserdata from './hooks/Fetchuserdata';
import Nav from "./components/Navbar"
// import Signup from './Signup'
import Products_display from './Products_display';
import Signup from './Signup';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Login';
import Forgotpassword from './Forgotpassword'
import Homepage from './Homepage';
import axios from 'axios';
import Admin from './Admin';


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
                    <Route path="product" element={<Products_display setSharedValue={setSharedValue} />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="admin" element={<Admin setSharedValue={setSharedValue} />} />
                    <Route path="login" element={<Login />} />
                    <Route path="forgot_password" element={<Fetchuserdata api="/user_data" func={Forgotpassword} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

