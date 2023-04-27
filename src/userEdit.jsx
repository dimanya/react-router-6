import { NavLink, useNavigate, useParams } from "react-router-dom";

const UserEdit = () => {
    const {userId} = useParams()
    const navigate = useNavigate()
    function handleUserClick() {
        navigate(-1)
    }
    function handleForwardClick() {
        navigate(`/users/${Number(userId) + 1}`)
    }
    return ( 
        <>
        <h1>User Edit</h1>
        <ul>
            <li>
            <NavLink to="users">Users List</NavLink>
            </li>
            <li>
            <button onClick={handleUserClick} >User</button>
            </li>
            <li>
            <button onClick={handleForwardClick} >Next User</button>
            </li>
        </ul>
        </>
     );
}
 
export default UserEdit;