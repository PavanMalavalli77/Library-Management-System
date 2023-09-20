import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css';

const UserLogin = () => {
    let navigate = useNavigate()
    let login = () =>{
          navigate('/user/')
    }
    return ( 
        <div className="userLogin">
        <div className="form_containers_card">
                <h1>LOGIN AS USER</h1>
                <div className="forms_input">
                    <form onSubmit={login}>
                       <div className="email">
                            <input  type="email"  placeholder="email address"  required  />
                       </div>
                       <div className="password">
                            <input type="password"   placeholder="enter password"  required   />
                       </div>
                       <button className="btn btn-primary">Login</button>
                    </form>
                </div>
        </div>
    </div>
     );
}
 
export default UserLogin;