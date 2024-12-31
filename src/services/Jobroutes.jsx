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
import ShortlistCandidates from "@/pages/Job/Employers/Applications/ShortlistCandidates"
import TrackingApplications from "@/pages/Job/Employers/Applications/TrackingApplications"
import AppliedJobs from "@/pages/Job/Candidates/Applications/AppliedJobs";
import ApplicantsByJobId from "@/pages/Job/Employers/Applications/ApplicantsByJobId";
import Candidates from "@/pages/Job/Employers/Candidates";
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
        name: "PortalUserUpdate",
        Layout: "JobPortalDashboard",
        path: `${paths.JobUserUpdate}/:id/:role?`, // Optional ":role" parameter
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
        Layout: "JobPortalDashboard",
        path: paths.employerCompanies,
        exact: true,
        element: <ViewCompanies />,
    },
    {
        name: "CreateCompany",
        Layout: "JobPortalDashboard",
        path: paths.employerCompanyCreate,
        exact: true,
        element: <AddCompany />,
    },
    {
        name: "Edit Company",
        Layout: "JobPortalDashboard",
        path: `${paths.employerCompanyEdit}/:id`,
        exact: true,
        element: <EditCompany />,
    },
    // Jobs
    {
        name: "Jobs",
        path: paths.employerJobs,
        Layout: "JobPortalDashboard",
        exact: true,
        element: <ViewJobs />,
    },
    {
        name: "CreateJob",
        Layout: "JobPortalDashboard",
        path: `${paths.PostJob}`,
        exact: true,
        element: <AddJob />,
    },
    {
        name: "UpdateJob",
        Layout: "JobPortalDashboard",
        path: `${paths.UpdateJob}/:id`,
        exact: true,
        element: <EditJob />,
    },
    // Applications
    {
        name: "ShortlistCandidates",
        Layout: "JobPortalDashboard",
        path: paths.ShortlistCandidates,
        exact: true,
        element: <ShortlistCandidates />,
    },
    {
        name: "Tracking Applications",
        Layout: "JobPortalDashboard",
        path: paths.TrackingApplications,
        exact: true,
        element: <TrackingApplications />,
    },
    {
        name: "Candidates",
        Layout: "JobPortalDashboard",
        path: paths.Candidates,
        exact: true,
        element: <Candidates />,
    },
    {
        name: "Applicantions",
        Layout: "JobPortalDashboard",
        path: `${paths.ApplicantsByJobId}/:jobid`,
        exact: true,
        element: <ApplicantsByJobId />,
    },
    /* End Employer */
    /* Candidate */
    // Applications
    {
        name: "Applied Jobs",
        path: `${paths.AppliedJobs}`,
        Layout: "JobPortalDashboard",
        exact: true,
        element: <AppliedJobs />,
    },

];
