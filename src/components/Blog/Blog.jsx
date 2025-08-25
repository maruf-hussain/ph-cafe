

export default function Blog({ blog }) {
  const { title, cover, author_img, author, posted_time, reading_time, hashtags } = blog
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
            <button><img className="w-6" src="https://img.icons8.com/?size=48&id=26089&format=png" alt="" /></button>
          </di>
        </div>

      </div>
      <h1 className="text-2xl mt-4">{title}</h1>
      <p className="text-blue-600">{hashtags}</p>
      <button className="text-blue-400 underline mt-4">Mark as read</button>
    </div>
  )
}
