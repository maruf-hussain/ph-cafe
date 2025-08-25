import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"


export default function Blogs({handleBookmarks, handleReadingTime}) {
    const [blogs,setBlogs]= useState([])

   useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
   },[])

  return (
    <div className="md:w-2/3 md:grid-cols-3 sm:grid-cols grid gap-6 ">
        {
            blogs.map(blog => <Blog 
              handleReadingTime={handleReadingTime}
              handleBookmarks={handleBookmarks}
              key={blog.id} 
              blog={blog}></Blog>)    
        }
    </div>
  )
}
