import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Container, Button } from 'react-bootstrap';
import { paths } from '@/services/path';
import { CandidateUploadPath } from '@/services/config';
import { handleDownload } from '@/utils';
const JobListing = ({ jobs }) => {
    const navigate = useNavigate();
    return (
        <table className='table table=bordered' >
            <thead>
                <tr>
                    <th className=" text-center" >Full Name</th>
                    <th className=" -center">Email ID</th>
                    <th className=" -center">Phone Number</th>
                    <th className=" text-center">Resume</th>
                    <th className=" text-center">Status</th>
                    <th className=" text-center">Date</th>
                    <th className=" text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    jobs && jobs?.map((job) => {
                        const resumeurl = CandidateUploadPath + job?.applicant?.resume?.fieldname + "/" + job?.applicant?.resume?.filename
                        const resumename = CandidateUploadPath + job?.applicant?.resume?.fieldname + "/" + job?.applicant?.resume?.filename
                        return <tr>
                            <td className="text-center">{job?.applicant?.name}</td>
                            <td className="text-center">{job?.applicant?.email}</td>
                            <td className="text-center">{job?.applicant?.phone}</td>
                            <td className="text-center d-flex">
                                <Button onClick={() => navigate(resumeurl)} className='bg-light text-dark border-0 mx-2'><i class="fa fa-eye"></i></Button>
                                <Button onClick={() => handleDownload(resumeurl, resumename)} className='bg-light text-dark border-0 '><i class="fa fa-download"></i></Button>
                            </td>
                            <td className="text-center">{job?.createdAt.split("T")[0]}</td>
                            <td className="text-center text-capitalize">{job?.status}</td>
                            <td className="text-center"> <Button onClick={() => navigate(`${paths.ApplicantsByJobId}/${job._id}`)} className='bg-light text-dark border-0 '><i class="text-danger fa fa-close"></i></Button></td>
                        </tr>

                    })
                }
            </tbody>
        </table>


    )
}

export default JobListing