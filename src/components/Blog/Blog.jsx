import { useState } from "react";


export default function Blog({ blog, handleBookmarks, handleReadingTime }) {
  const { title, cover, author_img, author, posted_time, reading_time, hashtags } = blog;
   const [visited, setVisited] = useState(false);
   const [marked, setMarked] = useState(false);
  
  const handleBookmark = () => {
    handleBookmarks(blog);
    setVisited(!visited);
}

const handleMark = () => {
  handleReadingTime(reading_time);
  setMarked(!marked);}
   

  return (
    <div>
      <img src={cover} alt="img" />
      <div>
        <div className="flex justify-between items-center">

          <div className="flex mt-4">
            <img className="w-10 h-10 mr-2" src={author_img} alt="" />
            <div>
              <h1>{author}</h1>
              <p>{posted_time}</p>
            </div>

          </div>
          <di className="mt-4 flex gap-1.5">
            <p>{reading_time} min read</p>
             <button onClick={ handleBookmark}>{visited ?  <button  disabled><img className="w-4" src="https://img.icons8.com/?size=48&id=WTANjzga8hWT&format=gif" alt=""  /></button> :  
             
             <button onClick={handleBookmark}><img className="w-4" src="https://ouch-prod-var-cdn.icons8.com/zp/illustrations/thumbs/cshlTlW-chieC0BE.webp" alt="" /></button>}</button>
           
          </di>
        </div>

      </div>
      <h1 className="text-2xl mt-4">{title}</h1>
      <p className="text-blue-600">{hashtags}</p>
     <button onClick={ handleMark}>{marked ? <button disabled className="text-orange-600">Mark as Read</button> : <button >Mark ad Read</button>}</button>
    </div>
  )
}
