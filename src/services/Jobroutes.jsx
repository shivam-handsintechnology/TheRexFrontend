import { paths } from "./path";
import Jobportal from "@/pages/Job/Jobportal";
import PortalUserRegister from "@/pages/Job/PortalUserRegister";
import Jobservices from "@/pages/Job/Jobservices";
import Jobdetails from "@/pages/Job/Jobdetails";
export const jobRoutes = [
    {
        name: "Jobportal",
        path: paths.Jobportal,
        exact: true,
        element: <Jobportal />,
    },
    {
        name: "PortalUserRegister",
        path: `${paths.Jobregister}/:role?`, // Optional ":role" parameter
        exact: true,
        element: <PortalUserRegister />,
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