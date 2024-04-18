import React, { useState } from 'react';
import axios from 'axios';
import './css/Signup.css'

function Signup({users}) {
    console.log(users);
    const [formData, setFormData] = useState({
        name: '',
        email: ''
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
        const exist_email = users.some(user => user.email === formData.email)
        const exist_name = users.some(user => user.name === formData.name)
        if(exist_email){
            alert('Email already exists');
        }
        else if(exist_name){
            console.log(formData.name)
            alert('Name already exists');
        }
        else{
            axios.post('/api/data', formData)
            .then(response => {
                console.log(response.data);
                // Handle response if needed
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
            alert('Date inserted successfully');
        }
        
    };

    return (
        <div className='Signup_outer'>
                {/* {users.map(user=>(
                    <h1>{user.username}</h1>
                ))} */}
                <h1>Sign_up</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
        </div>
    );
}

export default Signup;
