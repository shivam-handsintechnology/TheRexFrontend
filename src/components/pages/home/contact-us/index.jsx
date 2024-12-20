import React, { useEffect, useState } from 'react'
import "./Contact.css"
import subtitleimg from "@/assets/homepage/subtitle-img2-1.svg"
import contact_thumb1 from "@/assets/homepage/contact_thumb1.png"
import envelope from "@/assets/homepage/envelope-icon.svg"
import { Form } from "react-bootstrap"
import API_URL from '@/services/config'
const Contact = () => {


    const [email, setEmail] = useState('');
    const [topiclist, setTopiclist] = useState([]);

    const [name, setName] = useState('');
    const [emailid, setEmailid] = useState('');
    const [phone, setPhone] = useState('');
    const [topic, setTopic] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');



    useEffect(() => {
        getTopicList();
    }, []);

    const getTopicList = async () => {
        try {
            await fetch(`${API_URL}/api/getEnquirytopic`)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        console.log(data);
                        setTopiclist(data.data);
                    } else {
                        console.log(data.message);
                    }
                });
        }
        catch (error) {
            console.error('There was an error!', error);
        }

    }





    const handleSubscribe = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        };

        await fetch(`${API_URL}/api/newsletter`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    console.log(data);
                    swal({ text: data.message, icon: 'success' });
                    setEmail('');
                } else {
                    swal({ text: data.message, icon: 'error' });
                }
            });
    }

    const handlesubmit = async (e) => {
        try {
            e.preventDefault();
            if (!name) {
                swal({ text: 'Please enter name', icon: 'warning' });
                return;
            }
            else if (!emailid) {
                swal({ text: 'Please enter email', icon: 'warning' });
                return;
            }
            else if (emailid && (!emailid.includes('@') || !emailid.includes('.'))) {
                swal({ text: 'Please enter valid email', icon: 'warning' });
                return;
            }
            else if (!phone) {
                swal({ text: 'Please enter phone', icon: 'warning' });
                return;
            }
            else if (!topic) {
                swal({ text: 'Please select topic', icon: 'warning' });
                return;
            }
            else if (!subject) {
                swal({ text: 'Please enter subject', icon: 'warning' });
                return;
            }
            else if (!message) {
                swal({ text: 'Please enter message', icon: 'warning' });
                return;
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, emailid, phone, topic, subject, message })
            };

            await fetch(`${API_URL}/api/addEnquiryFormdata`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        console.log(data);
                        swal({ text: data.message, icon: 'success' });
                        setName('');
                        setEmailid('');
                        setPhone('');
                        setTopic('');
                        setSubject('');
                        setMessage('');
                    } else {
                        swal({ text: data.message, icon: 'error' });
                    }
                });
        } catch (error) {
            console.error('There was an error!', error);
        }
    }





    return (
        <div>
            <div
                className="contact-area-1 space bg-smoke shape-mockup-wrap"
                id="contact-sec"
            >
                <div className="shape-mockup contact-thumb1">
                    <img src={contact_thumb1} alt="img" />
                </div>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-xl-6">
                            <div className="title-area">
                                <span className="sub-title2">
                                    <img src={subtitleimg} alt="img" />
                                    Contact Us
                                </span>
                                <h6 className="sec-title12">
                                    Fill out the form to learn more about how we can help with your real estate project.
                                </h6>
                            </div>
                            <div className="contact-wrap1">
                                <div className="contact-form-wrap">
                                    <form
                                        action="https://html.themeholy.com/konta/demo/mail.php"
                                        method="POST"
                                        className="contact-form homepage-form"
                                    >
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        id="name"
                                                        placeholder="Your Name*"
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        placeholder="Email Address*"
                                                        onChange={(e) => setEmailid(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="form-group">
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        name="number"
                                                        id="number"
                                                        placeholder="Phone Number*"
                                                        onChange={(e) => setPhone(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div className="form-group">
                                                    <Form.Select aria-label="Default select example" onChange={(e) => setTopic(e.target.value)}>
                                                        <option hidden>Select Topic</option>
                                                        {topiclist?.map((val) => (
                                                            <option key={val._id} value={val._id}>{val.topic}</option>
                                                        ))}
                                                    </Form.Select>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <div className="form-group">
                                                    <input
                                                        type="subject"
                                                        className="form-control"
                                                        name="subject"
                                                        id="subject"
                                                        placeholder="Subject*"
                                                        onChange={(e) => setSubject(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <div className="form-group">
                                                    <input
                                                        type="message"
                                                        className="form-control"
                                                        name="message"
                                                        id="message"
                                                        placeholder="Message*"
                                                        onChange={(e) => setMessage(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-btn col-12">
                                                <button className="th-btn w-100" onClick={handlesubmit}>
                                                    Send Message
                                                    <i className="fas fa-long-arrow-right ms-2" />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="form-messages mb-0 mt-3" />
                                    </form>
                                </div>
                                <div className="newsletter-card bg-title">
                                    <div className="title-wrap">
                                        <div className="icon">
                                            <img src={envelope} alt="img" />
                                        </div>
                                        <div className="details">
                                            <span className="sub-title">Newsletter</span>
                                            <h3 className="title text-white">SUBSCRIBE NOW !</h3>
                                        </div>
                                    </div>
                                    <p className="content">
                                        Please Crate Your E-mail And Subscribe Now*
                                    </p>
                                    <form className="newsletter-form form-group">
                                        <input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email"
                                            required=""
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <button type="submit" className="th-btn style3" onClick={handleSubscribe}>
                                            <i className="fas fa-paper-plane ms-1" />
                                        </button>
                                    </form>
                                    <div className="contact-feature mt-4">
                                        <div className="contact-feature-icon">
                                            <i className="fas fa-envelope" />
                                        </div>
                                        <div className="media-body">
                                            <p className="contact-feature_label">Email Address :</p>
                                            <a href="to:hatchlings@therex.in" className="contact-feature_link">
                                            hatchlings@therex.in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
