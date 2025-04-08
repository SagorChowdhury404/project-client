import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layOuts/MainLayout";
import Register from "../pages/auth/registationPages/Register";
import LoginPages from "../pages/auth/loginpages/LoginPages";
import Home from "../pages/home/Home/Home";
import PasswordResetPages from "../pages/auth/passwordResetPages/PasswordResetPages";
import JobDetailsPage from "../pages/jobDetails/JobDetailsPage";
import PrivetRouter from "./privetRouter/PrivetRouter";
import ApplyJobs from "../pages/applyJobs/ApplyJobs";
import MyApplication from "../pages/myApplication/MyApplication";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/jobs/:id",

                element: <PrivetRouter >
                    <JobDetailsPage></JobDetailsPage>,
                </PrivetRouter>,

                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/jobApply/:id",
                element: <PrivetRouter>
                    <ApplyJobs></ApplyJobs>
                </PrivetRouter>

            },
            {
                path: "/myApplication",
                element: <PrivetRouter>
                    <MyApplication></MyApplication>
                </PrivetRouter>

            },
            {
                path: "/Register",
                element: <Register></Register>
            },
            {
                path: "/LoginPages",
                element: <LoginPages></LoginPages>
            },
            {
                path: "/forgePassword",
                element: <PasswordResetPages></PasswordResetPages>
            },
        ]
    },
]);