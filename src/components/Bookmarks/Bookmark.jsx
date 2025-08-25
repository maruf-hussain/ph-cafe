

export default function Bookmark({bookmark}) {
  const {title}= bookmark;
  return (
    <div>
      <p className='text-2xl text-black py-2 rounded mt-3 bg-gray-100'>{title}</p>
     </div>
  )
}
