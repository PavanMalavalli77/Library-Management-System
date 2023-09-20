import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/adminLogin.css';

const AdminLogin = () => {
    let[email,setEmail] = useState('')
    let[password,setPassword] = useState('')
    let navigate = useNavigate()

    let login = (e) => {
            e.preventDefault();
            let data = {email,password}
            if ( email == "admin@gmail.com" && password == 7777 ) {
                navigate('/admin/')
            } else {
                alert('Invalied credentials')
            }
    }
    return ( 
        <div className="adminLogin">
            <div className="form_container_card">
                    <h1>LOGIN AS ADMIN</h1>
                    <div className="form_input">
                        <form onSubmit={login}>
                           <div className="email">
                                <input  type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email address" className="" />
                           </div>
                           <div className="password">
                                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter password" className="" />
                           </div>
                           <button className="btn btn-primary"><b>Login</b></button>
                        </form>
                    </div>
            </div>
        </div>
     );
}

export default AdminLogin;