import React, { useState } from 'react'
import companyaddress from "@/assets/register/nature.svg"
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useRegisterContext } from '@/services/registerContext.jsx';

const Profilthree = () => {
    const { registerData, setRegisterData, handleRegister, step, setStep } = useRegisterContext();
    const [localdata, setLocalData] = useState(registerData);
    const [sameAsPermanent, setSameAsPermanent] = useState(false);


    const handleAddressChange = (e) => {
        setLocalData({ ...localdata, address: e.target.value })
        setRegisterData({ ...registerData, address: e.target.value })
    }

    const handleCountryChange = (e) => {
        setLocalData({ ...localdata, country: e.target.value })
        setRegisterData({ ...registerData, country: e.target.value })
    }

    const handleStateChange = (e) => {
        setLocalData({ ...localdata, state: e.target.value })
        setRegisterData({ ...registerData, state: e.target.value })
    }

    const handleCityChange = (e) => {
        setLocalData({ ...localdata, city: e.target.value })
        setRegisterData({ ...registerData, city: e.target.value })
    }

    const handleDistrictChange = (e) => {
        setLocalData({ ...localdata, district: e.target.value })
        setRegisterData({ ...registerData, district: e.target.value })
    }

    const handlePincodeChange = (e) => {
        setLocalData({ ...localdata, pincode: e.target.value })
        setRegisterData({ ...registerData, pincode: e.target.value })
    }

    const handleCorrespondenceAddressChange = (e) => {
        setLocalData({ ...localdata, correspondenceAddress: e.target.value })
        setRegisterData({ ...registerData, correspondenceAddress: e.target.value })
    }

    const handleCorrespondenceCountryChange = (e) => {
        setLocalData({ ...localdata, correspondenceCountry: e.target.value })
        setRegisterData({ ...registerData, correspondenceCountry: e.target.value })
    }

    const handleCorrespondenceStateChange = (e) => {
        setLocalData({ ...localdata, correspondenceState: e.target.value })
        setRegisterData({ ...registerData, correspondenceState: e.target.value })
    }

    const handleCorrespondenceCityChange = (e) => {
        setLocalData({ ...localdata, correspondenceCity: e.target.value })
        setRegisterData({ ...registerData, correspondenceCity: e.target.value })
    }

    const handleCorrespondenceDistrictChange = (e) => {
        setLocalData({ ...localdata, correspondenceDistrict: e.target.value })
        setRegisterData({ ...registerData, correspondenceDistrict: e.target.value })
    }

    const handleCorrespondencePincodeChange = (e) => {
        setLocalData({ ...localdata, correspondencePincode: e.target.value })
        setRegisterData({ ...registerData, correspondencePincode: e.target.value })
    }


    const handleSameAsPermanent = (e) => {
        const checked = e.target.checked;
        setSameAsPermanent(checked);
        if (checked) {
            // Copy each field individually from permanentAddress to correspondenceAddress
            setLocalData({
                ...localdata,
                correspondenceAddress: localdata.address,
                correspondenceCountry: localdata.country,
                correspondenceState: localdata.state,
                correspondenceCity: localdata.city,
                correspondenceDistrict: localdata.district,
                correspondencePincode: localdata.pincode,
            });
            setRegisterData({
                ...registerData,
                correspondenceAddress: registerData.address,
                correspondenceCountry: registerData.country,
                correspondenceState: registerData.state,
                correspondenceCity: registerData.city,
                correspondenceDistrict: registerData.district,
                correspondencePincode: registerData.pincode,
            });
        } else {
            // Reset correspondence fields to empty strings
            setLocalData({
                ...localdata,
                correspondenceAddress: '',
                correspondenceCountry: '',
                correspondenceState: '',
                correspondenceCity: '',
                correspondenceDistrict: '',
                correspondencePincode: '',
            });
            setRegisterData({
                ...registerData,
                correspondenceAddress: '',
                correspondenceCountry: '',
                correspondenceState: '',
                correspondenceCity: '',
                correspondenceDistrict: '',
                correspondencePincode: '',
            });
        }
    };
    

    const allowOnlyNumbers = (e) => {
        e.preventDefault();
        const input = e.target;
        const value = input.value.replace(/[^\d]/g, ''); // Replace any non-numeric characters with an empty string
        input.value = value; // Set the input value to the filtered value
    }



    return (
        <div>
            <div className="register-pagess">
                <Card >
                <Row>
                    <Col lg={12}>
                        <label>
                        Permanent Address
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                            <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your Address"
                                aria-label="Username"
                                value={localdata.address}
                                onChange={handleAddressChange}
            
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                        Country
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                            <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your Country"
                                aria-label="Username"
                                value={localdata.country}
                                onChange={handleCountryChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                        State
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                            <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your State"
                                aria-label="Username"
                                value={localdata.state}
                                onChange={handleStateChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                        City
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                            <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your City"
                                aria-label="Username"
                                value={localdata.city}
                                onChange={handleCityChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                        District
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                            <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your District"
                                aria-label="Username"
                                value={localdata.district}
                                onChange={handleDistrictChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                        Pin Code
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                            <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your Pin Code"
                                aria-label="Username"
                                onInput={allowOnlyNumbers}
                                value={localdata.pincode}
                                onChange={handlePincodeChange}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                </Card>
                <Card >
                <Col lg={12} className="mt-3">
                            <Form.Check
                                type="checkbox"
                                label="Same as Permanent Address"
                                checked={sameAsPermanent}
                                onChange={handleSameAsPermanent}
                            />
                        </Col>
                <Row>
                    <Col lg={12}>
                        <label>
                        Correspondence Address
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                            <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your Address"
                                aria-label="Username"
                                value={localdata.correspondenceAddress}
                                onChange={handleCorrespondenceAddressChange}
            
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                        Country
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                            <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your Country"
                                aria-label="Username"
                                value={localdata.correspondenceCountry}
                                onChange={handleCorrespondenceCountryChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                        State
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                            <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your State"
                                aria-label="Username"
                                value={localdata.correspondenceState}
                                onChange={handleCorrespondenceStateChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                        City
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                            <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your City"
                                aria-label="Username"
                                value={localdata.correspondenceCity}
                                onChange={handleCorrespondenceCityChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                        District
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                            <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your District"
                                aria-label="Username"
                                value={localdata.correspondenceDistrict}
                                onChange={handleCorrespondenceDistrictChange}
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={4}>
                        <label>
                        Pin Code
                        </label>
                        <InputGroup className="mb-4">
                            <InputGroup.Text id="basic-addon1">
                            <img className="input-icon" src={companyaddress} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter your Pin Code"
                                aria-label="Username"
                                onInput={allowOnlyNumbers}
                                value={localdata.correspondencePincode}
                                onChange={handleCorrespondencePincodeChange}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                </Card>
            </div>
        </div>
    )
}

export default Profilthree
