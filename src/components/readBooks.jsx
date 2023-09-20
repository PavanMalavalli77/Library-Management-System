import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
    let [books,setBooks] = useState([])

    let params = useParams()
    useEffect( ()=>{
        let fetchData = async() =>{
            let response = await fetch(`http://localhost:8000/books/${params.id}`)
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    })
    
    return ( 
        <div className="readBook">
            <h1>Read Book </h1>
            <p>{books.shortDescription}</p>
            <p>{books.longDescription}</p>
        </div>
     );
}
 
export default ReadBook;