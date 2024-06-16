import React, { useState, useEffect } from "react";
import Checksession from "./hooks/Checksession";
import './css/App.css';

export default function Admin({ setSharedValue }) {
    const [loading, setloading] = useState(true)
    const user = Checksession('/session_check', setSharedValue);
    const [user_data, setuser_data] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/user_track");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log('Data fetched successfully:', data);
                setuser_data(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setloading(false); // Set loading to false after fetch attempt
            }
        };

        fetchData();
        // This logs immediately, user_data is initially empty
    }, []);
    if (loading) {
        return <div>Loading data...</div>; // Render loading state while fetching data
    }
    if (user === null) {
        return <div>Loading...</div>; // Render loading state while fetching data
    }
    return (
        <div className="admin_outer">
            <div>
                {user &&
                    <div >
                        <div className="admin_values">
                            <div className="admin_components">
                                <h3 style={{ margin: 0 }}>Total Visit</h3>
                                <h1 style={{ margin: 0 }}>{user_data.total_count}</h1>
                            </div>
                            <div className="admin_components">
                                <h3 style={{ margin: 0 }}>Total Users</h3>
                                <h1 style={{ margin: 0 }}>{user_data.user_count}</h1>
                            </div>
                            <div className="admin_components">
                                <h3 style={{ margin: 0 }}>Sales</h3>
                                <h1 style={{ margin: 0 }}>{ }</h1>

                            </div>
                        </div>
                    </div>}
                {!user &&
                    <div className="admin_values">
                        <h1>login needed</h1>
                    </div>}
            </div>
        </div >

    )

}