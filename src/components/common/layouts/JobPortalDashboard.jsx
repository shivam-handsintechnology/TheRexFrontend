// components/layouts/JobPortalDashboard.jsx
import { Loading } from '@/hooks/SkeltonsData';
import { useGetUserMenuQuery } from '@/redux/apiSlice';
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JobPortalDashboard = ({ children }) => {
    const { data: MenuData, isFetching } = useGetUserMenuQuery()

    return (
        <Container fluid>
            <Row>
                {/* Sidebar */}
                <Col md={3} lg={2} className="min-vh-100 p-3">
                    <Nav className="flex-column">
                        {isFetching ? <Loading /> : MenuData?.data?.map((item) => {
                            return <React.Fragment>
                                <Nav.Link as={Link} to={item?.path} >{item?.name}</Nav.Link>
                            </React.Fragment>
                        })}
                    </Nav>
                </Col>

                {/* Main Content */}
                <Col md={9} lg={10} className="p-4">
                    {children}
                </Col>
            </Row>
        </Container>
    );
};
export default JobPortalDashboard;
