import React, { useState } from 'react';
import './css/Signup.css'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import axios from 'axios';

function Login({users}) {
    const [users1, setusers1] = useState(null); // Initialize users1 state

    const navigate =useNavigate()
    console.log(users);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password:''
    });
    console.log(formData);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const{email} = formData
        axios.post("/login",{"email":formData.email,"password":formData.password})
            // .then((response) => console.log(response))
            .then((data) => console.log("data",data.data))
            .catch((error) => console.log(error));
        const matches_email = users.find(user => user.email === formData.email)
        // console.log("result ",exist_email,match_password)
        if(matches_email){
            console.log(matches_email)
            if(matches_email.password === formData.password){
                console.log("inside")
                navigate("/")
            }
            else
                alert("wrong password")
        }
        else
            alert("Email not found")
    };

    return (
        <div className='Signup_outer'>
                {/* {users.map(user=>(
                    <h1>{user.username}</h1>
                ))} */}
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <div className='forgot-signup'>
                    <Link to="/forgot_password">Forgot password?</Link>
                    <Link to="/signup">Signup</Link>
                </div>
        </div>
    );
}

export default Login;