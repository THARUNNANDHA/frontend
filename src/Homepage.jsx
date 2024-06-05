import React from "react";
import Nav from "./components/Navbar"
import Carousel from "./Carousel"
import Belowcarasule from './Belowcarasule';
import Part4 from './Part4';

export default function Homepage(){
    var name = false;
    return(
        
        <div>
            {name &&
            <div>
                <Carousel />
                <Belowcarasule/>
                <Part4 />
            </div>
            }
            {!name &&
                <h1>login first</h1>
            }
        </div>
    )
}