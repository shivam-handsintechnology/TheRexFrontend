import React from 'react'
import { useGetUserMenuQuery } from '@/redux/apiSlice';

const JobPortalNavbar = () => {
    const { data } = useGetUserMenuQuery()
    console.log("data", data)
    return (
        <div>

        </div>
    )
}

export default JobPortalNavbar
