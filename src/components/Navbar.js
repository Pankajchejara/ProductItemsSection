import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { PiBagLight } from "react-icons/pi";



const Navbar = () => {
  return (
    <div className="flex xs:flex-row flex-col   gap-y-1  xs:justify-between w-11/12  mx-auto">
     <p className="tracking-[0.4em] font-light text-gray-400 cursor-pointer text-center">TANN TRIM</p>
     <div className="flex gap-x-5 relative md:-right-[30px] text-[20px]">
<CiSearch className="text-2xl text-gray-400 cursor-pointer" />
<CiUser  className="text-2xl text-gray-400 cursor-pointer"/>
<CiBookmark className="text-2xl text-gray-400 cursor-pointer" />
     <PiBagLight   className="text-2xl text-gray-400 cursor-pointer"/>
     </div>
    </div>
  )
}

export default Navbar
