import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import icon from "../images/Icon.png"
import "../css/Navbar.css"
import axios from 'axios';

export default function Navbar({ user_data }) {
    var logedin = false;
    var admin = false;
    console.log(user_data.email, user_data.password, user_data.name)
    if (user_data.email !== "") {
        logedin = true;
        console.log("inside nav")
    }
    if (user_data.email === "admin@gmail.com") {
        admin = true;
    }

    const logout = () => {
        try {
            axios.get(`/logout`)
                .then(response => {
                    console.log(response.data.success === "logged out");
                    if (response.data.success === "logged out") {
                        window.location.reload();
                    }
                })

        }
        catch (e) {
            console.log("error in logout", e)
        }
    }
    return (
        <div>
            <div className='outer'>
                <div className='logo_img'>
                    <img src={icon} alt="" />
                    <h3>Nexcent</h3>
                </div>
                <div>
                    <ul className='list_items'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Products</Link></li>
                        {admin && <li><Link to="/admin">Admin</Link></li>}
                    </ul>
                </div>

                {!logedin && <div className='signin_login'>
                    <Link to="/login"><button className='sign_button'>Login</button></Link>
                    <Link to="/signup"><button className='login_button'>Sign up</button></Link>
                </div>
                }
                {logedin && <div className='signin_login'>
                    <button className='sign_button'>{user_data.name}</button>
                    <button onClick={logout} className='login_button'>logout</button>
                </div>
                }
            </div>
            <Outlet />
        </div>
    );
}