import { NavLink, useOutletContext } from "react-router-dom"
import { Sun, Moon } from "lucide-react"

const Navbar = () => {

    //@ts-ignore
    const {darkMode,setDarkMode} = useOutletContext()

    const handleTheme = () =>{
        setDarkMode(!darkMode)
    }

    const list = ["Home","About Us","Blog","Newsroom"]

    return (
        <nav className="z-5 fixed w-full right-0 left-0 px-10 pb-3 pt-3 bg-[#F3F6FF] dark:bg-[#0F172A]">
            <ul className="flex justify-between h-[10%] gap-10">
                <div className="flex justify-center items-center gap-3 text-[#1E3A8A] dark:text-[#E2E8F0] text-[1.1rem] font-extrabold">
                    <img src="/src/assets/logo3.png" className="h-8 my-auto md:h-10" alt="VyapaarSetu-logo" />
                    <span>VyapaarSetu</span>

                </div>

                <div className="buttons h-full flex gap-5">
                    {
                        list.map((ele,index)=>{
                            return (
                                <NavLink key={index} to={`/${ele.toLowerCase().replaceAll(' ','')}`} className="hidden px-5 min-[850px]:flex justify-center items-center h-10 min-w-26 bg-white dark:bg-[#1E293B] text-gray-700 dark:text-gray-200 dark:border-[#334155] rounded-xl shadow-md hover:bg-[#1b2957] hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">{ele}</NavLink>
                            )
                        })
                    }

                    <button className="px-5 flex justify-center items-center h-10 bg-white dark:bg-[#1E293B] text-gray-700 dark:text-gray-200 min-w-22 dark:border-[#334155] rounded-xl shadow-md hover:bg-[#1b2957] hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">Log In</button>

                    <button onClick={handleTheme} className="w-10 h-10 flex items-center justify-center bg-white dark:bg-[#1E293B] dark:text-white rounded-xl shadow-md transition-all hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                        {darkMode? <Sun size={18} /> : <Moon size={18} />}
                    </button>



                </div>
            </ul>
        </nav>
    )
}

export default Navbar
