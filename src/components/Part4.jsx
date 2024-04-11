import React from 'react';
import Cardpart4 from "./Cardpart4"
import "./css/Part4.css"
import icon1 from "./images/Icon1.png"

export default function Part4(){
    return(
        <div className="outer_part4">
            <div className="heading_part4">
                <h3>Manage your entire community</h3>
                <h3>in a single system</h3>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className='card_part4'>
                <Cardpart4 
                    scr={icon1}
                    heading="Membership Organisations"
                    para="Our membership management software provides full automation of membership renewals and payments"
                />
                <Cardpart4 
                    scr={icon1}
                    heading="Membership Organisations"
                    para="Our membership management software provides full automation of membership renewals and payments"
                />
                <Cardpart4 
                    scr={icon1}
                    heading="Membership Organisations"
                    para="Our membership management software provides full automation of membership renewals and payments"
                />
            </div>
            
        </div>
    )
}