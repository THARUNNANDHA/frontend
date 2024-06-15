import React, { useState, useEffect } from "react";


export default function Admin({ setSharedValue }) {
    const [user, setuser] = useState(null)
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
                if (data.id === "not exist") {
                    setuser(false)
                    return false;
                }

                setSharedValue(prevstate => ({
                    ...prevstate,
                    email: data.email,
                    password: data.password,
                    name: data.username
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
    return (
        <div>
            {user &&
                <div>
                    <h1>hello</h1>
                </div>}
            {!user &&
                <div>
                    <h1>login needed</h1>
                </div>}
        </div>

    )

}