import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Select from 'react-select'
import { candidateValidationSchema } from '@/utils/validators';
import InitialData from '@/utils/initialData' // Adjust the import path as needed
import { useGetCitiesByStateQuery, useGetCountryListQuery, useGetStatesByCountryQuery, useRegisterJobseekerMutation } from '@/redux/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from '@/redux/candidateFormSlice';
import { useGetFiltersData } from '@/hooks';
import JobSeekerFileUpload from './JobSeekerFileUpload';
import SocialNetworks from './SocialNetworks';
const JobSeeker = () => {
    useGetFiltersData(["industryData"])
    const dispatch = useDispatch();
    const candidateForm = useSelector((state) => state.candidateForm.Form);
    const { industryData } = useSelector((state) => state.filters) || []

    const [RegisterReqcruiter] = useRegisterJobseekerMutation();
    const {
        register, control,
        handleSubmit, setValue,
        formState: { errors },
        watch,
    } = useForm({
        resolver: joiResolver(candidateValidationSchema),
        defaultValues: { ...candidateForm, }, // Use Redux state as default values
    });



    const { data: CountryList } = useGetCountryListQuery();
    const { data: StatList } = useGetStatesByCountryQuery({ country_id: watch('country_id') || candidateForm?.country_id });
    const { data: CityList } = useGetCitiesByStateQuery({ state_id: watch('state_id') || candidateForm?.state_id });
    useEffect(() => {
        const subscription = watch((value) => {
            dispatch(updateForm(value)); // Sync form changes with Redux state
        });
        return () => subscription.unsubscribe();
    }, [watch, setValue]);

    const onSubmit = async (data) => {
        try {
            console.log("data?????", data)
            let formdata = new FormData()
            for (let key in data) {
                if (data[key] instanceof Array) {
                    data[key] = JSON.stringify(data[key])
                }
                formdata.append(key, data[key])
            }
            const response = await RegisterReqcruiter(formdata).unwrap();
            console.log({ response });
            swal({ text: response?.message || "Regitered Successfully", icon: "success" });
        } catch (error) {
            console.log({ error });
            swal({ text: error?.data?.message || error?.message, icon: "warning" });

        }
    };
    console.log("errors", errors)
    console.log("resume", watch("resume"))

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="register-page mb-5">
                <img className="register-logo" src="/src/assets/logo.svg" alt="Logo" />
                <div className="row">
                    {/* Personal Information */}
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
                            <div className="text-danger">
                                {errors.designation.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.name.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.dob.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.gender.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.maritalstatus.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.age.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.email.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.phone.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.education.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.experience.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.industry.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.currentSalary.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.salaryExpectations.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.aboutus.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.country_id.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.state_id.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.city_id.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.pincode.message}
                            </div>
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
                            <div className="text-danger">
                                {errors.address1.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <button type="submit" className="submit-button12">Submit Form</button>
        </form>

    );
};

export default JobSeeker;