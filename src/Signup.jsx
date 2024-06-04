// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './css/Signup.css'
// function Validate_user({ token }) {
//     useEffect(() => {
//         const fetchData = () => {
//             fetch(`/validate_user/${token}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log(data);
//                 })
//                 .catch(error => console.error("Error fetching:", error));
//         };
//         fetchData();
//         const interval = setInterval(fetchData, 2000);
//         return () => clearInterval(interval);
//     }, [token]);
// }

// function Signup({users}) {
//     console.log(users);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password:''
//     });

    
//     // console.log(formData);
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {

//         e.preventDefault();
//         // const{email} = formData
//         const exist_email = users.some(user => user.email === formData.email)
//         const exist_name = users.some(user => user.name === formData.name)
//         console.log((formData.password).length)
//         if(exist_email){
//             alert('Email already exists');
//         }
//         else if(exist_name){
//             console.log(formData.name)
//             alert('Name already exists');
//         }
//         else{
//             axios.post('/api/data', formData)
//             .then(response => {
//                 console.log(response.data);
//                 // Handle response if needed
//             })
//             .catch(error => {
//                 console.error('Error sending data:', error);
//             });
//             alert('Date inserted successfully');
//         }
        
//     };
    

//     return (
//         <div className='Signup_outer'>
//                 {/* {users.map(user=>(
//                     <h1>{user.username}</h1>
//                 ))} */}
//                 <h1>Sign_up</h1>
//                 <form onSubmit={handleSubmit}>
//                     <label>Name:</label>
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} />
//                     <label>Email:</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} />
//                     <label>Password</label>
//                     <input type="password" name="password" value={formData.password} onChange={handleChange} />
//                     <button type="submit">Submit</button>
//                 </form>
//         </div>
//     );
// }

// export default Signup;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Signup.css';
import { useNavigate } from 'react-router-dom';


function Signup({ users }) {

    const[validated_state,setvalidated_state] = useState([])
    const navigate = useNavigate();
    console.log("users",users);
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
        const exist_email = users.some(user => user.email === formData.email);
        const exist_name = users.some(user => user.name === formData.name);
        if (exist_email) {
            alert('Email already exists');
        } else if (exist_name) {
            alert('Name already exists');
        } else {
            axios.post('/api/data', formData)
                .then(response => {
                    console.log(response.data);
                    // Handle response if needed
                    alert('Data inserted successfully');
                })
                .catch(error => {
                    console.error('Error sending data:', error);
                });
        }
        const fetchData = () => {
            console.log("formdata",formData.email)
            fetch(`/validated_data`)
            
                .then(response => response.json())
                .then(data => {
                    console.log("validated data",data);
                    if(data){
                        var exist = data.find(item => item.email===formData.email)
                        if(exist){
                            console.log("inside fetch",exist)
                            navigate('/');
                            clearInterval(interval);
                        }
                    }
                })
                .catch(error => console.error("Error fetching:", error));
        };
        fetchData();
        const interval = setInterval(fetchData, 6000);
        return () => clearInterval(interval);
    };


        
    
    return (
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
    );
}

export default Signup;

