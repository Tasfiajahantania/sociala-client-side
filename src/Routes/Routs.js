import { createBrowserRouter } from "react-router-dom";
import Aboutme from "../Components/Aboutme/Aboutme";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Media from "../Components/Media/Media";
import Register from "../Components/Register/Register";
import SinglePost from "../Components/SinglePost/SinglePost";
import Main from "../Layout/Main";

// import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://my-services-server.vercel.app/services-home')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/media',
                element: <Media></Media>,
            },
            {
                path: '/about',
                element: <Aboutme></Aboutme>
            },
            {
                path: '/post/:id',
                loader: ({params}) => fetch(`http://localhost:5000/post/${params.id}`),
                element: <SinglePost></SinglePost>,
            }
        ]
    }
])