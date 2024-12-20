import React, { useEffect, useState } from 'react';
import { Accordion, Form, Spinner } from 'react-bootstrap';
import { jobPortalApi, useGetOptionsQuery } from '@/redux/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setArrayFilter, setFIlter } from '@/redux/jobSlice';
import ExperienceSlider from './ExperienceSlider';
import SalarySlider from './SalarySlider';
import WorkModeFilter from './WorkModeFilter';
import Education from './Educarion';
import Indutry from './Indutry';
import LocationFilterBox from './LocationFilterBox';

const FilterCard = () => {
    const dispatch = useDispatch()
    const jobFilters = useSelector((state) => state.job);

    const { data, isFetching, } = useGetOptionsQuery()
    // Initial State
    const [search, setSearch] = useState({
        location: "",
        category: "",
        searchedQuery: "",
        locationpage: 1,
        industrypage: 1,
        locationData: [],
        industryData: [],
    })
    const [expanded, setExpanded] = useState({
        workMode: false,
        education: false,
        salary: false,
        industry: false,
        location: false
    });

    const toggleExpand = (section) => {
        setExpanded(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    // Function to handle state update
    const handleChangeData = (name, value) => {
        setSearch((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    // New methods to handle filter updates
    const handleChange = (name, value) => {
        const currentWorkModes = jobFilters[name] || [];
        const updatedWorkModes = currentWorkModes.includes(value)
            ? currentWorkModes.filter(item => item !== value)
            : [...currentWorkModes, value];

        dispatch(setArrayFilter({
            type: [name],
            values: updatedWorkModes
        }));
    };

    // Fetch all location data
    const fetchAllLocations = async () => {
        let currentPage = 1;
        let allLocationData = [];
        while (true) {
            const data = await dispatch(
                jobPortalApi.endpoints.getLocationFilters.initiate({ page: currentPage, limit: 10 })
            ).unwrap();
            allLocationData = Array.from(new Set([...allLocationData, ...data.data]))
            if (!data.hasMore) break;
            currentPage = currentPage + 1
        }
        handleChangeData("locationData", allLocationData);
    };

    // Fetch all industry data
    const fetchAllIndustries = async () => {
        let currentPage = 1;
        let allIndustryData = [];
        while (true) {
            const data = await dispatch(
                jobPortalApi.endpoints.getIndustryFilters.initiate({ page: currentPage, limit: 10 })
            ).unwrap();
            allIndustryData = Array.from(new Set([...allIndustryData, ...data.data]))
            if (!data.hasMore) break;
            currentPage = currentPage + 1
        }
        handleChangeData("industryData", allIndustryData);
    };
    useEffect(() => {
        fetchAllLocations();
        fetchAllIndustries();
    }, []); // Run only on mount

    return (
        <div className='adv-saerhs'>
            <h3>Advanced Search</h3>
            <Accordion defaultActiveKey={['0', '1', '2', '3', '4', '5']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Work mode</Accordion.Header>
                    <Accordion.Body>
                        {Array.isArray(data?.data?.JobTypes) && <WorkModeFilter data={data?.data?.JobTypes} expanded={expanded} toggleExpand={toggleExpand} handleChange={handleChange} />}
                    </Accordion.Body>
                </Accordion.Item>
                <hr />
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Experience</Accordion.Header>
                    <Accordion.Body>
                        {data?.data?.experience?.max && <ExperienceSlider data={data?.data?.experience} />}
                    </Accordion.Body>
                </Accordion.Item>
                <hr />
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Salary</Accordion.Header>
                    <Accordion.Body>
                        {Array.isArray(data?.data?.salary?.ranges) && <SalarySlider data={data?.data?.salary?.ranges || []} expanded={expanded} toggleExpand={toggleExpand} />}
                    </Accordion.Body>
                </Accordion.Item>
                <hr />
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Education</Accordion.Header>
                    <Accordion.Body>
                        {Array.isArray(data?.data?.educations) && <Education data={data?.data?.educations || []} expanded={expanded} toggleExpand={toggleExpand} />}


                    </Accordion.Body>
                </Accordion.Item>
                <hr />
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Industry</Accordion.Header>
                    <Accordion.Body>
                        <Indutry data={search.industryData} expanded={expanded} toggleExpand={toggleExpand} handleChange={handleChange} />
                    </Accordion.Body>
                </Accordion.Item>
                <hr />
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Location</Accordion.Header>
                    <Accordion.Body>
                        <LocationFilterBox data={search.locationData} expanded={expanded} toggleExpand={toggleExpand} handleChange={handleChange} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FilterCard;
