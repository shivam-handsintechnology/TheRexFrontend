import { useState } from 'react';
import { Col, Container, InputGroup, Row } from "react-bootstrap"
import "./Login.css"
import logo from "@/assets/logo.svg"
import imgage2 from "@/assets/login/password.svg"
import loginimg from "@/assets/login/loginimg.svg"
import imgage3 from "@/assets/login/back.png"
import { Link, useNavigate } from 'react-router-dom';
import API_URL from '@/services/config'

const Forgotpassword = () => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            if (!email) {
                swal({ text: 'Please enter email', icon: 'warning' });
                return;
            }
            setLoading(true);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            };
            await fetch(`${API_URL}/api/forgotpassword`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        console.log(data);
                        swal({ text: data.message, icon: 'success' });
                        Navigate('/login');
                        setLoading(false);
                    } else {
                        swal({ text: data.message, icon: 'error' });
                        setLoading(false);

                    }
                }
                );
        } catch (error) {
            console.error('There was an error!', error);
        }
    }


    return (
        <div className="background-login">
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <div className="img-text-with">
                            <h3>Forget Password! <br />
                                Please enter your Email Address</h3>
                            <img src={imgage3} alt="Background" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="login-page">
                            <img className="register-logo" src={logo} alt="Logo" />
                            <form onSubmit={handleForgotPassword}>
                                <div
                                    className="col-lg-12"
                                    style={{ display: "block", margin: "auto" }}
                                >
                                    <label htmlFor="firstName" id="labell">
                                        Enter Registered Email Id To Reset Your Password
                                    </label>
                                    <div className="mb-3 input-group">
                                        <InputGroup.Text id="basic-addon1"><img className="input-icon" src={imgage2} alt="Email icon" /></InputGroup.Text>
                                        <input
                                            required=""
                                            name="email"
                                            placeholder="Email Id"
                                            aria-label="Email ID"
                                            type="email"
                                            className="form-control"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {loading ?
                                    <div
                                        className="col-lg-12"
                                        style={{ display: "block", margin: "auto" }}
                                        disabled
                                    >
                                        <button type='submit' className="login_btnup forget-password">
                                            Please wait...
                                        </button>
                                    </div>
                                    :
                                    <div
                                        className="col-lg-12"
                                        style={{ display: "block", margin: "auto" }}

                                    >
                                        <button type='submit' className="login_btnup forget-password">
                                            <img src={loginimg} />  Submit
                                        </button>
                                    </div>
                                }
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Forgotpassword