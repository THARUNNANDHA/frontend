// import React, { useState, useEffect } from 'react';

// function App() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetch('/data')
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data); // Log the data received from API
//                 setUsers(data);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);
//     // depedency array [] is is initilized to run it once if it is mot initilized then the useeffect runs at every state of the fetch
//     return (
//         <div>
//             <h1>Users</h1>
//             {users.length === 0 ? (
//                 <p>Loading...</p>
//             ) : (
//                 <ul>
//                     {users.map(user => (
//                         <li key={user.id}>{user.username} - {user.email}</li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// export default App;

import React, { useState, useEffect } from 'react';

export default function App(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(props.api);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [props.api]);
    
    return <props.func users={users}/>;
    // return <Route element={<props.func users={users} />} />;
}


// // {users.length === 0 ? (<p>Loading...</p>) : (<ul>{users.map(user => (<li key={user.id}>{user.username} - {user.email}</li>))}</ul>)}