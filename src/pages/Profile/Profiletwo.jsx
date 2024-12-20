import React, { useState } from 'react'
import companyaddress from "@/assets/register/nature.svg"
import { Col, Form, InputGroup, Row } from 'react-bootstrap'

import { useRegisterContext } from '@/services/registerContext.jsx';


const Profiletwo = () => {

  const { registerData, setRegisterData, handleRegister, step, setStep } = useRegisterContext();
  const [localdata, setLocalData] = useState(registerData);

  const handleAadharChange = (e) => {
    setLocalData({ ...localdata, aadhar_number: e.target.value })
    setRegisterData({ ...registerData, aadhar_number: e.target.value })
  }

  const handleAadharFileChange = (e) => {
    const file = e.target.files[0];

    setLocalData((prevData) => ({
      ...prevData,
      aadharPhoto: file ? file.name : 'No file selected',
      aadhar_photo: file,
    }));
    setRegisterData((prevData) => ({
      ...prevData,
      aadharPhoto: file ? file.name : 'No file selected',
      aadhar_photo: file,
    }));
  }

  const handlePanChange = (e) => {
    setLocalData({ ...localdata, pan_number: e.target.value })
    setRegisterData({ ...registerData, pan_number: e.target.value })
  }

  const handlePanFileChange = (e) => {
    const file = e.target.files[0];

    setLocalData((prevData) => ({
      ...prevData,
      panPhoto: file ? file.name : 'No file selected',
      pan_photo: file,
    }));
    setRegisterData((prevData) => ({
      ...prevData,
      panPhoto: file ? file.name : 'No file selected',
      pan_photo: file,
    }));
  }

  const handlePassportChange = (e) => {
    setLocalData({ ...localdata, passport_number: e.target.value })
    setRegisterData({ ...registerData, passport_number: e.target.value })
  }

  const handlePassportfilechange = (e) => {
    const file = e.target.files[0]; 

    setLocalData((prevData) => ({
      ...prevData,
      passportPhoto: file ? file.name : 'No file selected',
      passport_photo: file,
    }));
    setRegisterData((prevData) => ({
      ...prevData,
      passportPhoto: file ? file.name : 'No file selected',
      passport_photo: file,
    }));
  }





  // const [fileName, setFileName] = useState('');

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFileName(file.name);
  //   }
  // };

  const handleaadharButtonClick = () => {
    document.getElementById('file-input1').click();
  };

  const handlepanButtonClick = () => {
    document.getElementById('file-input2').click();
  };

  const handlepassportButtonClick = () => {
    document.getElementById('file-input3').click();
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
        <Row>
          <Col lg={4}>
            <label>
              Aadhar Card Number {localdata.citizenship === 'India' && localdata.citizenship !== '' ? '*' : '(optional)'}
            </label>
            <InputGroup className="mb-4">
              <InputGroup.Text id="basic-addon1">
                <img className="input-icon" src={companyaddress} /></InputGroup.Text>
              <Form.Control
                placeholder="Enter your Aadhar Card Number"
                aria-label="Username"
                onInput={allowOnlyNumbers}
                value={localdata.aadhar_number}
                onChange={handleAadharChange}
              />
            </InputGroup>
          </Col>
          <Col lg={4}>
            <label>
              PAN Card Number {localdata.citizenship === 'India' && localdata.citizenship !== '' ? '*' : '(optional)'}
            </label>
            <InputGroup className="mb-4">
              <InputGroup.Text id="basic-addon1">
                <img className="input-icon" src={companyaddress} /></InputGroup.Text>
              <Form.Control
                placeholder="Enter your PAN Card Number"
                aria-label="Username"
                value={localdata.pan_number}
                onChange={handlePanChange}
              />
            </InputGroup>
          </Col>
          <Col lg={4}>
            <label>
              Passport Number {localdata.citizenship !== 'India' && localdata.citizenship !== '' ? '*' : '(optional)'}
            </label>
            <InputGroup className="mb-4">
              <InputGroup.Text id="basic-addon1">
                <img className="input-icon" src={companyaddress} /></InputGroup.Text>
              <Form.Control
                placeholder="Enter your Passport Number"
                aria-label="Username"
                value={localdata.passport_number}
                onChange={handlePassportChange}
              />
            </InputGroup>
          </Col>
          <Col lg={4}>
            <label>
              Upload Aadhar Card {localdata.citizenship === 'India' && localdata.citizenship !== '' ? '*' : '(optional)'}
            </label>
            <Form.Group className="mb-4 file-type">
              <div className="file-input">
                <input
                  type="file"
                  id="file-input1"
                  onChange={handleAadharFileChange}
                  style={{ display: 'none' }}
                  placeholder=" Upload Aadhar Card"
                />
                <button type="button" className="button" onClick={handleaadharButtonClick}>
                  Upload
                </button>
                <span className="label" data-js-label="">
                  {localdata.aadharPhoto ? localdata.aadharPhoto : 'No file selected'}
                </span>
              </div>
            </Form.Group>
          </Col>
         
          <Col lg={4}>
            <label>
              Upload PAN Card {localdata.citizenship === 'India' && localdata.citizenship !== '' ? '*' : '(optional)'}
            </label>
            <Form.Group className="mb-4 file-type">
              <div className="file-input">
                <input
                  type="file"
                  id="file-input2"
                  onChange={handlePanFileChange}
                  style={{ display: 'none' }}
                  placeholder=" Upload PAN Card"
                />
                <button type="button" className="button" onClick={handlepanButtonClick}>
                  Upload
                </button>
                <span className="label" data-js-label="">
                  {localdata.panPhoto ? localdata.panPhoto : 'No file selected'}
                </span>
              </div>
            </Form.Group>
          </Col>
          <Col lg={4}>
            <label>
            Upload Passport Photo {localdata.citizenship !== 'India' && localdata.citizenship !== '' ? '*' : '(optional)'}
            </label>
            <Form.Group className="mb-4 file-type">
              <div className="file-input">
                <input
                  type="file"
                  id="file-input3"
                  onChange={handlePassportfilechange}
                  style={{ display: 'none' }}
                  placeholder=" Upload Passport Photo"
                />
                <button type="button" className="button" onClick={handlepassportButtonClick}>
                  Upload
                </button>
                <span className="label" data-js-label="">
                  {localdata.passportPhoto ? localdata.passportPhoto : 'No file selected'}
                </span>
              </div>
            </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Profiletwo
