import React from 'react'
import { setFIlter } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
const SalarySlider = ({ data, expanded, toggleExpand }) => {
    const jobFilters = useSelector((state) => state.job);
    const dispatch = useDispatch();
    return (
        <div className="checkbox-container">
            {data?.slice(0, expanded.salary ? data?.length : 3).map((salaryRange, index) => (
                <Form.Check
                    key={index}
                    type="checkbox"
                    onChange={(e) => {
                        dispatch(setFIlter({
                            type: 'minSalary',
                            value: e.target.min
                        }))
                        dispatch(setFIlter({
                            type: 'maxSalary',
                            value: e.target.max
                        }))
                    }}
                    checked={jobFilters?.maxSalary == salaryRange.max && jobFilters?.minSalary == salaryRange.min}
                    min={salaryRange.min}
                    max={salaryRange.max}
                    label={`${salaryRange.min} - ${salaryRange.max} lacs (${salaryRange.count || 0})`}
                />
            ))}
            {data?.length > 3 && (
                <button
                    className="read-more-sss"
                    onClick={() => toggleExpand('salary')}
                >
                    {expanded.salary ? 'Read Less' : 'Read More'}
                </button>
            )}
        </div>
    )
}

export default SalarySlider
