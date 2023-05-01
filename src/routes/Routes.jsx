import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import LoginLayout from "../layout/LoginLayout/LoginLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
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
]);


export default router