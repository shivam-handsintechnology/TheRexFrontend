import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const WorkModeFilter = ({ data, expanded, toggleExpand, handleChange }) => {
    const jobFilters = useSelector((state) => state.job);
    return (
        <>
            {data.slice(0, expanded.workMode ? data.length : 3).map((jobType, index) => (
                <Form.Check
                    key={index}
                    type="checkbox"
                    value={Array.isArray(jobFilters?.jobtype) && jobFilters?.jobtype?.map((item) => item)}
                    checked={Array.isArray(jobFilters?.jobtype) && jobFilters?.jobtype?.includes(jobType.label)}
                    onChange={() => handleChange("jobtype", jobType.label)}
                    label={`${jobType.label} (${jobType?.total || 0})`}
                />
            ))}

            {data?.length > 3 && (
                <button
                    className="read-more-sss"
                    onClick={() => toggleExpand('workMode')}
                >
                    {expanded.workMode ? 'Read Less' : 'Read More'}
                </button>
            )}
        </>
    );
};

export default WorkModeFilter;
