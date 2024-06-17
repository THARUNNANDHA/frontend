import { useState, useEffect } from "react";
export default function Checksession(url) {
    const [sharedValue, setSharedValue] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [user, setuser] = useState(null)
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
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
    }, [url]);
    return sharedValue
}