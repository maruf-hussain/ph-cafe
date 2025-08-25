
import Bookmark from "./Bookmark"



export default function Bookmarks({bookmarks,readingTime}) {
  return (
    <div className="md:w-1/3 sm:w-1 bg-gray-300 text-4xl  text-center border-2 border-gray-200 p-4 rounded">
        <h2 className="text-orange-700">Reading Time: {readingTime} min</h2>
        <h1 className="border-b-2 text-blue-600">Bookmarks List: {bookmarks.length}</h1>
        <div>
            {
                bookmarks.map(bookmark=> <Bookmark
                key={bookmark.id}
               
                bookmark={bookmark}
                ></Bookmark> )
            }
        </div>
    </div>
  )
}
