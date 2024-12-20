import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const Education = ({ data, expanded, toggleExpand, handleChange }) => {
    const jobFilters = useSelector((state) => state.job);
    return (
        <>
            {
                data?.slice(1, expanded.education ? data.length : 4).map((degree, index) => (
                    <Form.Check
                        key={index}
                        type="checkbox"
                        value={Array.isArray(jobFilters?.education) && jobFilters?.education?.map((item) => item)}
                        checked={Array.isArray(jobFilters?.education) && jobFilters?.education?.includes(degree._id)}
                        onChange={() => handleChange("education", degree._id)}
                        label={`${degree._id} (${degree.total})`}
                    />
                ))}
            {data.length > 4 && (
                <button
                    className="read-more-sss"
                    onClick={() => toggleExpand('education')}
                >
                    {expanded.education ? 'Read Less' : 'Read More'}
                </button>
            )}
        </>
    );
};

export default Education;
