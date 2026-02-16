import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Bounce, ToastContainer } from "react-toastify"
const AppLayout = () => {


    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    )

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
        }
    },[darkMode])

    return (
        <div>
            <Outlet context={{darkMode,setDarkMode}} />
            <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
            />
        </div>
    )
}

export default AppLayout
