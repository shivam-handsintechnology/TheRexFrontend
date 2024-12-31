import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import JobListing from './JobListing'
import { Button, Container } from 'react-bootstrap'
import { useGetAllAdminJobsQuery, useGetApplicantsQuery } from '@/redux/apiSlice'
import { paths } from '@/services/path'
import usePaginationhook from '@/hooks/usePaginationhook'
import Loader from '@/components/common/Loader'

const Index = () => {
    const { jobid } = useParams()
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5)
    const { data, isFetching } = useGetApplicantsQuery({ id: jobid, page: currentPage, limit: itemsPerPage });

    console.log("data", data)
    // Handle page change
    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    // Use the custom hook for pagination
    const pagination = usePaginationhook({
        totalItems: data?.totalCount || 0,
        perPage: itemsPerPage,
        currentPage: currentPage,
        onPageChange,
    });
    if (isFetching) return <Loader />
    return (
        <div className='container'>
            <JobListing jobs={data?.applicants || []} />
            <div className='text-center'>
                {pagination}
            </div>
        </div>
    )
}

export default Index