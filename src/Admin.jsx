import React, { useState, useEffect } from "react";
import Checksession from "./hooks/Checksession";
import './css/App.css';
import Navbar from "./components/Navbar";

export default function Admin() {
    const [loading, setloading] = useState(true)
    var user = false;
    const user_exist = Checksession('/session_check');
    if (user_exist.email == "admin@gmail.com") {
        user = true;
    }
    const [user_track, setuser_track] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/user_track");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log('Data fetched successfully:', data);
                setuser_track(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setloading(false);
            }
        };

        fetchData();

    }, []);
    if (loading) {
        return <div>Loading data...</div>;
    }

    return (
        <div>
            <Navbar user_data={user_exist} />
            <div className="admin_outer">
                <div>
                    {user &&
                        <div >
                            <div className="admin_values">
                                <div className="admin_components">
                                    <h3 style={{ margin: 0 }}>Total Visit</h3>
                                    <h1 style={{ margin: 0 }}>{user_track.total_count}</h1>
                                </div>
                                <div className="admin_components">
                                    <h3 style={{ margin: 0 }}>Total Users</h3>
                                    <h1 style={{ margin: 0 }}>{user_track.user_count}</h1>
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
        </div>

    )

}