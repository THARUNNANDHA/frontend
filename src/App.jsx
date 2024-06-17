import React, { useEffect, useState } from 'react';
import './css/index.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Nav from "./components/Navbar";
import Products_display from './Products_display';
import Signup from './Signup';
import Login from './Login';
import Forgotpassword from './Forgotpassword';
import Homepage from './Homepage';
import Admin from './Admin';
import axios from 'axios';
import Checksession from './hooks/Checksession';

export default function App() {

    const Usertracker = () => {
        const location = useLocation();

        useEffect(() => {
            const trackUser = async () => {
                try {
                    const resp = await axios.post("/user_tracker", { location: location.pathname, timestamp: new Date() });
                    console.log(resp.data);
                } catch (error) {
                    console.error("error", error);
                }
            };
            if (location.pathname !== "/admin") {
                trackUser();
            }
        }, [location]);

        return null;
    };

    return (
        <BrowserRouter>
            <Usertracker />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="product" element={<Products_display />} />
                <Route path="signup" element={<Signup />} />
                <Route path="admin" element={<Admin />} />
                <Route path="login" element={<Login />} />
                <Route path="forgot_password" element={<Forgotpassword />} />
            </Routes>
        </BrowserRouter>
    );
}
{/* <Route path="/" element={<Homepage setSharedValue={setSharedValue} />}>
                    <Route path="/" element={<Nav sharedValue={sharedValue} />}>
                    <Route index element={<Homepage setSharedValue={setSharedValue} />} />
                    <Route path="product" element={<Products_display setSharedValue={setSharedValue} />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="admin" element={<Admin setSharedValue={setSharedValue} />} />
                    <Route path="login" element={<Login />} />
                    <Route path="forgot_password" element={<Forgotpassword />} />
                </Route> */}