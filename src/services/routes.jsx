
import Homepage from "@/pages/Homepage";
import { paths } from "./path";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Forgotpassword from "@/pages/Login/Forgotpassword";
import ResetPassword from "@/pages/Login/ResetPassword";
import OtpLogin from "@/pages/Login/OtpLogin";
import Disclaimer from "@/components/pages/linkspages/disclaimer";
import { jobRoutes } from "./Jobroutes";
import Profile from "@/pages/Profile/Profile";
import JobPortalDashboard from "@/components/common/layouts/JobPortalDashboard";
console.log(jobRoutes)
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
    name: "Profile",
    path: paths.Profile,
    exact: true,
    element: <Profile />,
  },
  ...jobRoutes.map((route) => ({
    ...route,  // First spread the route properties
    element: route.Layout && route.Layout === "JobPortalDashboard"  // Then override the element
      ? <JobPortalDashboard>{route.element}</JobPortalDashboard>
      : route.element,
  }))

];
