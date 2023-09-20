import { Link } from "react-router-dom";

const UserNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="navbar01">
                <div className='nav_img'>
                    <h1>User Portal</h1>
                </div>
                <div className='Nav_links'>
                    <ul> 
                        <li><Link to="/user/" >Dashboard</Link></li>
                        <li><Link to="/user/book-list" >Book List</Link></li>
                        <li><Link to="/" >LogOut   </Link></li>
                 </ul>
                </div>
            </div>
        </div>
     );
}
 
export default UserNavbar;