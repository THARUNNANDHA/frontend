import React from 'react';
import Productdisplaycard from "./components/Productdisplaycard"
// import im from "./images/rafiki.png"
import Createitem from "./components/Createitem"


export default function Products_display(props){
    const product_list =props.users.map(user =>{
        if (!user.image_src) {
            // Handle case where image_src is undefined
            return null; // Skip rendering this product card
        }
        return (
            <Productdisplaycard 
                key={user.id}
                src={require(`./images/${user.image_src}`)}
                heading={user.title}
                para={user.description}
                price={user.price}
                id={user.id}
            />
        )
    })
    return(
        <div className='all_outer_product_data' >
            <Createitem data={props.users}/>
            <div className='outer_product_data'>
                {product_list}
            </div>
            
        </div>
            
    )
}