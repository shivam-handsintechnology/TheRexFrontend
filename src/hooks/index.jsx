import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { reset } from "@/redux/authSlice";
import {
  jobPortalApi,
  useGetRoleQuery,
  useGetSubscriptionQuery
} from "@/redux/apiSlice"

import { FilerCardsSkelton, JobsSkelton, Loading, LatestJobsSkelton, CategoriesCarouselSkelton, CategoriesListSkelton } from "./SkeltonsData"
import { setFiltersData } from '@/redux/FilterSlice';

const useGetRole = () => {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const { data: role, error, isLoading, refetch, isError } = useGetRoleQuery(undefined, {
    skip: !token,
  });
  useEffect(() => {
    const handleRefetch = async () => {
      try {
        token && refetch();
        // role?.data && token && dispatch(setJobProfileData(role.data));
      } catch (err) {
        console.error("Refetch failed:", err);
      }
    };
    handleRefetch()
    if (!token) {
      dispatch(reset())
    } else {
      console.log(" error, isLoading", error, isLoading)
    }
  }, [token, role]);

  useEffect(() => {
    if (isError) {
      dispatch(reset())
      console.log("Error fetching role:", error);
    } else {
      console.log({ error, role, isError });
    }
  }, [error, role, isError]);

  return { data: role, error, isLoading, refetch, isError };
}
const usegetSubsription = () => {
  const { token } = useSelector((state) => state.auth)
  const { data, error, isLoading } = useGetSubscriptionQuery(undefined, {
    skip: !token,
  });
  const SubscriptionisRequired = error ? true : false
  const message = error?.data?.message || data?.message || "Subscription Not found";

  return { SubscriptionisRequired, message, isLoading };
}

// Keeping non-axios functions as they are
const ProtectedAdminRoute = ({ component }) => {
  const { token, role } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const isAuthenticated = !!token; // More concise way to check if token exists

  useEffect(() => {
    if (!isAuthenticated) {
      // If not authenticated, show an alert and navigate to login
      // swal("Unauthorized", "You need to be logged in to access this page.", "warning")
      //   .then(() =>
      navigate("/login", { state: window.location.pathname })
      // );
    } else if (role !== 'recruiter') {
      // If authenticated but not a recruiter, show a different message
      // swal("Access Denied", "You do not have the required permissions to access this page.", "error")
      //   .then(() =>
      navigate("/login", { state: window.location.pathname })
      // ); // Navigate to login or an appropriate route
    }
  }, [isAuthenticated, role, navigate]);

  // Render the element if authenticated and the role is 'recruiter'
  return isAuthenticated && role === 'recruiter' ? (
    React.cloneElement(component, { isAuthenticated })
  ) : null; // Return null if not authorized
};
const ProtectJObportalformrouterRoute = ({ component }) => {
  const { token, role } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const isAuthenticated = !!token; // More concise way to check if token exists

  useEffect(() => {
    if (!isAuthenticated) {
      // If not authenticated, show an alert and navigate to login
      // swal("Unauthorized", "You need to be logged in to access this page.", "warning")
      //   .then(() =>
      navigate("/login")
      // );
    } else if (role !== '') {
      // If authenticated but not a recruiter, show a different message
      // swal("Access Denied", "You do not have the required permissions to access this page.", "error")
      //   .then(() =>
      // navigate("/profile", { state: window.location.pathname })
      // ); // Navigate to login or an appropriate route
    }
  }, [isAuthenticated, role, navigate]);

  // Render the element if authenticated and the role is 'recruiter'
  // return isAuthenticated && role === '' ? (
  return React.cloneElement(component, { isAuthenticated })
  // ) : null; // Return null if not authDorized
};


const ProtectedUserRoute = ({ component }) => {
  const { token, role } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {

      navigate("/login");

    } else if (token && role === '') {
      // If the user is authenticated but does not have a role, show a different message
      // swal("Role Not Found", "Your role is not defined. Please contact support or try again later.", "info")
      //   .then(() => {

      navigate("/job/JobseekerForm", { state: window.location.pathname });  // Navigate to job add data route or any other route
      // });
    }
  }, [token, role, navigate]);

  const isAuthenticated = token && role !== '';

  // Render the element if authenticated and role is present, otherwise render nothing
  return isAuthenticated ? React.cloneElement(component, { isAuthenticated }) : null;
};
function SpinLoader({ name = "" }) {
  switch (name) {
    case "FilterCard":
      return <FilerCardsSkelton />
      break;
    case "jobs":
      return <JobsSkelton />
      break;
    case "latestjobs":
      return <LatestJobsSkelton />
      break;
    case "CategoriesCarousel":
      return <CategoriesCarouselSkelton />
      break;
    case "Category":
      return <CategoriesListSkelton />
      break;

    default:
      return <Loading />
      break;
  }




}
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
const useGetFiltersData = (endpoint = []) => {
  const dispatch = useDispatch();

  // Fetch all location data
  const fetchAllLocations = async () => {
    let currentPage = 1;
    let allLocationData = [];
    while (true) {
      const data = await dispatch(
        jobPortalApi.endpoints.getLocationFilters.initiate({ page: currentPage, limit: 10 })
      ).unwrap();
      console.log(data)
      allLocationData = Array.from(new Set([...allLocationData, ...data.data]))
      if (!data.hasMore) break;
      currentPage = currentPage + 1
    }
    dispatch(setFiltersData({ type: "locationData", value: allLocationData }))
  };

  // Fetch all industry data
  const fetchAllIndustries = async () => {
    let currentPage = 1;
    let allIndustryData = [];

    while (true) {
      const data = await dispatch(
        jobPortalApi.endpoints.getIndustryFilters.initiate({ page: currentPage, limit: 10 })
      ).unwrap();

      allIndustryData = Array.from(new Set([...allIndustryData, ...data.data]))

      if (!data.hasMore) break;

      currentPage = currentPage + 1
    }
    dispatch(setFiltersData({ type: "industryData", value: allIndustryData }))
  };
  // Fetch all industry data
  const fetchAllFunctionalArea = async () => {
    let currentPage = 1;
    let allIndustryData = [];

    while (true) {
      const data = await dispatch(
        jobPortalApi.endpoints.getFunctionalAreas.initiate({ page: currentPage, limit: 10 })
      ).unwrap();

      allIndustryData = Array.from(new Set([...allIndustryData, ...data.data]))

      if (!data.hasMore) break;

      currentPage = currentPage + 1
    }
    dispatch(setFiltersData({ type: "FunctionalAreas", value: allIndustryData }))
  };
  const fetchAllCareerLevel = async () => {
    let currentPage = 1;
    let allIndustryData = [];

    while (true) {
      const data = await dispatch(
        jobPortalApi.endpoints.getCareerLevels.initiate({ page: currentPage, limit: 10 })
      ).unwrap();

      allIndustryData = Array.from(new Set([...allIndustryData, ...data.data]))

      if (!data.hasMore) break;

      currentPage = currentPage + 1
    }
    dispatch(setFiltersData({ type: "CareerLevel", value: allIndustryData }))
  };
  useEffect(() => {
    endpoint.includes("locationData") && fetchAllLocations();
    endpoint.includes("industryData") && fetchAllIndustries();
    endpoint.includes("FunctionalAreas") && fetchAllFunctionalArea()
    endpoint.includes("CareerLevel") && fetchAllCareerLevel()
  }, [])
}
export {
  SpinLoader,
  ProtectJObportalformrouterRoute,
  usegetSubsription,
  ProtectedUserRoute, useGetFiltersData,
  ProtectedAdminRoute, useDebounce, useGetRole
};
