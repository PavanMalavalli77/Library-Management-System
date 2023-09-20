import { useState } from "react";
import { useNavigate } from "react-router";
import '../styles/addbooks.css';

const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let[title,setTitle] = useState("")
    let[categories,setCategories] = useState("")
    let[authors,setAuthors] = useState("")
    let[pageCount,setPageCount] = useState("")
    let[shortDescription,setShortDescription] = useState("")
    let[longDescription,setLongDescription] = useState("")
    let[thumbnailUrl,setThumbnailUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault();

        //data to be posted
        let bookData = {title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}

        //posting to server
        fetch('http://localhost:8000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('book added successfully')
        navigate('/admin/book-list')
    }
    
    return (
        <div className="addBook">
               <h1 style={{color:'green'}} >Add a book</h1>
               <div className="form">
                    <form action="" onSubmit={handleSubmit} >
                        <div className="title"> 
                             <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required placeholder="title of the book" />
                         </div>
                        <div className="authors">
                            <input value={authors} onChange={(e)=>setAuthors(e.target.value)} type="text" required placeholder="author of the book" />
                        </div>
                        <div className="categories">
                            <input value={categories} onChange={(e)=>setCategories(e.target.value)} type="text" required placeholder="category of the book" />
                        </div>
                        <div className="pageCount">
                            <input value={pageCount} onChange={(e)=>setPageCount(e.target.value)} type="number" placeholder="page count of the book" />
                        </div>
                        <div className="shortDescription">
                            <textarea value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} placeholder="enter shortDescription" cols="30" rows="10"></textarea>
                        </div>
                        <div className="longDescription">
                            <textarea value={longDescription} onChange={(e)=>setLongDescription(e.target.value)} placeholder="enter longDescription" cols="30" rows="10"></textarea>
                        </div>
                        <div className="thumbnailUrl">
                            <input value={thumbnailUrl} onChange={(e)=>setThumbnailUrl(e.target.value)} type="text" placeholder="image of the book" />
                        </div>
                        <button> <b>Add Book</b> </button>
                    </form>
               </div>
        </div>
      );
}
 
export default AddBook;