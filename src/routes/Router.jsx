import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Register/Register";
import PopularCampDetails from "../pages/Home/PopularCamps/PopularCampLayout/PopularCampDetails/PopularCampDetails";
import Errorpage from "../components/SectionTitle/Errorpage";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../layout/Dashboard";
// import Profile from "../pages/Profile/Profile";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddCamps from "../pages/Dashboard/AddCamps/AddCamps";
import AdminRoute from './AdminRoute';
import ManageCamps from "../pages/Dashboard/ManageCamps/ManageCamps";
import UpdateCamp from "../pages/Dashboard/UpdateCamp/UpdateCamp";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import PrivateRoute from './PrivateRoute';
import FeedBack from "../pages/Home/FeedBack/FeedBack";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path:'/popularcamp/:_id',
                element:<PrivateRoute><PopularCampDetails></PopularCampDetails></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/popularcamp')
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path:'/availableCamps',
                element:<PrivateRoute><AvailableCamps></AvailableCamps></PrivateRoute>,
                loader:() => fetch('http://localhost:5000/popularcamp')
            },
            {
                path:'/contactUs',
                element:<ContactUs></ContactUs>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            // normal users route
            {
                path:'userProfile',
                element:<UserProfile></UserProfile>,
            },
            {
                path:'feedback',
                element:<FeedBack></FeedBack>,
            },
            // Admin routes
            {
                path:'adminProfile',
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
            },
            {
                path:'allUsers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
                path:'addCamps',
                element:<AdminRoute><AddCamps></AddCamps></AdminRoute>,
            },
            {
                path:'manageCamps',
                element:<AdminRoute><ManageCamps></ManageCamps></AdminRoute>,
            },
            {
                path:'updateCamp/:id',
                element:<AdminRoute><UpdateCamp></UpdateCamp></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/popularcamp/${params.id}`)
            }
        ]
    }
]);