import React, { useState, useEffect } from "react";
import Carousel from "./Carousel"
import Belowcarasule from './Belowcarasule';
import Part4 from './Part4';
import Navbar from "./components/Navbar";
import Checksession from "./hooks/Checksession";

export default function Homepage() {
    const user_exist = Checksession('/session_check');
    var user = false;
    if (user_exist.email != "") {
        user = true;
    }
    if (user === null) {
        return <div>Loading...</div>; // Render loading state while fetching data
    }
    return (

        <div>
            {user &&
                <div>
                    <Navbar user_data={user_exist} />
                    <Carousel />
                    <Belowcarasule />
                    <Part4 />
                </div>
            }
            {!user &&
                <div>
                    <Navbar user_data={user_exist} />
                    <h1>login first</h1>
                </div>
            }
        </div>
    )
}