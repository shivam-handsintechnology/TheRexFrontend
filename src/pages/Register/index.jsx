import { useState, useEffect, useRef } from 'react';
import { Col, Container, InputGroup, Row, Form, Tooltip, OverlayTrigger, Spinner } from "react-bootstrap"
import "./Register.css"
import logo from "@/assets/logo.svg"
import gst from "@/assets/register/gst.svg"
import companyname from "@/assets/register/companyname.svg"
import companyaddress from "@/assets/register/companyaddress.svg"
import person from "@/assets/register/person.svg"
import nature from "@/assets/register/nature.svg"
import turnover from "@/assets/register/turnover.svg"
import year from "@/assets/register/year.svg"
import employee from "@/assets/register/employee.svg"
import category1 from "@/assets/register/category.svg"
import email12 from "@/assets/register/email.svg"
import password12 from "@/assets/register/password.svg"
import swal from 'sweetalert';

import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from "react-phone-number-input";
import en from 'react-phone-number-input/locale/en';
import 'react-phone-number-input/style.css';
import API_URL from '@/services/config';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '@/components/common/Loader';

import { useRegisterContext } from '@/services/registerContext.jsx';

const Register = () => {
    const Navigate = useNavigate();

    const [categoryList, setCategoryList] = useState([]);
    const [typeOfCompanyList, setTypeOfCompanyList] = useState([]);
    const [natureOfBusinessList, setNatureOfBusinessList] = useState([]);
    const [loading, setLoading] = useState(false);

    const {isRegistered, setIsRegistered, registerData, setRegisterData, handleRegister, step, setStep } = useRegisterContext();
    const [localdata, setLocalData] = useState(registerData);


    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [requirements, setRequirements] = useState({
        minLength: false,
        uppercase: false,
        lowercase: false,
        symbol: false,
    });

    const validatePassword = (password) => {
        const minLength = 6;
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;
        const symbol = /[!@#$%^&*(),.?":{}|<>]/;
        const number = /\d/;

        const newRequirements = {
            minLength: password.length >= minLength,
            uppercase: uppercase.test(password),
            lowercase: lowercase.test(password),
            symbol: symbol.test(password),
            number: number.test(password),
        };
        setRequirements(newRequirements);

        if (!newRequirements.minLength) {
            return 'Password must be at least 6 characters';
        } else if (!newRequirements.uppercase) {
            return 'Password must contain at least one uppercase letter';
        } else if (!newRequirements.lowercase) {
            return 'Password must contain at least one lowercase letter';
        } else if (!newRequirements.symbol) {
            return 'Password must contain at least one symbol';
        } else if (!newRequirements.number) {
            return 'Password must contain at least one number';
        }


        return '';
    };



    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setLocalData({ ...localdata, password: newPassword });
        const validationError = validatePassword(newPassword);
        setPasswordError(validationError);
    };

    const getValidationIcon = (isValid) => {
        return isValid ? <i className="fa fa-check text-success" aria-hidden="true" /> : <i className="fa fa-times text-danger" aria-hidden="true" />;
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    //refs
    const gstNumberRef = useRef();
    const businessNameRef = useRef();
    const companyAddressRef = useRef();
    const typeOfCompanyRef = useRef();
    const categoryRef = useRef();
    const authorizedPersonRef = useRef();
    const natureOfBusinessRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const contactRef = useRef();
    const annualTurnoverRef = useRef();
    const yearOfInceptionRef = useRef();
    const noOfEmployeesRef = useRef();
    const gstDocumentRef = useRef();
    const msmeDocumentRef = useRef();
    const shopDocumentRef = useRef();
    const companyLogoRef = useRef();

    useEffect(() => {
        getCategotyList();
        gettypeOfCompanyList();
        getNatureOfBusinessList();
    }, []);


    const getCategotyList = async () => {
        try {
            const requestOptions = {
                method: 'GET',
            };

           await fetch(`${API_URL}/api/getCategory`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        setCategoryList(data.data);
                    } else {
                        console.log(data.message);
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const gettypeOfCompanyList = async () => {    
        try {
            const requestOptions = {
                method: 'GET',
            };

            await fetch(`${API_URL}/api/getTypeofCompany`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        setTypeOfCompanyList(data.data);
                    }
                    else {
                        console.log(data.message);
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const getNatureOfBusinessList = async () => {
        try {
            const requestOptions = {
                method: 'GET',
            };

           await fetch(`${API_URL}/api/getNature`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        setNatureOfBusinessList(data.data);
                    }
                    else {
                        console.log(data.message);
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        } catch (error) {
            console.log(error);
        }
    }








    // State to handle the selected option (company or individual)
    const [selectedOption, setSelectedOption] = useState('company');

    // Function to handle option change
    const handleOptionChange = (e) => {
        setLocalData({ ...localdata, businessName: '' });
        setSelectedOption(e.target.value);
        setLocalData({ ...localdata, businessNameType: e.target.value });
    };

    const handleContactChange = (value) => {
        setLocalData({ ...localdata, contact: value });
        if (value === '' || value === undefined) {
            setIsPhoneValid(true);
        } else {
            setIsPhoneValid(isValidPhoneNumber(value));
        }
    }

    // Function to handle button click
    const handleGstDocumentchange = (event) => {
        // const file = event.target.files[0];
        // setGstDocument(file ? file.name : 'No file selected');
        // setGst_document(file);
        const file = event.target.files[0];
        setLocalData((prevData) => ({
            ...prevData,
            gstDocument: file ? file.name : 'No file selected',
            gst_document: file,
        }));
    }

    const handleGstDocument = () => {
        gstDocumentRef.current.click();
    }

    const handleMsmeDocumentchange = (event) => {
        // const file = event.target.files[0];
        // setMsmeDocument(file ? file.name : 'No file selected');
        // setMsme_document(file);
        const file = event.target.files[0];
        setLocalData((prevData) => ({
            ...prevData,
            msmeDocument: file ? file.name : 'No file selected',
            msme_document: file,
        }));
    }

    const handleMsmeDocument = () => {
        msmeDocumentRef.current.click();
    }

    const handleShopDocumentchange = (event) => {
        // const file = event.target.files[0];
        // setShopDocument(file ? file.name : 'No file selected');
        // setShop_document(file);
        const file = event.target.files[0];
        setLocalData((prevData) => ({
            ...prevData,
            shopDocument: file ? file.name : 'No file selected',
            shop_document: file,
        }));
    }

    const handleShopDocument = () => {
        shopDocumentRef.current.click();
    }

    const handleCompanyLogochange = (event) => {
        // const file = event.target.files[0];
        // setCompanyLogo(file ? file.name : 'No file selected');
        // setCompany_logo(file);
        const file = event.target.files[0];
        setLocalData((prevData) => ({
            ...prevData,
            companyLogo: file ? file.name : 'No file selected',
            company_logo: file,
        }));
    }

    const handleCompanyLogo = () => {
        companyLogoRef.current.click();
    }

    const handleNext = () => {
        try {
          // Helper function for validation
          const showError = (message, ref) => {
            swal({ text: message, icon: "warning" });
            if (ref && ref.current) ref.current.focus();
            return;
          };
      
          // Validation checks
          if (!localdata.gstNumber) return showError("Please enter GST number", gstNumberRef);
          if (!localdata.businessName)
            return showError(
              `Please enter ${localdata.businessNameType === 'company' ? 'company' : 'individual'} name`,
              businessNameRef
            );
          if (!localdata.companyAddress) return showError("Please enter company address", companyAddressRef);
          if (!localdata.typeOfCompany) return showError("Please enter type of company", typeOfCompanyRef);
          if (!localdata.category) return showError("Please select category", categoryRef);
          if (
            localdata.businessNameType === 'company' &&
            !localdata.authorizedPerson
          )
            return showError("Please enter authorized person", authorizedPersonRef);
          if (!localdata.natureOfBusiness)
            return showError("Please select nature of business", natureOfBusinessRef);
          if (!localdata.email) return showError("Please enter email", emailRef);
          if (localdata.email && (!localdata.email.includes('@') || !localdata.email.includes('.')))
            return showError("Please enter a valid Email", emailRef);
          if (!localdata.password) return showError("Please enter password", passwordRef);
          if (localdata.password && passwordError)
            return showError(
              `Password must contain at least:
              - 1 Uppercase letter
              - 1 Lowercase letter
              - 1 Symbol
              - 1 Number
              - 6 Characters`,
              passwordRef
            );
          if (!localdata.contact) return showError("Please enter contact number", contactRef);
          if (!isPhoneValid) return showError("Please enter a valid contact number", contactRef);
          if (!localdata.annualTurnover) return showError("Please enter annual turnover", annualTurnoverRef);
          if (!localdata.yearOfInception) return showError("Please enter year of inception", yearOfInceptionRef);
          if (!localdata.noOfEmployees) return showError("Please select number of employees", noOfEmployeesRef);
      
          // Document validation
          const uploadedDocuments = [
            localdata.gst_document,
            localdata.msme_document,
            localdata.shop_document,
          ].filter((doc) => doc !== null);
          if (uploadedDocuments.length < 2)
            return showError(
              "Please upload at least two of the following: GST document, MSME document, or Shop document"
            );
      
          if (!localdata.company_logo) return showError("Please upload company logo");
        setLoading(true);
          // All validations passed
          setRegisterData(localdata);
          setIsRegistered(true);
          Navigate('/Profile');
          setLoading(false);
        } catch (error) {
          console.error("An error occurred in handleNext:", error);
          swal({ text: "Something went wrong! Please try again.", icon: "error" });
        }
      };

    const sendOtp = async () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: localdata.email })
            };

            await fetch(`${API_URL}/api/sendOtp`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        swal({
                            text: data.message,
                            icon: "success"
                        });
                        setLoading(false);
                        Navigate('/OtpLogin');

                    } else {
                        swal({
                            text: data.message,
                            icon: "error"
                        });
                        setLoading(false);
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        } catch (error) {
            console.log(error);
        }
    }


    const allowOnlyNumbers = (e) => {
        e.preventDefault();
        const input = e.target;
        const value = input.value.replace(/[^\d]/g, ''); // Replace any non-numeric characters with an empty string
        input.value = value; // Set the input value to the filtered value
    }


    return (
        <div className="background-register">
            <Container>
                {loading &&
                    <Loader />
                }
                <div className="register-page">
                    <img className="register-logo" src={logo} />
                    <Row>

                        <Col lg={5}>
                            <Row>
                                <label>
                                    Select Type
                                </label>
                                <div className="mb-3 d-flex">
                                    <Form.Check
                                        className='mr-3'
                                        type="radio"
                                        id="company"
                                        label="Company Name"
                                        value="company"
                                        checked={selectedOption === 'company'}
                                        onChange={handleOptionChange}

                                    />
                                    <Form.Check
                                        className='mr-3'
                                        type="radio"
                                        id="individual"
                                        label="Individual Name"
                                        value="individual"
                                        checked={selectedOption === 'individual'}
                                        onChange={handleOptionChange}
                                    />
                                </div>
                            </Row>
                        </Col>
                        <Col lg={5}>
                            <label>
                                GST Number
                            </label>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id="basic-addon1"><img className="input-icon" src={gst} /></InputGroup.Text>
                                <Form.Control
                                    placeholder="Enter GST number"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={localdata.gstNumber}
                                    onChange={(e) => setLocalData({ ...localdata, gstNumber: e.target.value })}
                                    ref={gstNumberRef}
                                />
                                {/* <button className="button" onClick={(e) => setGstNumber(e.target.value)}>Click To Verify</button> */}

                            </InputGroup>
                        </Col>
                        <Col lg={5}>
                            <label>
                                {selectedOption === 'company' ? 'Company Name' : 'Individual Name'}
                            </label>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id="basic-addon1">
                                    <img className="input-icon" src={companyname} alt="icon" />
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder={`Enter your ${selectedOption === 'company' ? 'company' : 'individual'} name`}
                                    aria-label={selectedOption === 'company' ? 'CompanyName' : 'IndividualName'}
                                    aria-describedby="basic-addon1"
                                    value={localdata.businessName}
                                    onChange={(e) => setLocalData({ ...localdata, businessName: e.target.value })}
                                    ref={businessNameRef}
                                />
                            </InputGroup>
                        </Col>


                        <Col lg={5}>
                            <label>
                                Company Address
                            </label>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id="basic-addon1"><img className="input-icon" src={companyaddress} /></InputGroup.Text>
                                <Form.Control
                                    placeholder="Enter your company address"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={localdata.companyAddress}
                                    onChange={(e) => setLocalData({ ...localdata, companyAddress: e.target.value })}
                                    ref={companyAddressRef}
                                />
                            </InputGroup>
                        </Col>
                        <Col lg={5}>
                            <label>
                                Type of Company
                            </label>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id="basic-addon1"><img className="input-icon" src={category1} /></InputGroup.Text>
                                <Form.Select aria-label="Default select example" value={localdata.typeOfCompany} onChange={(e) => setLocalData({ ...localdata, typeOfCompany: e.target.value })} ref={typeOfCompanyRef}>
                                    <option hidden>Select Type of Company</option>
                                    {typeOfCompanyList.map((val, index) => (
                                        <option key={index} value={val._id}>{val.type_of_company}</option>
                                    ))}

                                </Form.Select>
                            </InputGroup>
                        </Col>
                        <Col lg={5}>
                            <label>
                                Category 
                            </label>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id="basic-addon1"><img className="input-icon" src={companyname} /></InputGroup.Text>
                                {/* <Form.Control
                                    placeholder="Type of your company"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={localdata.typeOfCompany}
                                    onChange={(e) => setLocalData({ ...localdata, typeOfCompany: e.target.value })}
                                    ref={typeOfCompanyRef}
                                /> */}
                                <Form.Select aria-label="Default select example" value={localdata.category} onChange={(e) => setLocalData({ ...localdata, category: e.target.value })} ref={categoryRef}>
                                    <option hidden>Select Category</option>
                                    {categoryList.map((val, index) => (
                                        <option key={index} value={val._id}>{val.category}</option>
                                    ))}

                                </Form.Select>
                            </InputGroup>
                        </Col>
                        <Col lg={5}>
                            <label>
                                Authorised Person
                            </label>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id="basic-addon1"><img className="input-icon" src={person} /></InputGroup.Text>
                                <Form.Control
                                    placeholder="Enter authorised person name"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={localdata.authorizedPerson}
                                    onChange={(e) => setLocalData({ ...localdata, authorizedPerson: e.target.value })}
                                    ref={authorizedPersonRef}
                                />
                            </InputGroup>
                        </Col>
                        <Col lg={5}>
                            <label>
                                Nature of Business
                            </label>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id="basic-addon1"><img className="input-icon" src={nature} /></InputGroup.Text>
                                <Form.Select aria-label="Default select example" value={localdata.natureOfBusiness} onChange={(e) => setLocalData({ ...localdata, natureOfBusiness: e.target.value })} ref={natureOfBusinessRef}>
                                    <option hidden>Select nature of business</option>
                                    {natureOfBusinessList.map((val, index) => (
                                        <option key={index} value={val._id}>{val.nature_of_business}</option>
                                    ))}
                                </Form.Select>
                            </InputGroup>
                        </Col>
                        <Col lg={5}>
                            <label>
                                Email Address
                            </label>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id="basic-addon1"><img className="input-icon" src={email12} /></InputGroup.Text>
                                <Form.Control
                                    placeholder="Enter your email address"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={localdata.email}
                                    onChange={(e) => setLocalData({ ...localdata, email: e.target.value })}
                                    ref={emailRef}
                                    autoComplete='off'
                                />
                            </InputGroup>
                        </Col>
                        <Col lg={5} className="mb-4">
                            <label>
                                Password
                            </label>
                            <InputGroup className="mb-1">
                                <InputGroup.Text id="basic-addon1"><img className="input-icon" src={password12} /></InputGroup.Text>
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={localdata.password}
                                    onChange={handlePasswordChange}
                                    ref={passwordRef}
                                />
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                    style={{ cursor: "pointer" }}
                                    onClick={togglePasswordVisibility}
                                >
                                    <i className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"} aria-hidden="true" />
                                </span>

                            </InputGroup>
                            {localdata.password && passwordError &&
                                <OverlayTrigger
                                    placement="bottom"
                                    show={passwordError}  // Control the tooltip's visibility based on passwordError
                                    overlay={
                                        <Tooltip id="tooltip-bottom">
                                            <small><strong>PASSWORD MUST CONTAIN</strong></small>
                                            <ul className="text-muted" style={{ fontSize: '0.875rem', listStyle: 'none', alignItems: 'start' }}>
                                                <li>{getValidationIcon(requirements.uppercase)} At least 1 uppercase letter</li>
                                                <li>{getValidationIcon(requirements.lowercase)} At least 1 lowercase letter</li>
                                                <li>{getValidationIcon(requirements.symbol)} At least 1 symbol</li>
                                                <li>{getValidationIcon(requirements.number)} At least 1 number</li>
                                                <li>{getValidationIcon(requirements.minLength)} At least 6 characters</li>
                                            </ul>
                                        </Tooltip>
                                    }
                                >
                                    <small className="text-danger mb-4">Password doesn't meet the requirements</small>

                                </OverlayTrigger>
                            }

                        </Col>
                        <Col lg={5}>
                            <label>
                                Contact Number
                            </label>
                            {/* <InputGroup className="mb-4">
                                <InputGroup.Text id="basic-addon1"><img className="input-icon" src={imgage1} /></InputGroup.Text>
                                <Form.Control
                                    placeholder="Enter your contact number"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    ref={contactRef}
                                />
                             
                            </InputGroup> */}
                            <div style={{ border: '1px solid #430303', borderRadius: '5px' }}>
                                <PhoneInput
                                    className={`form-control ${!isPhoneValid ? 'is-invalid' : ''}`}
                                    defaultCountry="IN"
                                    international
                                    countryCallingCodeEditable={false}
                                    localization={en}
                                    placeholder="Phone Number"
                                    value={localdata.contact}
                                    onChange={handleContactChange}
                                    ref={contactRef}
                                />
                            </div>
                        </Col>

                        <Col lg={5}>
                            <label>
                                Annual Turnover
                            </label>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id="basic-addon1"><img className="input-icon" src={turnover} /></InputGroup.Text>
                                <Form.Control
                                    placeholder="Enter annual turnover"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={localdata.annualTurnover}
                                    onInput={allowOnlyNumbers}
                                    onChange={(e) => setLocalData({ ...localdata, annualTurnover: e.target.value })}
                                    ref={annualTurnoverRef}
                                />
                            </InputGroup>
                        </Col>
                        <Col lg={5}>
                            <label>
                                Year of Inception
                            </label>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id="basic-addon1"><img className="input-icon" src={year} /></InputGroup.Text>
                                <Form.Control
                                    placeholder="Enter year of inception"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={localdata.yearOfInception}
                                    onInput={allowOnlyNumbers} maxLength={4}
                                    onChange={(e) => setLocalData({ ...localdata, yearOfInception: e.target.value })}
                                    ref={yearOfInceptionRef}
                                />
                            </InputGroup>
                        </Col>
                        <Col lg={5}>
                            <label>
                                No. of Employees
                            </label>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id="basic-addon1"><img className="input-icon" src={employee} /></InputGroup.Text>
                                <Form.Select aria-label="Default select example" value={localdata.noOfEmployees} onChange={(e) => setLocalData({ ...localdata, noOfEmployees: e.target.value })} ref={noOfEmployeesRef}>
                                    <option hidden>Select No. of employees</option>
                                    <option value="1">1-10</option>
                                    <option value="2">10-30</option>
                                    <option value="3">30-50</option>
                                    <option value="3">50 and above</option>

                                </Form.Select>
                            </InputGroup>
                        </Col>
                        <Col lg={5}>
                            <label>
                                Upload GST Document
                            </label>
                            <Form.Group className="mb-4 file-type">
                                <div className="file-input">
                                    <input
                                        type="file"
                                        placeholder='Upload GST Document'
                                        onChange={handleGstDocumentchange}
                                        ref={gstDocumentRef}
                                        style={{ display: 'none' }}
                                    />
                                    <button className="button" onClick={handleGstDocument}>Upload</button>
                                    <span className="label" data-js-label="">
                                        {localdata.gstDocument}
                                    </span>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col lg={5}>
                            <label>
                                Upload MSME Document
                            </label>
                            <Form.Group className="mb-4 file-type">
                                <div className="file-input">
                                    <input
                                        type="file"
                                        onChange={handleMsmeDocumentchange}
                                        ref={msmeDocumentRef}
                                        style={{ display: 'none' }}
                                    />
                                    <button className="button" onClick={handleMsmeDocument}>Upload</button>
                                    <span className="label" data-js-label="">
                                        {localdata.msmeDocument}
                                    </span>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col lg={5}>
                            <label>
                                Upload Shop & Establishment Document
                            </label>
                            <Form.Group className="mb-4 file-type">
                                <div className="file-input">
                                    <input
                                        type="file"
                                        onChange={handleShopDocumentchange}
                                        ref={shopDocumentRef}
                                        style={{ display: 'none' }}
                                    />
                                    <button className="button" onClick={handleShopDocument}>Upload</button>
                                    <span className="label" data-js-label="">
                                        {localdata.shopDocument}
                                    </span>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col lg={5}>
                            <label>
                                Upload Company Logo
                            </label>
                            <Form.Group className="mb-4 file-type">
                                <div className="file-input">
                                    <input
                                        type="file"
                                        onChange={handleCompanyLogochange}
                                        ref={companyLogoRef}
                                        style={{ display: 'none' }}
                                    />
                                    <button className="button" onClick={handleCompanyLogo}>Upload</button>
                                    <span className="label" data-js-label="">
                                        {localdata.companyLogo}
                                    </span>
                                </div>
                            </Form.Group>
                        </Col>
                        <Row >
                            <Col lg={5} className='check-box'>
                                Already a user?<Link style={{ color: '#430303' }} to="/Login"> Login</Link>
                            </Col>
                            <Col lg={5} className='forgetpassword'>
                                <button className="submit-button" onClick={handleNext}>Next</button>
                            </Col>
                        </Row>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Register
