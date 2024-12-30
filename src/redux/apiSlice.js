import API_URL from '@/services/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const getUserid = () => {
  try {
    return JSON.parse(localStorage.getItem("user"))?._id
  } catch (error) {
    return ""
  }
}
// RTK Query API definition
export const jobPortalApi = createApi({
  reducerPath: 'jobPortalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token") || getState().auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    // users api
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getAllJobPortalUsers: builder.query({
      query: ({ currentPage, perPage }) =>
        `/api/jobportal/user/profiles?page=${currentPage}&perPage=${perPage}`,
    }),
    getJobPortalProfile: builder.query({
      query: () => '/api/jobportal/user/profile',
      providesTags: ['UserProfile']
    }),
    getRole: builder.query({
      query: () => '/api/jobportal/user/getrole',
      providesTags: ['UserProfile'],
    }),
    getUserMenu: builder.query({
      query: () => `/api/jobportal/user/menu?id=${getUserid() || ""}`,
      providesTags: ['UserProfile'],
    }),
    getindustry: builder.query({
      query: () => '/api/jobportal/user/industry',
    }),
    // updateJobProfile: builder.mutation({
    //   query: (data) => ({
    //     url: '/api/jobportal/user/updateprofile',
    //     method: 'PUT',
    //     body: data,
    //   }),
    //   invalidatesTags: ['UserProfile']
    // }),

    RegisterRecruiter: builder.mutation({
      query: (formData) => ({
        url: '/api/jobportal/user/recruiter',
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ['UserProfile']
    }),
    RegisterJobseeker: builder.mutation({
      query: (formData) => ({
        url: '/api/jobportal/user/jobseeker',
        method: 'POST',
        body: formData,
        credentials: 'include',
      }),
      invalidatesTags: ['UserProfile']
    }),
    UpdateJobseeker: builder.mutation({
      query: (formData) => ({
        url: '/api/jobportal/user/jobseeker',
        method: 'PUT',
        body: formData,
        credentials: 'include',
      }),
      invalidatesTags: ['UserProfile']
    }),
    uploadProfile: builder.mutation({
      query: (formData) => ({
        url: '/api/jobportal/user/upload/profilephoto',
        method: 'POST',
        body: formData,
        credentials: 'include',
      }),
      invalidatesTags: ['UserProfile']
    }),

    updateProfile: builder.mutation({
      query: (formData) => ({
        url: '/api/jobportal/user/upload/profilephoto',
        method: 'PUT',
        body: formData,
        credentials: 'include',
      }),
      invalidatesTags: ['UserProfile']
    }),
    // jobs
    getAllAdminJobs: builder.query({
      query: ({ currentPage = 1, itemsPerPage = 10, keyword = "" }) => `/api/jobportal/job/getadminjobs?page=${currentPage}&perPage=${itemsPerPage}&keyword=${keyword}`,
      providesTags: ["getAdminJob"]
    }),
    getAllJobs: builder.query({
      query: ({ limit = 8, page = 1, location = "", subcategory = "", category = "", searchedQuery = "", islatest = "", minSalary = "", maxSalary = "", min_years = "", max_years = "", jobtype = "" }) =>
        `/api/jobportal/job/get?islatest=${islatest}&subcategory=${subcategory}&cat=${category}&location=${location}&keyword=${searchedQuery}&limit=${limit}&page=${page}&minSalary=${minSalary}&maxSalary=${maxSalary}&min_years=${min_years}&max_years=${max_years}&jobtype=${jobtype}`,

    }),
    getAllJobTitle: builder.query({
      query: ({ searchedQuery = "", }) =>
        `/api/jobportal/filters/getAllJobTitle?keyword=${searchedQuery}`,

    }),
    getJobById: builder.query({
      query: ({ id = "" }) =>
        `/api/jobportal/job/get/${id}`,
      providesTags: ["getJobById"]
    }),
    getJobByCompanyId: builder.query({
      query: ({ id = "", page = 1, limit = 8 }) =>
        `/api/jobportal/job/getAllJobsBycompanyId/${id}?page=${page}&limit=${limit}`,
    }),
    getAllJobsByCategory: builder.query({
      query: ({ limit = 8, page = 1, category = "", id = "", searchedQuery = "" }) =>
        `/api/jobportal/job/get?cat=${category}&id=${id}&keyword=${searchedQuery}&limit=${limit}&page=${page}`,
    }),
    getAppliedJobs: builder.query({
      query: ({ page = 1, limit = 5 }) => `/api/jobportal/application/get?page=${page}&limit=${limit}`,
    }),

    getApplicants: builder.query({
      query: ({ id = "", currentPage = 1, perPage = 5 }) => `/api/jobportal/application/${id}/applicants?page=${currentPage}&perPage=${perPage}`,
    }),
    getApplicantTracking: builder.query({
      query: ({ currentPage = 1, perPage = 5, status = "" }) => `/api/jobportal//application/tracking?page=${currentPage}&limit=${perPage}&status=${status}`,
    }),
    getAdminJobById: builder.query({
      query: ({ companyId = "" }) => `/api/jobportal/job/getadminjob/${companyId}`,
      invalidatesTags: ['getAdminJob'],
      providesTags: ["getadminjobbyid"]

    }),
    getJobCategories: builder.query({
      query: ({ page = 1, perPage = 8, featuredIds = "" }) =>
        `/api/jobportal/filters/job-categories?page=${page}&perPage=${perPage}&featuredIds=${featuredIds}`,
    }),
    getOptions: builder.query({
      query: () =>
        `/api/jobportal/filters/optionsFilter`,
    }),

    getAllApllidJobs: builder.query({
      query: ({ page = 1, limit = 8 }) =>
        `/api/jobportal/application/get?page=${page}&limit=${limit}`,
    }),

    getSubscription: builder.query({
      query: () => '/api/jobportal/subscription',
    }),
    getLocationFilters: builder.query({
      query: ({ page = 1, limit = 10, keyword = "", } = {}) => `/api/jobportal/filters/location?page=${page}&limit=${limit}&keyword=${keyword}`,
    }),
    getIndustryFilters: builder.query({
      query: ({ page = 1, limit = 10, keyword = "", } = {}) => `/api/jobportal/filters/industry?page=${page}&limit=${limit}&keyword=${keyword}`,
    }),
    getAllCompaniesByLatestHiring: builder.query({
      query: ({ page = 1, limit = 10, keyword = "", } = {}) => `/api/jobportal/company/getAllCompaniesByLatestHiring?page=${page}&limit=${limit}&keyword=${keyword}`,
    }),
    getAllTopCompanies: builder.query({
      query: ({ limit = 8, page = 1, location = "", subcategory = "", category = "", searchedQuery = "", islatest = "", minSalary = "", maxSalary = "", min_years = "", education = "", max_years = "", jobtype = "" } = {}) => `/api/jobportal/company/topcompanies?islatest=${islatest}&education=${education}&subcategory=${subcategory}&cat=${category}&location=${location}&keyword=${searchedQuery}&limit=${limit}&page=${page}&minSalary=${minSalary}&maxSalary=${maxSalary}&min_years=${min_years}&max_years=${max_years}&jobtype=${jobtype}`,
    }),
    getSubIndustryFilters: builder.query({
      query: ({ parent = "", page = 1, limit = 10, keyword = "", } = {}) => `/api/jobportal/filters/sub-industry?parent=${parent}&page=${page}&limit=${limit}&keyword=${keyword}`,
    }),
    getSalaryFilters: builder.query({
      query: () => '/api/jobportal/filters/salary',
      transformResponse: (response) => response.data,
    }),
    getAllFilters: builder.query({
      query: () => '/api/jobportal/filters/getAllFilters',
      transformResponse: (response) => response.data,
    }),
    postJob: builder.mutation({
      query: (data) => ({
        url: '/api/jobportal/job/post',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // for `withCredentials: true`
      }),
      invalidatesTags: ['getAdminJob']
    }),
    updateJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/jobportal/job/update/${id}`,
        method: 'PUT',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // for `withCredentials: true`
      }),
      invalidatesTags: ['getAdminJob', "getadminjobbyid"]
    }),
    ApplicatSTatuschange: builder.mutation({
      query: ({ id, status }) => ({
        url: `/api/jobportal/application/status/${id}/update`,
        method: 'POST',
        body: { status },
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // for `withCredentials: true`
      }),
    }),
    // Mutation for applying to a job
    applyJob: builder.mutation({
      query: ({ jobId }) => ({
        url: `/api/jobportal/application/apply/${jobId}`,
        method: 'POST',
        body: {},
        credentials: 'include', // To include cookies with requests
      }),
      invalidatesTags: ["getJobById"]
    }),
    // companies
    getAllCompanies: builder.query({
      query: () => '/api/jobportal/company/get',
    }),
    getCompanyById: builder.query({
      query: ({ companyId = "" }) => `/api/jobportal/company/get/${companyId}`,
    }),
    updateCompany: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/jobportal/company/update/${id}`,
        method: 'PUT',
        body: formData,
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // },
        credentials: 'include' // For cookies
      }),
      invalidatesTags: ['UserProfile'], // Invalidate a specific tag to trigger refetch

    }),
    createCompany: builder.mutation({
      query: (data) => ({
        url: '/api/jobportal/company/register',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // for `withCredentials: true`
      }),
    }),
    //  locations msters
    getCountryList: builder.query({
      query: () => '/api/countryList',
    }),
    getStatesByCountry: builder.query({
      query: ({ country_id = "" }) => `/api/getstatebycountry?country_id=${country_id}`,
    }),
    getCitiesByState: builder.query({
      query: ({ state_id = "" }) => `/api/getcitybystate?state_id=${state_id}`,
    }),

    getFunctionalAreas: builder.query({
      query: ({ page = 1, limit = 10, featuredIds = "" }) => `/api/jobportal/utilities/functionalareas?page=${page}&limit=${limit}&featuredIds=${featuredIds}`,
    }),
    getCareerLevels: builder.query({
      query: ({ page = 1, limit = 10, featuredIds = "" }) => `/api/jobportal/utilities/careerlevels?page=${page}&limit=${limit}&featuredIds=${featuredIds}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllAdminJobsQuery, useUpdateCompanyMutation, useUpdateProfileMutation,
  useGetAllCompaniesQuery, useCreateCompanyMutation, useGetAllApllidJobsQuery, useGetApplicantTrackingQuery,
  useGetAllJobsQuery, useGetCountryListQuery, useGetJobByIdQuery, useGetOptionsQuery, useGetUserMenuQuery,
  useGetStatesByCountryQuery, useGetCitiesByStateQuery, useGetAllJobsByCategoryQuery, useGetAppliedJobsQuery, useGetindustryQuery, useGetAllJobTitleQuery,
  useGetCompanyByIdQuery, useGetAdminJobByIdQuery, useGetJobCategoriesQuery, useApplicatSTatuschangeMutation,
  useGetAllJobPortalUsersQuery, useGetJobPortalProfileQuery, useGetApplicantsQuery, useGetRoleQuery, useRegisterRecruiterMutation, useRegisterJobseekerMutation, useUpdateJobseekerMutation,
  useGetSubscriptionQuery, useGetLocationFiltersQuery, useGetIndustryFiltersQuery, useLoginMutation,
  useGetSalaryFiltersQuery, usePostJobMutation, useUpdateJobMutation, useApplyJobMutation, useGetJobByCompanyIdQuery,
  useGetAllFiltersQuery, useGetFunctionalAreasQuery, useGetCareerLevelsQuery, useGetSubIndustryFiltersQuery, useGetAllCompaniesByLatestHiringQuery, useGetAllTopCompaniesQuery
} = jobPortalApi;