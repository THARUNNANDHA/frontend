import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import icon from "../images/Icon.png"
import "../css/Navbar.css"

export default function Navbar(){
return(
    <div className='outer'>
        <div className='logo_img'>
            <img src={icon} alt="" />
            <h3>Nexcent</h3>
        </div>
        <div>
            <ul className='list_items'>
                <li>Home</li>
                <li>Service</li>
                <li>Feature</li>
                <li>Product</li>
                <li>Testimonial</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className='signin_login'>
            <button className='login_button'>Login</button>
            <button className='sign_button'>Sign up</button>
        </div>
    </div>
)
}