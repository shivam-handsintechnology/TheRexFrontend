import Jobportal from "@/pages/Job/Jobportal";
import PortalUserRegister from "@/pages/Job/PortalUserRegister";
import Jobservices from "@/pages/Job/Jobservices";
import Jobdetails from "@/pages/Job/Jobdetails";
import ViewCompanies from "@/pages/Job/Employers/Companies/View"
import AddCompany from "@/pages/Job/Employers/Companies/Add"
import EditCompany from "@/pages/Job/Employers/Companies/Edit"
import ViewJobs from "@/pages/Job/Employers/Jobs/View"
import AddJob from "@/pages/Job/Employers/Jobs/Add"
import EditJob from "@/pages/Job/Employers/Jobs/Edit"
import { paths } from "./path";

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
    /* Employer */
    // companies
    {
        name: "Companies",
        path: paths.employerCompanies,
        exact: true,
        element: <ViewCompanies />,
    },
    {
        name: "CreateCompany",
        path: paths.employerCompanyCreate,
        exact: true,
        element: <AddCompany />,
    },
    {
        name: "Edit Company",
        path: paths.employerCompanyEdit,
        exact: true,
        element: <EditCompany />,
    },
    // Jobs
    {
        name: "Jobs",
        path: paths.employerJobs,
        exact: true,
        element: <ViewJobs />,
    },
    {
        name: "CreateJob",
        path: `${paths.PostJob}:id`,
        exact: true,
        element: <AddJob />,
    },
    {
        name: "UpdateJob",
        path: `${paths.UpdateJob}:id`,
        exact: true,
        element: <EditJob />,
    },
    // Applications
    {
        name: "ShortlistCandidates",
        path: paths.ShortlistCandidates,
        exact: true,
        element: <ShortlistCandidates />,
    },
    {
        name: "Applications",
        path: paths.AllApplications,
        exact: true,
        element: <Applications />,
    },
    {
        name: "ApplicantsByJob",
        path: paths.ApplicantsByJobId,
        exact: true,
        element: <ApplicantsByJob />,
    },
    /* End Employer */
    /* Candidate */

];
