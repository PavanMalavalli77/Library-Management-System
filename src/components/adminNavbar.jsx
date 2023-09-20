import { Link } from 'react-router-dom';
import '../styles/adminNavbar.css'

const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="navbar01">
                <div className='nav_img'>
                    <h1>Admin Portal</h1>
                </div>
                <div className='Nav_links'>
                    <ul> 
                        <li><Link to="/admin/" >Dashboard</Link></li>
                        <li><Link to="/admin/add-book" >Add Books</Link></li> 
                        <li><Link to="/admin/add-user" >Add Users</Link></li>
                        <li><Link to="/admin/book-list" >Book List</Link></li>
                        <li><Link to="/admin/user-list" >User List</Link></li>
                        <li><Link to="/" >LogOut   </Link></li>
                 </ul>
                </div>
            </div>
        </div>
     );
}
 
export default AdminNavbar;