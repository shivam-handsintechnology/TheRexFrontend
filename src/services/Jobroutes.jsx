import { paths } from "./path";
import Jobportal from "@/pages/Job/Jobportal";
import Jobregister from "@/pages/Job/Register";
import Jobservices from "@/pages/Job/Jobservices";
import Jobdetails from "@/pages/Job/Jobdetails";
import Employer from "@/pages/Job/Register/Employer";
import { Navigate } from "react-router-dom";
export const jobRoutes = [
    {
        name: "Jobportal",
        path: paths.Jobportal,
        exact: true,
        element: <Jobportal />,
    },
    {
        name: "Jobregister",
        path: `${paths.Jobregister}/:role?`, // Optional ":role" parameter
        exact: true,
        element: <Jobregister />,
    },

    {
        name: "Jobservices",
        path: paths.Jobservices,
        exact: true,
        element: <Jobservices />,
    },
    {
        name: "Jobdetails",
        path: `${paths.Jobdetails}/:id`,
        exact: true,
        element: <Jobdetails />,
    },
]