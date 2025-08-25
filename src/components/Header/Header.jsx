import profile from '../../assets/images/profile.png'

export default function Header() {
  return (
    <div className='flex justify-between items-center mx-10 border-b-2 border-gray-300 pb-4'>
        <h1 className="text-5xl text-blue-400">Ph-Cafe</h1>
        <img src={profile} alt="profile" className="w-16 h-16 rounded-full mt-2"/>
    </div>
  )
}
