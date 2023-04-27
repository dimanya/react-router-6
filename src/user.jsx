import { NavLink, useParams } from "react-router-dom";

const User = () => {
    const {userId} = useParams()
    
    return ( 
        <>
        <h1>User {userId}</h1>
        <ul>
            <li>
            <NavLink to="edit">User Edit</NavLink>
            </li>
            <li>
            <NavLink to="users">Users List</NavLink>
            </li>
        </ul>
    </>
     );
}
 
export default User;