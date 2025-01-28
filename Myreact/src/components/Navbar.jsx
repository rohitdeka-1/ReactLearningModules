import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"
const Navbar = () => {

    const [nav, setnav] = useState(false);

    const handleNav = () =>{
        setnav(!nav);
    }

  return (

    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white select-none">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] ">ROHIT.</h1>
        <ul className="flex">
            <li className="p-4 hover:text-cyan-200 cursor-pointer">Experience</li>
            <li className="p-4 hover:text-cyan-200 cursor-pointer">Home</li>
            <li className="p-4 hover:text-cyan-200 cursor-pointer">Projects</li>
            <li className="p-4 hover:text-cyan-200 cursor-pointer">Contact</li>
        </ul>

        <div onClick={handleNav}> 
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={!nav ? "fixed left-0 top-0 w-[30%] h-full bg-[#000300] border-r-gray-600 ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 ">ROHIT.</h1>
            <ul className="pt-24 p-4 ">
                <li className="p-4 border-b border-gray-600 hover:text-cyan-200 cursor-pointer">Home</li>
                <li className="p-4 border-b border-gray-600 hover:text-cyan-200 cursor-pointer">Experience</li>
                <li className="p-4 border-b border-gray-600 hover:text-cyan-200 cursor-pointer">Projects</li>
                <li className="p-4 border-b border-gray-600 hover:text-cyan-200 cursor-pointer">Contact</li>
            </ul>
        </div>
    </div>

  )
}

export default Navbar
