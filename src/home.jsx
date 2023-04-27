import { NavLink } from "react-router-dom";

const Home = () => {
    return ( 
        <>
        <h1>Home</h1>
        <NavLink to="/users">User List</NavLink>
        </>
     );
}
 
export default Home;