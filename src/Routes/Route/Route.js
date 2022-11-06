import { ProviderId } from 'firebase/auth';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../../Authentication/Login/Login';
import SignUp from '../../Authentication/SignUp/SignUp';
import UserProfile from '../../Authentication/UserProfile/UserProfile';
import AdminLayout from '../../Layout/AdminLayout';
import Main from '../../Layout/Main';
import AddProducts from '../../Pages/Admin/AddProducts/AddProducts';
import DashBoard from '../../Pages/Admin/DashBoard/DashBoard';
import Checkout from '../../Pages/Checkout/Checkout';
import Home from '../../Pages/Home/Home';
import Orders from '../../Pages/Orders/Orders';
import Products from '../../Pages/Products/Products';
import ProductsPage from '../../Pages/ProductsPage/ProductsPage';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: "/orders",
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: "/addproducts",
                element: <AddProducts></AddProducts>
            },
            {
                path: "/productspage",
                element: <ProductsPage></ProductsPage>,
                loader: () => fetch("http://localhost:5000/products")
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: "/admin/addproduct",
                element: <AdminRoute><AddProducts></AddProducts></AdminRoute>
            }
        ]
    }
])