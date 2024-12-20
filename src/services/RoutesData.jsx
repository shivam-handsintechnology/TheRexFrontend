import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

import { routes } from "./routes";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const noHeaderFooterPaths = [
  "/register",
  "/login",
  "/forgotpassword",
  "/resetpassword",
  "/otplogin",
  "/profile"

];

const Layout = ({ children }) => {
  const location = useLocation();

  const showHeaderFooter = !noHeaderFooterPaths.some(path =>
    location.pathname.toLowerCase().startsWith(path)
  );

  return (
    <>
      {showHeaderFooter && <Header />}
      {children}
      {showHeaderFooter && <Footer />}
    </>
  );
};

function RoutesData() {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const isAuthenticated = true;
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  noHeaderFooterPaths.some(path => route.path.startsWith(path)) || isAuthenticated ? (route.element) : (<Navigate to='/login' replace />)
                }
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default RoutesData;
