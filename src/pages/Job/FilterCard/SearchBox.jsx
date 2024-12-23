import { setFiltersData } from '@/redux/FilterSlice';
import React, { useEffect, useState } from 'react'
import { Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
    const { searchedQuery } = useSelector((state) => state.filters);
    const dispatch = useDispatch()
    const [value, setValue] = useState(searchedQuery)
    useEffect(() => { setValue(searchedQuery) }, [searchedQuery])
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setFiltersData({ type: "searchedQuery", value: value }))
    }
    return (
        <div className="overlay12 absolute top-1/2 left-0 right-0 -translate-y-1/2">
            <div className="overlaycontentnt w-full">
                <Row className="flex justify-center">
                    <div className='col-lg-8'>
                        <div className='sass123 flex'>
                            <Form onSubmit={handleSubmit}>
                                <Form.Control
                                    className='mskmd flex-grow mr-2'
                                    placeholder="Search here ....."
                                    aria-label="Search here ..."
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                />
                            </Form>
                            <button onClick={handleSubmit} className='searh-buttonas'>Search</button>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default SearchBox
