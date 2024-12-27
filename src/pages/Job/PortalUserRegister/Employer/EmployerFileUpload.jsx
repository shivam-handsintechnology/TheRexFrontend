import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
const EmployerFileUpload = ({ watch, register, setValue, errors }) => {
    const [LogoPreview, setLogoPreview] = useState(null);

    // Refs for input fields
    const LogoInputRef = useRef(null);

    const handleProfilePhotoChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            // Create a File object with additional properties needed by Joi validation
            setValue("logo", file);
            setLogoPreview(URL.createObjectURL(file));
        }
    };
    const handlUpload = (refName) => {
        refName.current.click();
    };


    const handleValidation = () => {
        if (errors.logo && LogoInputRef.current) {
            LogoInputRef.current.focus();
        }
    };

    useEffect(() => {
        handleValidation();
    }, [errors]);
    // Cleanup function for preview URLs
    useEffect(() => {
        return () => {
            if (LogoPreview) URL.revokeObjectURL(LogoPreview);
        };
    }, [LogoPreview]);
    return (
        <>
            {/* Profile Photo Upload */}
            <div className="col-lg-5">
                <label>Logo </label>
                <Form.Group className="mb-4 file-type">
                    <div className="file-input">
                        <input
                            ref={LogoInputRef}
                            type="file"
                            accept="image/*"
                            className={`form-control ${errors.logo ? 'is-invalid' : ''}`}
                            onChange={handleProfilePhotoChange}
                        />
                        <button className="button" onClick={() => handlUpload(LogoInputRef)}>Upload</button>
                        <span className="label" data-js-label="">
                            {watch("logo")?.name ? watch("logo")?.name : "No Files Selected"}
                            {/* {LogoPreview && (
                                <div className="mt-3">
                                    <label>Profile Photo Preview:</label>
                                    <img
                                        src={LogoPreview}
                                        alt="Profile Preview"
                                        className="w-full"
                                        style={{
                                            height: '300px',
                                            objectFit: 'contain',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </div>
                            )} */}
                        </span>
                    </div>
                </Form.Group>
                {errors.logo && (
                    <span className="text-danger">
                        {typeof errors.logo === 'string'
                            ? errors.logo
                            : errors.logo.message || 'Invalid profile photo'}
                    </span>
                )}

            </div>
        </>
    );
};

export default EmployerFileUpload;