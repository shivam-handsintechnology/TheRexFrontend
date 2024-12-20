import React from 'react'
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const LocationFilterBox = ({ data, expanded, toggleExpand, handleChange }) => {
    const jobFilters = useSelector((state) => state.job);
    return (
        <>
            {data.slice(0, expanded.location ? data.length : 3).map((location, index) => (
                <Form.Check
                    key={index}
                    type="checkbox"
                    value={Array.isArray(jobFilters?.location) && jobFilters?.location?.map((item) => item)}
                    checked={Array.isArray(jobFilters?.location) && jobFilters?.location?.includes(location._id)}
                    onChange={() => handleChange("location", location._id)}
                    label={`${location?.label} ${location?.total || 0}`}
                />
            ))}

            {data.length > 3 && (
                <button
                    className="read-more-sss"
                    onClick={() => toggleExpand('location')}
                >
                    {expanded.location ? 'Read Less' : 'Read More'}
                </button>
            )}
        </>
    )
}

export default LocationFilterBox
