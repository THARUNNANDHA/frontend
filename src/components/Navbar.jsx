// import React from 'react';
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import icon from "../images/Icon.png"
// import "../css/Navbar.css"

// export default function Navbar(){
// return(
//     <div className='outer'>
//         <div className='logo_img'>
//             <img src={icon} alt="" />
//             <h3>Nexcent</h3>
//         </div>
//         <div>
//             <ul className='list_items'>
//                 <li>Home</li>
//                 <li>Service</li>
//                 <li>Feature</li>
//                 <li>Product</li>
//                 <li>Testimonial</li>
//                 <li>FAQ</li>
//             </ul>
//         </div>
//         <div className='signin_login'>
//             <button className='login_button'>Login</button>
//             <button className='sign_button'>Sign up</button>
//         </div>
//     </div>
// )
// }
import React from 'react';
import { Outlet , Link} from 'react-router-dom';
import icon from "../images/Icon.png"
import "../css/Navbar.css"
import axios from 'axios';

export default function Navbar({ sharedValue }) {
    
    console.log(sharedValue.email,sharedValue.password,sharedValue.name)
    if (sharedValue.email === ""){
        var logedin=true;
    }
    const logout = ()=>{
        try{
            axios.get(`/logout`)
            .then(response => {
                console.log(response.data.success==="logged out");
                if (response.data.success==="logged out"){
                    window. location. reload();
                }
            })
            
        }
        catch(e){
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
                    </ul>
                </div>

                {logedin && <div className='signin_login'>
                    <Link to="/login"><button className='sign_button'>Login</button></Link>
                    <Link to="/signup"><button className='login_button'>Sign up</button></Link>
                </div>
                }
                {!logedin && <div className='signin_login'>
                    <button className='sign_button'>{sharedValue.name}</button>
                    <button onClick={logout} className='login_button'>logout</button>
                </div>
                }
            </div>
            <Outlet/>
        </div>
    );
}