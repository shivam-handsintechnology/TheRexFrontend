import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
const JobSeekerFileUpload = ({ watch, register, setValue, errors }) => {
    const [resumePreview, setResumePreview] = useState(null);
    const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);
    // Refs for input fields
    const resumeInputRef = useRef(null);
    const profilePhotoInputRef = useRef(null);
    const handleResumeChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            // Create a File object with additional properties needed by Joi validation

            setValue("resume", file);
            setResumePreview(URL.createObjectURL(file));
        }
    };

    const handleProfilePhotoChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            // Create a File object with additional properties needed by Joi validation
            setValue("profilephoto", file);
            setProfilePhotoPreview(URL.createObjectURL(file));
        }
    };
    const handlUpload = (refName) => {
        refName.current.click();
    };


    const handleValidation = () => {
        if (errors.resume && resumeInputRef.current) {
            resumeInputRef.current.focus();
        }
        if (errors.profilephoto && profilePhotoInputRef.current) {
            profilePhotoInputRef.current.focus();
        }
    };

    useEffect(() => {
        handleValidation();
    }, [errors]);
    // Cleanup function for preview URLs
    useEffect(() => {
        return () => {
            if (resumePreview) URL.revokeObjectURL(resumePreview);
            if (profilePhotoPreview) URL.revokeObjectURL(profilePhotoPreview);
        };
    }, [resumePreview, profilePhotoPreview]);
    return (
        <>
            {/* Resume Upload */}
            <div className="col-lg-5">
                <label>Resume</label>

                <Form.Group className="mb-4 file-type">
                    <div className="file-input">
                        <input
                            ref={resumeInputRef}
                            type="file"
                            accept="application/pdf"
                            className={`form-control ${errors.resume ? 'is-invalid' : ''}`}
                            onChange={handleResumeChange}
                        />
                        <button className="button" onClick={() => handlUpload(resumeInputRef)}>Upload</button>
                        <span className="label" data-js-label="">
                            {watch("resume")?.name ? watch("resume")?.name : "No Files Selected"}

                        </span>
                    </div>
                </Form.Group>
                {errors.resume && (
                    <span className="text-danger">
                        {typeof errors.resume === 'string'
                            ? errors.resume
                            : errors.resume.message || 'Invalid resume file'}
                    </span>
                )}
                {/* {resumePreview && (
                    <div className="mt-3">
                        <label>Resume Preview:</label>
                        <embed
                            src={resumePreview}
                            type="application/pdf"
                            className="w-full"
                            style={{ height: '300px' }}
                        />
                    </div>
                )} */}
            </div>

            {/* Profile Photo Upload */}
            <div className="col-lg-5">
                <label>Profile Photo</label>
                <Form.Group className="mb-4 file-type">
                    <div className="file-input">
                        <input
                            ref={profilePhotoInputRef}
                            type="file"
                            accept="image/*"
                            className={`form-control ${errors.profilephoto ? 'is-invalid' : ''}`}
                            onChange={handleProfilePhotoChange}
                        />
                        <button className="button" onClick={() => handlUpload(profilePhotoInputRef)}>Upload</button>
                        <span className="label" data-js-label="">
                            {watch("profilephoto")?.name ? watch("profilephoto")?.name : "No Files Selected"}
                            {/* {profilePhotoPreview && (
                                <div className="mt-3">
                                    <label>Profile Photo Preview:</label>
                                    <img
                                        src={profilePhotoPreview}
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
                {errors.profilephoto && (
                    <span className="text-danger">
                        {typeof errors.profilephoto === 'string'
                            ? errors.profilephoto
                            : errors.profilephoto.message || 'Invalid profile photo'}
                    </span>
                )}

            </div>
        </>
    );
};

export default JobSeekerFileUpload;