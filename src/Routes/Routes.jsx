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
                element: <Home></Home>
            },
            {
                path:'/category/:id',
                element: <Category></Category>
            }
        ]
    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element: <News></News>
            }
        ]
    }
])

export default router;