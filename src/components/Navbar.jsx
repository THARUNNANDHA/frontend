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

export default function Navbar() {
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

                        {/* Additional menu items can be added here */}
                    </ul>
                </div>

                <div className='signin_login'>
                    <Link to="/product"><button className='login_button'>Login</button></Link>
                    <button className='sign_button'>Sign up</button>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}