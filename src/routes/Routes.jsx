import {
    createBrowserRouter,
} from "react-router-dom";
import Blog from "../components/Blog";
import ChefsInfo from "../components/ChefsInfo/ChefsInfo";
import Error from "../components/Error";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ChefLayout from "../layout/ChefLayout/ChefLayout";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://myapp-naimurrahman-1998.vercel.app/chefsInfo')
            },
            {
                path:'/login',
                element : <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
            
        ]
    },
    {
        path: 'chefsInfo',
        element: <ChefLayout></ChefLayout>,
        children : [
            {
                path : '/chefsInfo/:id',
                element: <PrivateRoute><ChefsInfo></ChefsInfo></PrivateRoute>,
                loader: ({params})=> fetch (`https://myapp-naimurrahman-1998.vercel.app/chefsInfo/${params.id}`)
            }
        ]
    },
    {
        path: '/blogs',
        element: <Blog></Blog>
    }
    
]);


export default router