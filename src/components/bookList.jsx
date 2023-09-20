import { useState,useEffect } from "react";
import '../styles/bookList.css'
import { useNavigate,useLocation } from "react-router-dom";
import ReadBook from "./readBooks";


const BookList = () => {
    let[books,setBooks] = useState([])

    //to fetch the route value
    let location = useLocation()

     useEffect( ()=>{
        let fetchData = async() =>{
            let response = await fetch("http://localhost:8000/books")
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    },[books])

        //  TO DELETE PERMENANTLY FROM SERVER
     let handleDelete = (id,title) =>{
        fetch(`http://localhost:8000/books/${id}`,{
            method:'DELETE'
        });
        alert(`${title} will be deleted permanently`)
     }

     let navigate = useNavigate()
     let read = (id) => {
        if (location.pathname == '/admin/book-list'){
        navigate(`/admin/book-list/${id}`)
        }else {
            navigate(`/user/book-list/${id}`)
        }
     }

    return ( 
        <div className="bookList">
            <h1 style={{ color:"green" }} >Book List: {books.length}</h1>
            <div className="book_section">
                { books.map(data => (
                    <div className="book_card">
                        <div className="book_image">
                               <img src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="book_details">
                               <h2 style={{color:"green"}}> <b>Title:</b> {data.title}, {data.pageCount} Pages</h2>
                               <p> <b>Authors:</b> {data.authors.toString()} </p>
                               <p> <b>Category:</b> {data.categories.toString()} </p>
                               {/* <p> <b>Description:</b>{data.shortDescription} </p> */}
                               <div className="bnn">
                               <button onClick={()=>read(data.id)} >Read More</button>
                               { location.pathname == '/admin/book-list' && <button onClick={()=> handleDelete(data.id,data.title)} > <b>Delete</b> </button> }
                               </div>
                        </div>
                    </div>
                )) }
            </div>
            <ReadBook/>
        </div>
     );
}
 
export default BookList;