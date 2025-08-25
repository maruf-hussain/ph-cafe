import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"



function App() {
  const [bookmarks,setBookmarks]= useState([]) 
  const [readingTime,setReadingTime]= useState(0)

  const handleBookmarks = (blog) =>{
    console.log('handle bookmarks')
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = (time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)}
    
  return (
    <>
      <Header></Header>
      <div className="md:flex gap-6 mx-10 mt-6">
      <Blogs handleReadingTime={handleReadingTime} handleBookmarks={handleBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    
    </>
  )
}

export default App
