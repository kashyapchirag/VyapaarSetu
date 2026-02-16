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
        <nav className="z-5">
            <ul className="flex justify-between h-[10%] ">
                <img src="/src/assets/logo2.png" className="w-35 md:w-40 h-auto" alt="VyapaarSetu-logo" />

                <div className="buttons h-full flex gap-5">
                    {
                        list.map((ele,index)=>{
                            return (
                                <NavLink key={index} to={`/${ele.toLowerCase().replaceAll(' ','')}`} className="hidden px-5 md:flex justify-center items-center h-10 bg-white dark:bg-[#1E293B] text-gray-700 dark:text-gray-200  dark:border-[#334155] rounded-xl shadow-md hover:bg-[#1b2957] hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">{ele}</NavLink>
                            )
                        })
                    }

                    <button className="px-5 flex justify-center items-center h-10 bg-white dark:bg-[#1E293B] text-gray-700 dark:text-gray-200  dark:border-[#334155] rounded-xl shadow-md hover:bg-[#1b2957] hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">Log In</button>

                    <button onClick={handleTheme} className="w-10 h-10 flex items-center justify-center bg-white dark:bg-[#1E293B] dark:text-white rounded-xl shadow-md transition-all cursor-pointer">
                        {darkMode? <Sun size={18} /> : <Moon size={18} />}
                    </button>



                </div>
            </ul>
        </nav>
    )
}

export default Navbar
