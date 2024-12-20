import React from 'react'
import { Form, Row } from 'react-bootstrap'

const SearchBox = () => {
    return (
        <div className="overlay12 absolute top-1/2 left-0 right-0 -translate-y-1/2">
            <div className="overlaycontentnt w-full">
                <Row className="flex justify-center">
                    <div className='col-lg-8'>
                        <div className='sass123 flex'>
                            <Form.Control
                                className='mskmd flex-grow mr-2'
                                placeholder="Search here ....."
                                aria-label="Email Address"
                            />
                            <button className='searh-buttonas'>Search</button>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default SearchBox
