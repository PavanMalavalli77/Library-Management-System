import { useState,useEffect } from "react";
import '../styles/userlist.css'
import { useNavigate } from "react-router-dom";

const UserList = () => {
    let[users,setUsers] = useState([])

     useEffect( ()=>{
        let fetchData = async() =>{
            let response = await fetch("http://localhost:8000/users")
            let data = await response.json()
            setUsers(data)
        }
        fetchData()
    },[])

    //  let handleDelete = (id,name) =>{
    //     setUsers( users.filter( x => x.id != id ) )
    //     alert(`${name} has been deleted`)
    //  }

     let handleDelete = (id,name) =>{
        fetch(`http://localhost:8000/users/${id}`,{
            method:'DELETE'
        });
        alert(`${name} will be deleted permanently`)
     }

     let navigate = useNavigate()
     let read = (id) => {
        navigate(`/admin/user-list/${id}`)
     }
    

    return ( 
        <div className="userList">
            <h1>user List: {users.length}</h1>
            <div className="users_section">
                { users.map(d => (
                    <div className="users_card">
                        <h2 style={{color:"green"}}> <b>Name</b>: {d.name}</h2>
                        <p> <b>Age</b>: {d.age}</p>
                        <p> <b>PhoneNumber</b>: {d.phoneNumber} </p>
                        <p> <b>Email</b>: {d.email} </p>
                        <button onClick={()=> handleDelete(d.id,d.name)} >Delete</button>
                    </div>
                )) }
            </div>
        </div>
     );
}
 
export default UserList;


