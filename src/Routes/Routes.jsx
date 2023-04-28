import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from '../pages/Home/Home/Home'
import Category from "../pages/Shared/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Category></Category>,
                loader: ()=>fetch('http://localhost:5000/news')
            },
            {
                path:'/category/:id',
                element: <Category></Category>,
                loader:({params})=> fetch(`http://localhost:5000/catagoris/${params.id}`)
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
                element: <News></News>,
                loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;