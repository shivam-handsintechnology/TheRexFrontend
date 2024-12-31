import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Container, Button } from 'react-bootstrap';
import { paths } from '@/services/path';
const JobListing = ({ jobs }) => {
    const navigate = useNavigate();
    return (
        <table className='table table=bordered' >
            <thead>
                <tr>
                    <th className=" text-center" >Company Name</th>
                    <th className=" -center">Job Title</th>
                    <th className=" text-center">Date</th>
                    <th className=" text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    jobs && jobs?.map((job) => (
                        <tr>
                            <td className="text-center">{job?.company?.name}</td>
                            <td className="text-center">{job?.title}</td>
                            <td className="text-center">{job?.createdAt.split("T")[0]}</td>
                            <td className="text-center cursor-pointer edit-button">
                                <Button onClick={() => navigate(`${paths.UpdateJob}/${job._id}`)} className='bg-light text-dark border-0 mx-2'><i class="fa fa-edit"></i></Button>
                                <Button onClick={() => navigate(`${paths.ApplicantsByJobId}/${job._id}`)} className='bg-light text-dark border-0 '><i class="fa fa-eye"></i><span className='px-2'>Applicants</span></Button>
                            </td>
                        </tr>

                    ))
                }
            </tbody>
        </table>


    )
}

export default JobListing