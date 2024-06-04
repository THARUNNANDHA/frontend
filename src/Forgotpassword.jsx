import React, { useState } from 'react';
import './css/Signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Forgotpassword({users}){
    let flask_otp
    const navigate =useNavigate()
    const [email_input, setemail_input] = useState(true)
    const [otp_input, setotp_input] = useState(false)
    const [password_input, setpassword_input] = useState(false)
    const [user_data ,setuser_data] = useState({
        email : "",
        password : "",
        confirm_password :"",
        otp : 0
    })
    // console.log(users)
    // console.log(user_data)

    // Declare a new state variable
    const [flaskOtpState, setFlaskOtpState] = useState(null);

    const check_email = async (e) => {
        e.preventDefault();
        const if_email_exist = users.find(user => user.email === user_data.email);
        if(if_email_exist){
            try {
                const response = await axios.post('/change_password_otp', if_email_exist);
                flask_otp = response.data.otp;
                // Store the value in the state variable
                setFlaskOtpState(flask_otp);
                console.log(flask_otp);
                alert('Data inserted successfully');
            } catch (error) {
                console.error('Error sending data:', error);
            }
            setemail_input(!email_input);
            setotp_input(!otp_input);
        }
        else{
            alert("email not found sign_up instead");
        }
    }

    
    const handleChange = (e) => {
        setuser_data({
            ...user_data,
            [e.target.name]: e.target.value
        });
    };

    const check_otp = (e) => {
        e.preventDefault()
        console.log(flaskOtpState,user_data.otp)
        const otp = parseInt(user_data.otp)
        if(flaskOtpState === otp){
            setotp_input(!otp_input)
            setpassword_input(!password_input)
        }
        else{
            alert("wrong otp")
        }
    }
    const change_password=(e)=>{
        e.preventDefault()
        console.log(user_data.password,user_data.confirm_password)
        if(user_data.password===user_data.confirm_password){
            console.log("inside")
            axios.post('/change_password', user_data)
                .then(response => {
                    console.log(response.data);
                    alert("Password changed successfully login with new password");
                })
                .catch(error => {
                    console.error('Error sending data:', error);
                });
                navigate("/login")
        }
        else{
            alert("check the password")
        }
    }
    return(
        <div className="forgot_outer">
            {email_input && <form onSubmit={check_email}>
               <h1>Enter your email</h1>
               <input name="email" value={user_data.email} type="text" onChange={handleChange} />
               <button type='submit'>Send otp</button>

            </form>}

            {otp_input && <form onSubmit={check_otp}>
               <h1>Enter your OTP</h1>
               <input name="otp" value={user_data.otp} type="number" onChange={handleChange}/>
               <button type='submit'>Submit otp</button> 
            </form>}

            {password_input && <form onSubmit={change_password}>
               <h1>Update password</h1>
               <h4>New password</h4>
               <input type="text" value={user_data.password} name="password" onChange={handleChange}/>
               <h4>Confirm password</h4>
               <input type="text" value={user_data.confirm_password} name="confirm_password" onChange={handleChange}/>
               <button type='submit'>Change password</button>  
            </form>}
            
        </div>
    )

}