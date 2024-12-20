import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import JobSeeker from './JobSeeker';


const Index = () => {

    return (
        <div>
            <div className="background-register">
                <div className="container">
                    <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example">
                        <Tab eventKey={1} title="Job Seeker">
                            <JobSeeker />
                        </Tab>
                        <Tab eventKey={2} title="Recruiter">
                            <JobSeeker />
                        </Tab>
                    </Tabs>
                </div>
            </div>

        </div>

    )
}

export default Index
