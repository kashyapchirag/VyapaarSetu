import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import LandingPage from "./features/landing/LandingPage"
function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        {
          index:true,
          element:<LandingPage/>
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
