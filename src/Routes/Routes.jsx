import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from '../pages/Home/Home/Home'
import Category from "../pages/Shared/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../LoginAndRegister/Login";
import Regiester from "../LoginAndRegister/Regiester";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Regiester></Regiester>
            }
        ]
    },
    {
        path:'/category',
        element: <Main></Main>,
        children: [
            {
                path:':id',
                element: <Category></Category>,
                loader:({params})=> fetch(`https://the-news-dragon-server-uniquecoderrihan.vercel.app/catagoris/${params.id}`)
                // Always Note Your Link Will Be Server Site. I was depress 40 minit for this Problem
            }
        ]
    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params})=>fetch(`https://the-news-dragon-server-uniquecoderrihan.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;