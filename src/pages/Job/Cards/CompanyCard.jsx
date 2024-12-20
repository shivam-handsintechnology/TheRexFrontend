import React from 'react'
import { EmployerLogo } from '@/services/config'
import { useNavigate } from 'react-router-dom'
import { paths } from '@/services/path'
const CompanyCard = ({ item }) => {
    const navigate = useNavigate()
    return (
        <div className='late-ompanies'>
            <img src={item?.logo ? EmployerLogo + item?.logo?.filename : ""} />
            <h3>{item?.name}</h3>
            <p>{item?.location}</p>
            <h4>{item?.vacancies} Vacancies</h4>
            <button onClick={() => navigate(`${paths.Jobdetails}/${item?._id}`)}>View More</button>
        </div>
    )
}

export default CompanyCard
