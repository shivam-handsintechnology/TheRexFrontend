import React, { useState, useEffect, useRef } from 'react';

const JobSeekerFileUpload = ({ register, setValue, errors }) => {
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
        <div className="row">
            {/* Resume Upload */}
            <div className="col-lg-5">
                <label>Resume</label>
                <div className="mb-4 input-group">
                    <span className="input-group-text">
                        <img className="input-icon" src="/api/placeholder/24/24" alt="resume icon" />
                    </span>
                    <input
                        ref={resumeInputRef}
                        type="file"
                        accept="application/pdf"
                        className={`form-control ${errors.resume ? 'is-invalid' : ''}`}
                        onChange={handleResumeChange}
                    />
                </div>
                {errors.resume && (
                    <div className="text-danger">
                        {typeof errors.resume === 'string'
                            ? errors.resume
                            : errors.resume.message || 'Invalid resume file'}
                    </div>
                )}
                {resumePreview && (
                    <div className="mt-3">
                        <label>Resume Preview:</label>
                        <embed
                            src={resumePreview}
                            type="application/pdf"
                            className="w-full"
                            style={{ height: '300px' }}
                        />
                    </div>
                )}
            </div>

            {/* Profile Photo Upload */}
            <div className="col-lg-5">
                <label>Profile Photo</label>
                <div className="mb-4 input-group">
                    <span className="input-group-text">
                        <img className="input-icon" src="/api/placeholder/24/24" alt="profile photo icon" />
                    </span>
                    <input
                        ref={profilePhotoInputRef}
                        type="file"
                        accept="image/*"
                        className={`form-control ${errors.profilephoto ? 'is-invalid' : ''}`}
                        onChange={handleProfilePhotoChange}
                    />
                </div>
                {errors.profilephoto && (
                    <div className="text-danger">
                        {typeof errors.profilephoto === 'string'
                            ? errors.profilephoto
                            : errors.profilephoto.message || 'Invalid profile photo'}
                    </div>
                )}
                {profilePhotoPreview && (
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
                )}
            </div>
        </div>
    );
};

export default JobSeekerFileUpload;