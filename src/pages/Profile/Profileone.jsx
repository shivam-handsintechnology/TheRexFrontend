import React, { useEffect, useState, useRef } from 'react'
import companyaddress from "@/assets/register/nature.svg"
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useRegisterContext } from '@/services/registerContext.jsx';
import API_URL from '@/services/config';


const Profileone = () => {
    const { registerData, setRegisterData, handleRegister, step, setStep } = useRegisterContext();
    const [localdata, setLocalData] = useState(registerData);

    const [citizenshiplist, setCitizenshiplist] = useState([]);
    const [previewphoto, setPreviewphoto] = useState([]);

    useEffect(() => {
        getCitizenshipList()
    }, [])

    const getCitizenshipList = async () => {
        try {
            const requestOption = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
            await fetch(`${API_URL}/api/getCitizenship`, requestOption)
                .then((response) => response.json())
                .then((data) => {
                    if (data.status == 200) {
                        setCitizenshiplist(data.data)

                    } else {
                        console.log(data.message)
                        swal({
                            text: data.message,
                            icon: "error",
                        });
                    }
                })

        } catch (err) {
            console.error(err.message)
        }
    }

    const handlenameChange = (e) => {
        setLocalData({ ...localdata, name: e.target.value })
        setRegisterData({ ...registerData, name: e.target.value })
    }

    const handleFatherNameChange = (e) => {
        setLocalData({ ...localdata, father_name: e.target.value })
        setRegisterData({ ...registerData, father_name: e.target.value })
    }

    const handleLastNameChange = (e) => {
        setLocalData({ ...localdata, last_name: e.target.value })
        setRegisterData({ ...registerData, last_name: e.target.value })
    }

    const handleDobChange = (e) => {
        setLocalData({ ...localdata, dob: e.target.value })
        setRegisterData({ ...registerData, dob: e.target.value })
    }

    const handleGenderChange = (e) => {
        setLocalData({ ...localdata, gender: e.target.value })
        setRegisterData({ ...registerData, gender: e.target.value })
    }

    const handleCitizenshipChange = (e) => {
        const selectedValue = JSON.parse(e.target.value); // Parse the selected JSON string
        console.log(selectedValue);

        setLocalData({ ...localdata, citizenship: selectedValue?.country, country_code: selectedValue?.code }); // Update localdata with parsed object
        setRegisterData({ ...registerData, citizenship: selectedValue?.country, country_code: selectedValue?.code }); // Update registerData with parsed object
    };

    const handleCountryCodeChange = (e) => {
        setLocalData({ ...localdata, country_code: e.target.value })
        setRegisterData({ ...registerData, country_code: e.target.value })
    }

    const handleUserPhotoChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setLocalData((prevData) => ({
                ...prevData,
                userPhoto: file ? file.name : 'No file selected',
                user_photo: file,
                previewphoto: URL.createObjectURL(file),
            }));
            setRegisterData((prevData) => ({
                ...prevData,
                userPhoto: file ? file.name : 'No file selected',
                user_photo: file,
                previewphoto: URL.createObjectURL(file),
            }));
            console.log("File selected:", file);
        } else {
            console.log("No file selected");
            setLocalData((prevData) => ({
                ...prevData,
                userPhoto: ['No file selected'],
                user_photo: null,
                previewphoto: null,
            }));
            setRegisterData((prevData) => ({
                ...prevData,
                userPhoto: ['No file selected'],
                user_photo: null,
                previewphoto: null,
            }));
        }
    }


    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };
    const handleButtonClick = () => {
        document.getElementById('file-input').click();
    };

    console.log(localdata)


    return (
        <div>
            <div className="register-pagess">
                <Row>
                    <Col lg={4}>
                        <label>
                            First Name
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                                <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your Name"
                                aria-label="Username"
                                value={localdata.name}
                                onChange={handlenameChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                            Middle Name
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                                <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your Father Name"
                                aria-label="Username"
                                value={localdata.father_name}
                                onChange={handleFatherNameChange}

                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                            Last Name
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                                <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your Last Name"
                                aria-label="Username"
                                value={localdata.last_name}
                                onChange={handleLastNameChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                            Date Of Birth
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                                <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                type="date"
                                placeholder="Enter your Date Of Birth"
                                aria-label="Username"
                                value={localdata.dob}
                                onChange={handleDobChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                            Gender
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                                <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                as="select" // Changed this to `as="select"` to make it a dropdown
                                placeholder="Enter your Gender"
                                aria-label="Gender"
                                value={localdata.gender}
                                onChange={handleGenderChange}
                            >
                                <option value="" hidden>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Control>
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                            Upload Your Photo (Passport Size)
                        </label>
                        <Form.Group className="mb-4 file-type">
                            <div className="file-input">
                                <input
                                    type="file"
                                    id="file-input"
                                    onChange={handleUserPhotoChange}
                                    style={{ display: 'none' }}
                                    placeholder=" Upload Your Photo"

                                />
                                <button type="button" className="button" onClick={handleButtonClick}>
                                    Upload
                                </button>
                                <span className="label" data-js-label="">
                                    {localdata.userPhoto}
                                </span>
                            </div>
                            {/* <div className='cross-iconss'>
                                {localdata.previewphoto?.length ? <img src={localdata.previewphoto} style={{ width: '200px' }} alt="Passport preview" /> : null}
                            </div> */}
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <label>
                            Citizenship
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                                <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Select aria-label="Default select example" onChange={handleCitizenshipChange}>
                                <option hidden>Select Citizenship</option>
                                {citizenshiplist.map((val, index) => (
                                    <option key={index} value={JSON.stringify(val)} selected={val.country == registerData.citizenship}>{val.country}</option>
                                ))}

                            </Form.Select>
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                            Country Code
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                                <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your Country Code"
                                aria-label="Username"
                                value={localdata.country_code}
                                onChange={handleCountryCodeChange}
                                readOnly
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <div className='cross-iconss'>
                            {localdata.previewphoto?.length ? <img src={localdata.previewphoto} style={{ width: '200px' }} alt="Passport preview" /> : null}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Profileone
