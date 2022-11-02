import { createBrowserRouter } from 'react-router-dom';
import Login from '../../Authentication/Login/Login';
import SignUp from '../../Authentication/SignUp/SignUp';
import UserProfile from '../../Authentication/UserProfile/UserProfile';
import Main from '../../Layout/Main';
import Checkout from '../../Pages/Checkout/Checkout';
import Home from '../../Pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/user",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/service/:id",
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            }
        ]
    }
])