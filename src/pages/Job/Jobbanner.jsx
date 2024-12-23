import { jobPortalApi, useGetIndustryFiltersQuery, useGetLocationFiltersQuery } from '@/redux/apiSlice';
import { setFiltersData } from '@/redux/FilterSlice';
import { paths } from '@/services/path';
import React, { useState, useEffect } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Jobbanner = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handleChange = (e) => {
        setSearch((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // Function to handle state update
    const handleChangeData = (name, value) => {
        setSearch((prev) => ({
            ...prev,
            [name]: value,
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
            console.log(data)
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

    // On Search Submit
    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            if (search.location) {
                dispatch(setFiltersData({ type: "location", value: [search.location] }));
            }
            if (search.category) {
                dispatch(setFiltersData({ type: "category", value: [search.category] }));
            }
            dispatch(setFiltersData({ type: "searchedQuery", value: search.searchedQuery }));
            navigate(paths.Jobservices)
        } catch (error) {
            console.log("error", error)
        }
    };
    return (
        <div>
            <div className="container-fluid" style={{ padding: 0 }}>
                <div className="image-container">
                    <img src="https://mysso.org/assets/networkingbanner-SCexoDmC.jpg" className="w-100" alt="" />
                    <div className="overlay12">
                        <div className="overlaycontentnt">
                            <h3>
                                Search Between More Then <span>5, 000</span> Open Jobs
                            </h3>
                            <div className="selectbutt">
                                <Row>
                                    <Col lg={2}>
                                        <input type='text' onChange={handleChange} name={"searchedQuery"} className='form-control' placeholder='Search here...' />
                                    </Col>
                                    <Col lg={2}>
                                        <Form.Select onChange={handleChange} name={"location"} aria-label="Default select example">
                                            <option value={""} hidden>Location</option>
                                            {
                                                search?.locationData?.map((item) => (
                                                    <option value={item?.value}>{item?.label}</option>
                                                ))
                                            }

                                        </Form.Select>
                                    </Col>
                                    <Col lg={2}>
                                        <Form.Select onChange={handleChange} name={"category"} aria-label="Default select example">
                                            <option value={""} hidden>Industry</option>
                                            {
                                                search?.industryData?.map((item) => (
                                                    <option value={item?.value}>{item?.label}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </Col>
                                    <Col lg={2}>
                                        <button className='job-serach' onClick={handleSubmit}>Search</button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Jobbanner
