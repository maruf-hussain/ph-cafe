import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"


export default function Blogs() {
    const [blogs,setBlogs]= useState([])

   useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
   },[])

  return (
    <div className="md:w-2/3 grid gap-6 grid-cols-3">
        {
            blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)    
        }
    </div>
  )
}
