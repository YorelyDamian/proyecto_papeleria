import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'https://papeleria-fyre-final.herokuapp.com/blogs/'

const CompShowBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    const getBlogs = async () => {

    }
    
    const deleteBlogs = async (id) =>{
        
    }

    return(
        <div>

        </div>
    )
}
export default CompShowBlogs

