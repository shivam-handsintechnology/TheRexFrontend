import React, { useEffect, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import Select from 'react-select'

import InitialData from '@/utils/initialData' // Adjust the import path as needed
import JobSeekerFileUpload from './JobSeekerFileUpload';
import SocialNetworks from './SocialNetworks';
import { useNavigate, useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
const JobSeekerForm = ({
    register,
    control,
    handleSubmit,
    setValue,
    errors,
    watch,
    CountryList,
    StatList,
    CityList,
    industryData,
    onSubmit,
}) => {
    const { role = "student" } = useParams()
    const navigate = useNavigate()
    return (
        <div className="background-register">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="register-page mb-5">
                        <img className="register-logo" src="/src/assets/logo.svg" alt="Logo" />
                        <div className="row">
                            {/* Personal Information */}
                            <div className="col-lg-5">
                                <div className='row'>
                                    <label>
                                        Select Type
                                    </label>
                                    <div className="mb-3 d-flex">
                                        <Form.Check
                                            className='mr-3'
                                            type="radio"
                                            id="recruiter"
                                            label="Employer"
                                            value="recruiter"
                                            checked={role === 'recruiter'}
                                            onChange={() => navigate("/Jobregister/recruiter")}

                                        />
                                        <Form.Check
                                            className='mr-3'
                                            type="radio"
                                            id="student"
                                            label="Candidate"
                                            value="student"
                                            checked={role === 'student'}
                                            onChange={() => navigate("/Jobregister/student")}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <label>Designation</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/gst.svg" alt="name icon" />
                                    </span>
                                    <input
                                        {...register('designation')}
                                        placeholder="Enter designation"
                                        className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                {errors.designation && (
                                    <span className="text-danger">
                                        {errors.designation.message}
                                    </span>
                                )}
                            </div>
                            <div className="col-lg-5">
                                <label>Full Name</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/gst.svg" alt="name icon" />
                                    </span>
                                    <input
                                        {...register('name')}
                                        placeholder="Enter full name"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                {errors.name && (
                                    <span className="text-danger">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-lg-5">
                                <label>Date Of Birth</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/gst.svg" alt="dob icon" />
                                    </span>
                                    <input
                                        type="date"
                                        {...register('dob')}
                                        className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                {errors.dob && (
                                    <span className="text-danger">
                                        {errors.dob.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-lg-5">
                                <label>Gender</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/gst.svg" alt="gender icon" />
                                    </span>
                                    <select
                                        {...register('gender')}
                                        className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                {errors.gender && (
                                    <span className="text-danger">
                                        {errors.gender.message}
                                    </span>
                                )}
                            </div>
                            <div className="col-lg-5">
                                <label>Marital Status</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/gst.svg" alt="gender icon" />
                                    </span>
                                    <select
                                        {...register('maritalstatus')}
                                        className={`form-select ${errors.maritalstatus ? 'is-invalid' : ''}`}
                                    >
                                        <option value="">Select Marital Status</option>
                                        <option value="Married">Married</option>
                                        <option value="Single">Single</option>
                                    </select>
                                </div>
                                {errors.maritalstatus && (
                                    <span className="text-danger">
                                        {errors.maritalstatus.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-lg-5">
                                <label>Age</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/gst.svg" alt="age icon" />
                                    </span>
                                    <input
                                        type="number"
                                        {...register('age')}
                                        placeholder="Enter age"
                                        className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                {errors.age && (
                                    <span className="text-danger">
                                        {errors.age.message}
                                    </span>
                                )}
                            </div>
                            <JobSeekerFileUpload watch={watch} register={register} setValue={setValue} errors={errors} />

                            <div className="col-lg-5">
                                <label>Email</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/gst.svg" alt="email icon" />
                                    </span>
                                    <input
                                        type="email"
                                        {...register('email')}
                                        placeholder="Enter email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                {errors.email && (
                                    <span className="text-danger">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-lg-5">
                                <label>Phone Number</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/gst.svg" alt="phone icon" />
                                    </span>
                                    <input
                                        {...register('phone')}
                                        placeholder="Enter phone number"
                                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                {errors.phone && (
                                    <span className="text-danger">
                                        {errors.phone.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-lg-5">
                                <label>Education</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/gst.svg" alt="education icon" />
                                    </span>

                                    <select
                                        {...register('education')}
                                        className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                                    >
                                        <option value="" hidden>Select Education</option>
                                        {InitialData.degrees.map((item) => (
                                            <option value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>
                                {errors.education && (
                                    <span className="text-danger">
                                        {errors.education.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-lg-5">
                                <label>Experience (Years)</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/gst.svg" alt="experience icon" />
                                    </span>
                                    <input
                                        type="number"
                                        {...register('experience')}
                                        placeholder="Enter years of experience"
                                        className={`form-control ${errors.experience ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                {errors.experience && (
                                    <span className="text-danger">
                                        {errors.experience.message}
                                    </span>
                                )}
                            </div>
                            <div className="col-lg-5">
                                <label>Industry</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/api/placeholder/24/24" alt="Industry icon" />
                                    </span>
                                    <Controller
                                        control={control}
                                        name="industry"
                                        defaultValue={[]}
                                        render={({ field: { onChange, value, ref } }) => {
                                            try {
                                                return <Select
                                                    inputRef={ref}
                                                    value={industryData.filter(c => value?.includes(c.value))}
                                                    onChange={selectedOptions => {
                                                        const selectedValues = selectedOptions?.map(option => option.value) || [];
                                                        setValue("industry", selectedValues);
                                                    }}
                                                    options={industryData}
                                                    isMulti
                                                    className="select-container"
                                                    classNamePrefix="select"
                                                    isDisabled={!Array.isArray(industryData) || industryData.length === 0}
                                                    placeholder={
                                                        !Array.isArray(industryData) || industryData.length === 0
                                                            ? "Loading industries..."
                                                            : "Select industries"
                                                    }
                                                />
                                            } catch (error) {
                                                console.log("errorrrrrr", error)
                                            }
                                        }}
                                    />
                                </div>
                                {errors.industry && (
                                    <span className="text-danger">
                                        {errors.industry.message}
                                    </span>
                                )}
                            </div>



                            <div className="col-lg-5">
                                <label>Current Salary (LPA)</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/gst.svg" alt="salary icon" />
                                    </span>
                                    <input
                                        type="number"
                                        {...register('currentSalary')}
                                        placeholder="Enter current salary"
                                        className={`form-control ${errors.currentSalary ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                {errors.currentSalary && (
                                    <span className="text-danger">
                                        {errors.currentSalary.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-lg-5">
                                <label>Expected Salary (LPA)</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/gst.svg" alt="expected salary icon" />
                                    </span>
                                    <input
                                        type="number"
                                        {...register('salaryExpectations')}
                                        placeholder="Enter expected salary"
                                        className={`form-control ${errors.salaryExpectations ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                {errors.salaryExpectations && (
                                    <span className="text-danger">
                                        {errors.salaryExpectations.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-lg-10" style={{ width: '89%' }}>
                                <label>About Candidate</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img className="input-icon" src="/src/assets/register/companyname.svg" alt="about icon" />
                                    </span>
                                    <textarea
                                        {...register('aboutus')}
                                        placeholder="Tell us about yourself"
                                        className={`form-control ${errors.aboutus ? 'is-invalid' : ''}`}
                                        rows="4"
                                    />
                                </div>
                                {errors.aboutus && (
                                    <span className="text-danger">
                                        {errors.aboutus.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Social Networks Section */}
                    {/* <TestAray register={register} control={control} setValue={setValue} errors={errors} watch={watch} /> */}
                    <SocialNetworks register={register} control={control} setValue={setValue} errors={errors}
                    />

                    {/* Address Section */}
                    <div className="register-page mb-5">
                        <h3>Address</h3>
                        <div className="row">
                            <div className="col-lg-5">
                                <label>Country</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img
                                            className="input-icon"
                                            src="/src/assets/register/category.svg"
                                            alt="Country icon"
                                        />
                                    </span>
                                    <select
                                        {...register('country_id')}
                                        value={watch("country_id")}
                                        disabled={CountryList?.data?.length == 0}
                                        onChange={(e) => {
                                            setValue("country_id", e.target.value)
                                            setValue("state_id", "")
                                            setValue("city_id", "")
                                        }}
                                        className={`form-select ${errors.country_id ? 'is-invalid' : ''}`}
                                    >
                                        <option value="" hidden>Select Country</option>
                                        {
                                            CountryList?.data?.map((item) => (
                                                <option value={item?._id}>{item?.country_name}</option>
                                            ))
                                        }
                                        {/* Add country options here */}
                                    </select>
                                </div>
                                {errors.country_id && (
                                    <span className="text-danger">
                                        {errors.country_id.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-lg-5">
                                <label>State</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img
                                            className="input-icon"
                                            src="/src/assets/register/companyname.svg"
                                            alt="State icon"
                                        />
                                    </span>
                                    <select
                                        {...register('state_id')}
                                        value={watch("state_id")}
                                        disabled={StatList?.data?.length == 0}
                                        onChange={(e) => {
                                            setValue("state_id", e.target.value)
                                            setValue("city_id", "")
                                        }}
                                        className={`form-select ${errors.state_id ? 'is-invalid' : ''}`}
                                    >
                                        <option value="" hidden>Select State</option>
                                        {
                                            StatList?.data?.map((item) => (
                                                <option value={item?._id}>{item?.state_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                {errors.state_id && (
                                    <span className="text-danger">
                                        {errors.state_id.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-lg-5">
                                <label>City</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img
                                            className="input-icon"
                                            src="/src/assets/register/companyname.svg"
                                            alt="City icon"
                                        />
                                    </span>
                                    <select
                                        {...register('city_id')}
                                        value={watch("city_id")}
                                        disabled={CityList?.data?.length == 0}
                                        onChange={(e) => {
                                            setValue("city_id", e.target.value)
                                        }}
                                        className={`form-select ${errors.city_id ? 'is-invalid' : ''}`}
                                    >
                                        <option value="" hidden>Select City</option>
                                        {
                                            CityList?.data?.map((item) => (
                                                <option value={item?._id}>{item?.city_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                {errors.city_id && (
                                    <span className="text-danger">
                                        {errors.city_id.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-lg-5">
                                <label>Pin Code</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img
                                            className="input-icon"
                                            src="/src/assets/register/companyname.svg"
                                            alt="Pincode icon"
                                        />
                                    </span>
                                    <input
                                        {...register('pincode')}
                                        placeholder="Enter pin code"
                                        className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                {errors.pincode && (
                                    <span className="text-danger">
                                        {errors.pincode.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-lg-10" style={{ width: '89%' }}>
                                <label>Complete Address</label>
                                <div className="mb-4 input-group">
                                    <span className="input-group-text">
                                        <img
                                            className="input-icon"
                                            src="/src/assets/register/companyname.svg"
                                            alt="Address icon"
                                        />
                                    </span>
                                    <textarea
                                        {...register('address1')}
                                        placeholder="Enter complete address"
                                        className={`form-control ${errors.address1 ? 'is-invalid' : ''}`}
                                        rows="3"
                                    />
                                </div>
                                {errors.address1 && (
                                    <span className="text-danger">
                                        {errors.address1.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="submit-button12">Submit Form</button>
                </form>
            </div>
        </div>
    )
}

export default JobSeekerForm
