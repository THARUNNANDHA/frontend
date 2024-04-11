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
import App1 from './App1'


export default function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/data')
            .then(response => response.json())
            .then(data => { 
                setUsers(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return <App1 users={users}/>
}
// // {users.length === 0 ? (<p>Loading...</p>) : (<ul>{users.map(user => (<li key={user.id}>{user.username} - {user.email}</li>))}</ul>)}