import React from 'react'
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Indutry = ({ data, expanded, toggleExpand, handleChange }) => {
    const jobFilters = useSelector((state) => state.job);
    return (
        <>
            {data.slice(0, expanded.industry ? data.length : 3).map((industry, index) => (
                <Form.Check
                    key={index}
                    type="checkbox"
                    value={Array.isArray(jobFilters?.category) && jobFilters?.category?.map((item) => item)}
                    checked={Array.isArray(jobFilters?.category) && jobFilters?.category?.includes(industry._id)}
                    onChange={() => handleChange("category", industry._id)}
                    label={`${industry?.label} ${industry?.totalJobs || 0}`}
                />
            ))}

            {data.length > 3 && (
                <button
                    className="read-more-sss"
                    onClick={() => toggleExpand('industry')}
                >
                    {expanded.industry ? 'Read Less' : 'Read More'}
                </button>
            )}
        </>
    )
}

export default Indutry
