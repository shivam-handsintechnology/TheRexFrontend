import React, { useEffect, useState } from 'react';

import useCandidateForm from '@/hooks/API/useCandidateForm';
import JobSeekerForm from './JobSeekerForm';
const JobSeeker = () => {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        errors,
        watch,
        CountryList,
        StatList,
        CityList,
        industryData,
        onSubmit,
    } = useCandidateForm();

    return (
        <JobSeekerForm {...{
            register,
            control,
            handleSubmit,
            setValue,
            errors,
            watch,
            CountryList,
            StatList,
            CityList,
            industryData,
            onSubmit,
        }} />
    );
};

export default JobSeeker;