import React, {useState ,useEffect} from "react";
import Carousel from "./Carousel"
import Belowcarasule from './Belowcarasule';
import Part4 from './Part4';



export default function Homepage({ setSharedValue }){
    const [user ,setuser] = useState(null)
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/session_check");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                
                // setuser(data);
                console.log(data)
                if(data.id === "not exist"){
                    setuser(false)
                    return false;
                }

                setSharedValue(prevstate =>({
                    ...prevstate,
                    email:data.email,
                    password:data.password,
                    name:data.username
                }))


                console.log(data.id)
                setuser(true)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);
    if (user === null) {
        return <div>Loading...</div>; // Render loading state while fetching data
    }
    return(
        
        <div>
            {user &&
            <div>
                <Carousel />
                <Belowcarasule/>
                <Part4 />
            </div>
            }
            {!user &&
                <h1>login first</h1>
            }
        </div>
    )
}