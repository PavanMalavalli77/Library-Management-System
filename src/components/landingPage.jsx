import '../styles/landingPage.css';
import {Link} from "react-router-dom"


const LandingPage = () => {
    return( 
       
       <div className='back'>
        <div className="landingpage">
            <h1>LIBRARY MANAGMENT SYSTEM</h1>
              <div className="selectLoginType">
                <div className="admin">
                       <div>
                       <img height="150" width="150" src="images/img02.png" alt="" />
                       </div>
                       <div>
                       <Link to='/admin-login' ><button>  <b>Admin Login</b></button></Link>
                       </div>
                </div>
                <div className="user">
                       <div>
                       <img height="150" width="150"  src="images/img03.png" alt="" />
                       </div>
                       <div>
                       <Link to='/user-login'  ><button>  <b>User Login</b> </button></Link>
                       </div>
                </div>
              </div>
        </div>
        </div>
     )
}
export default LandingPage;