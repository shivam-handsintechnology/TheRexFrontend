import React from 'react'
import { useParams } from 'react-router-dom'
import Employer from './Employer/Index'
import JobSeeker from './Candidate/Index'

const Index = () => {
    const { role = "student" } = useParams()
    return role === "recruiter" ? <Employer /> : <JobSeeker />
}

export default Index
