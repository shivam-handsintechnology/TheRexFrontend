import React, { useState } from 'react'
import companyaddress from "@/assets/register/nature.svg"
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useRegisterContext } from '@/services/registerContext.jsx';
import { Loader } from 'lucide-react';

const Profilefour = () => {
  const { registerData, setRegisterData, handleRegister, step, setStep, loading } = useRegisterContext();
    const [localdata, setLocalData] = useState(registerData);

  const handleDeclarationDateChange = (e) => {
    setLocalData({ ...localdata, declaration_date: e.target.value })
    setRegisterData({ ...registerData, declaration_date: e.target.value })
  }

  const handleDeclarationPlaceChange = (e) => {
    setLocalData({ ...localdata, declaration_place: e.target.value })
    setRegisterData({ ...registerData, declaration_place: e.target.value })
  }

  const handlesignFileChange = (e) => {
    const file = e.target.files[0];

    setLocalData((prevData) => ({
      ...prevData,
      signaturephoto: file ? file.name : 'No file selected',
      signature: file,
    }));

    setRegisterData((prevData) => ({
      ...prevData,
      signaturephoto: file ? file.name : 'No file selected',
      signature: file,
    }));
  }

  const handleButtonClick = () => {
    document.getElementById('file-input').click();
  };
  return (
    <div>
       {loading &&
                    <Loader />
                }
      <div className="register-pagess">
        <ul className='declarations'>
          <li>I hereby declare that the details furnished above are true and correct to the best of my knowledge/belief and I undertake to inform you of any changes therein, immediately. In case any of the above information is found to be false or untrue or misleading or misrepresenting. I am aware that I may be held liable for it.</li>
          <li>I hereby declare that I am not making this application for the purpose contravention of any Act, Rules, Regulations or any statute of legislation or any notifications/directions issued by any governmental or statutory authority from time to time</li>
          <li>I hereby consent to receiving information from Central KYC Registry through SMS/Email on the above registered number/email address and to download the information from CKYCR</li>
          <li>I am providing the consent to MF/RTA/SEBI registered intermediary to share this KYC data / applicable Aadhaar XML data with KRA and share the data to other participating intermediaries as mandated by PMLA Act/Rules/SEBI guidelines.</li>
        </ul>
        <Row>
          <Col lg={4}>
            <label>
            Date
            </label>
            <InputGroup className="mb-4">
              <InputGroup.Text id="basic-addon1">
                <img className="input-icon" src={companyaddress} /></InputGroup.Text>
              <Form.Control
                type="date"
                placeholder="Enter your Date"
                aria-label="Username"
                value={localdata.declaration_date}
                onChange={handleDeclarationDateChange}
              />
            </InputGroup>
          </Col>
          <Col lg={4}>
            <label>
            Place
            </label>
            <InputGroup className="mb-4">
              <InputGroup.Text id="basic-addon1">
                <img className="input-icon" src={companyaddress} /></InputGroup.Text>
              <Form.Control
                placeholder="Enter your Place"
                aria-label="Username"
                value={localdata.declaration_place}
                onChange={handleDeclarationPlaceChange}
              />
            </InputGroup>
          </Col>
          <Col lg={4}>
            <label>
            Upload Your Signature
            </label>
            <Form.Group className="mb-4 file-type">
              <div className="file-input">
                <input
                  type="file"
                  id="file-input"
                  onChange={handlesignFileChange}
                  style={{ display: 'none' }}
                  placeholder=" Upload Your Signature"
                />
                <button type="button" className="button" onClick={handleButtonClick}>
                  Upload
                </button>
                <span className="label" data-js-label="">
                  {localdata.signaturephoto ? localdata.signaturephoto : 'No file selected'}
                </span>
              </div>
            </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Profilefour
