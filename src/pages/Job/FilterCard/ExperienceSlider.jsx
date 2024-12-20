import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { setFIlter } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';

const ExperienceSlider = ({ data }) => {
    const dispatch = useDispatch();
    const jobFilters = useSelector((state) => state.job);

    const handleRangeChange = (event, value) => {
        dispatch(
            setFIlter({
                type: 'max_years',
                value: value
            })
        );
    };

    return (
        <div className="slider-container">
            <span className="min-value">{jobFilters?.min_years || 0}</span>
            <Slider
                value={jobFilters?.max_years || 0}
                min={0}
                max={data?.max || 10}
                onChange={handleRangeChange}
                valueLabelDisplay="auto"
                sx={{
                    '& .MuiSlider-thumb': {
                        boxShadow: 'none',
                        border: '2px solid currentColor',
                    },
                    '& .MuiSlider-track': {
                        height: '4px',
                    },
                    '& .MuiSlider-rail': {
                        height: '4px',
                    },
                }}
            />
            <span className="max-value">{jobFilters?.max_years || data?.max || 10}</span>
        </div>
    );
};

export default ExperienceSlider;
