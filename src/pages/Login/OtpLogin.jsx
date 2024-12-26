import { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import "./Login.css"
import logo from "@/assets/logo.svg"
import imgage2 from "@/assets/login/password.svg"
import loginimg from "@/assets/login/loginimg.svg"
import imgage3 from "@/assets/login/back.png"
import { Link, useNavigate } from 'react-router-dom';
import API_URL from '@/services/config'

const OtpLogin = () => {
    const Navigate = useNavigate();
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleVerifyOtp = async () => {

        if (!otp) {
            alert('Please enter the OTP');
            return;
        }

        setLoading(true);
        // OTP verification logic here

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ otp: otp, email: sessionStorage.getItem('email'), password: sessionStorage.getItem('password') })
        };
        await fetch(`${API_URL}/api/verifyOtp`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    console.log(data);
                    swal({ text: data.message, icon: 'success' });
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.data));
                    sessionStorage.removeItem('email');
                    sessionStorage.removeItem('password');
                    setLoading(false);
                    Navigate('/login');
                } else {
                    swal({ text: data.message, icon: 'error' });
                }
            });
    };

    const handleResendOtp = async () => {
        // Resend OTP logic here
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: localStorage.getItem('email') })
        };

        await fetch(`${API_URL}/api/resendOtp`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    console.log(data);
                    swal({ text: data.message, icon: 'success' });
                } else {
                    swal({ text: data.message, icon: 'error' });
                }
            });
    };


    return (
        <div className="background-login">
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <div className="img-text-with">
                            <h3>OTP Login <br />
                                Please enter the Otp</h3>
                            <img src={imgage3} alt="Background" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="login-page">
                            <img className="register-logo" src={logo} alt="Logo" />
                            <div className='text-center paras'><p>Enter OTP Sent to Your Email Address</p></div>
                            <Form.Group className="mb-4">
                                <Form.Label>Enter OTP</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1"><img className="input-icon" src={imgage2} alt="Email icon" /></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        maxLength="6"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Button className="verify-otp-button" onClick={handleVerifyOtp} disabled={loading}>
                                {loading ? 'Verifying OTP...' : 'Verify OTP'}
                            </Button>
                            <div className="resend-otp">
                                <p>Didn't receive OTP?</p>
                                <Button variant="link" onClick={handleResendOtp}>Resend OTP</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OtpLogin