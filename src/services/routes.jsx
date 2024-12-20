
import Homepage from "@/pages/Homepage";
import { paths } from "./path";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Forgotpassword from "@/pages/Login/Forgotpassword";
import ResetPassword from "@/pages/Login/ResetPassword";
import OtpLogin from "@/pages/Login/OtpLogin";
import Disclaimer from "@/components/pages/linkspages/disclaimer";
import Profile from "@/pages/Profile/Profile";
import Jobportal from "@/pages/Job/Jobportal";
import Jobregister from "@/pages/Job/Register";
import Jobservices from "@/pages/Job/Jobservices";
import Jobdetails from "@/pages/Job/Jobdetails";

export const routes = [
  {
    name: "HomePage",
    path: paths.homepage,
    exact: true,
    element: <Homepage />,
  },
  {
    name: "Register",
    path: paths.register,
    exact: true,
    element: <Register />,
  },
  {
    name: "Login",
    path: paths.login,
    exact: true,
    element: <Login />,
  },
  {
    name: "Forgotpassword",
    path: paths.Forgotpassword,
    exact: true,
    element: <Forgotpassword />,
  },
  {
    name: "ResetPassword",
    path: paths.ResetPassword,
    exact: true,
    element: <ResetPassword />,
  },
  {
    name: "OtpLogin",
    path: paths.OtpLogin,
    exact: true,
    element: <OtpLogin />,
  },
  {
    name: "Disclaimer",
    path: paths.Disclaimer,
    exact: true,
    element: <Disclaimer />,
  },
  {
    name: "Jobportal",
    path: paths.Jobportal,
    exact: true,
    element: <Jobportal />,
  },
  {
    name: "Jobregister",
    path: paths.Jobregister,
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
];
