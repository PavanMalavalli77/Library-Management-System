import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let[name,setName] = useState("")
  let[age,setAge] = useState("")
  let[email,setEmail] = useState("")
  let[phoneNumber,setPhoneNumber] = useState("")

  let navigate = useNavigate()

  let handleSubmit = (e) => {
    e.preventDefault();

    //data to be posted
    let userData = {name,age,email,phoneNumber}

    //posting to server
    fetch('http://localhost:8000/users',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData)
    })
    alert('user added successfully')
    navigate('/admin/user-list')

  }

    return ( 
        <div className="addUser">
            <h1>Add New User</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter your name" />
                    </div>
                    <div className="age">
                          <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} min="1" placeholder="enter your age" />
                    </div>
                    <div className="email">
                          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email" />
                    </div>
                    <div>
                        <input type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} minLength='10' maxLength='12' placeholder="enter your phone number" />
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;