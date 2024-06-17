import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Signup.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Checksession from './hooks/Checksession';

function Signup() {
    const user_exist = Checksession('/session_check');
    const [validated_state, setvalidated_state] = useState([])
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/signin', formData)
            .then(response => {
                if (response.data.fail) {
                    console.log(response.data.fail);
                    alert(response.data.fail);
                }
                else if (response.data.success) {
                    console.log(response.data.success);
                    alert(response.data.success);
                    navigate('/login');
                }
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    }


    return (
        <div>
            <Navbar user_data={user_exist} />
            <div className='Signup_outer'>
                <h1>Sign_up</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;

