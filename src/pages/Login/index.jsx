import { useState } from 'react';
import { Col, Container, InputGroup, Row, Form } from "react-bootstrap"
import "./Login.css"
import logo from "@/assets/logo.svg"
import imgage1 from "@/assets/login/password.svg"
import imgage2 from "@/assets/login/email.svg"
import loginimg from "@/assets/login/loginimg.svg"
import imgage3 from "@/assets/login/back.png"
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import API_URL from '@/services/config';

const Login = () => {
  const Navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('i was clicked');
    try {
      if (!email) {
        swal({ text: 'Please enter email', icon: 'warning' });
        return;
      }
      else if (!password) {
        swal({ text: 'Please enter password', icon: 'warning' });
        return;
      }
      setLoading(true);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      };
      await fetch(`${API_URL}/api/loginUser`, requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data.status === 200) {
            console.log(data);
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user', JSON.stringify(data.data.user));
            swal({ text: data.message, icon: 'success' });
            localStorage.setItem('email', data.data.user.email);
            Navigate(`/`);
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
              <h3>Welcome Back ! <br />
                Please enter your details</h3>
              <img src={imgage3} alt="Background" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="login-page">
              <img className="register-logo" src={logo} alt="Logo" />
              <Col lg={12}>
                <label>
                  Email Address
                </label>
                <InputGroup className="mb-4">
                  <InputGroup.Text id="basic-addon1"><img className="input-icon" src={imgage2} alt="Email icon" /></InputGroup.Text>
                  <Form.Control
                    placeholder="Enter Email Address"
                    aria-label="Email Address"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col lg={12}>
                <label>
                  Password
                </label>
                <InputGroup className="mb-4">
                  <InputGroup.Text id="basic-addon2"><img className="input-icon" src={imgage1} alt="Password icon" /></InputGroup.Text>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    aria-label="Password"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroup.Text
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </InputGroup.Text>
                </InputGroup>
              </Col>
              <Row className='remember-me'>
                <Col lg={6} className='check-box'>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                </Col>
                <Col lg={6} className='forgetpassword'>
                  <Link to="/Forgotpassword">Forgot Password?</Link>
                </Col>
              </Row>
              <button className="submit-button" onClick={handleLogin}><img src={loginimg} /> Login</button>
              <p className='dontacc'>Don’t have an account? <Link className='regiiss' to="/register">Register</Link></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login