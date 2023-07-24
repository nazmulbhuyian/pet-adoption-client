import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomeLayout from "../Pages/HomePage/HomeLayout";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import SinglePet from "../Pages/HomePage/SinglePets/SinglePet";
import DashboardLayout from '../Layout/DashboardLayout/DashboardLayout'
import Profile from "../Pages/Dashboard/Profile/Profile";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import UserBuy from "../Pages/Dashboard/UserBuy/UserBuy";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AllProduct from "../Pages/Dashboard/AllProduct/AllProduct";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";
import AdminRoute from "./AdminRoute/AdminRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/petDetails/:id',
                element: <PrivateRoute><SinglePet></SinglePet></PrivateRoute>,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/dashboard/myBooking',
                element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <PrivateRoute><SellerRoute><MyProduct></MyProduct></SellerRoute></PrivateRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <PrivateRoute><SellerRoute><AddProduct></AddProduct></SellerRoute></PrivateRoute>
            },
            {
                path: '/dashboard/userBuy',
                element: <PrivateRoute><SellerRoute><UserBuy></UserBuy></SellerRoute></PrivateRoute>
            },
            {
                path: '/dashboard/allUser',
                element: <PrivateRoute><AdminRoute><AllUser></AllUser></AdminRoute></PrivateRoute>
            },
            {
                path: '/dashboard/allProduct',
                element: <PrivateRoute><AdminRoute><AllProduct></AllProduct></AdminRoute></PrivateRoute>
            },
        ]
    }
])

export default routes;