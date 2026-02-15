import { Outlet } from "react-router-dom"
import { Bounce, ToastContainer } from "react-toastify"
const AppLayout = () => {
    return (
        <div>
            <Outlet/>
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
