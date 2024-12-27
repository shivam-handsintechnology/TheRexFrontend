import React, { useEffect, useState } from 'react';

import useEmployerForm from '@/hooks/useEmployerForm';
import EmployerForm from './EmployerForm';
const Employer = ({ method = "POST" }) => {
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
    } = useEmployerForm(method);
    return (
        <EmployerForm {...{
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
            onSubmit
        }}
        />
    )
}

export default Employer;