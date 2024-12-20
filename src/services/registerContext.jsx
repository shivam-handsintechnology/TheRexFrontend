import React, { useState, useEffect, createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import API_URL from './config'
import { fetchJobUserData } from '@/redux/reduxthink/fetchJobUserData';
import { useDispatch } from 'react-redux';
const RegisterContext = createContext()
const RegisterContextProvider = (props) => {
    const dispatch = useDispatch()
    dispatch(fetchJobUserData())
    const [isRegistered, setIsRegistered] = useState(false);
    const [registerData, setRegisterData] = useState({
        gstNumber: '',
        businessNameType: 'company',
        businessName: '',
        companyAddress: '',
        typeOfCompany: '',
        category: '',
        authorizedPerson: '',
        natureOfBusiness: '',
        email: '',
        password: '',
        contact: '',
        isPhoneValid: true,
        annualTurnover: '',
        yearOfInception: '',
        noOfEmployees: '',
        gstDocument: ['No file selected'],
        msmeDocument: ['No file selected'],
        shopDocument: ['No file selected'],
        companyLogo: ['No file selected'],
        gst_document: null,
        msme_document: null,
        shop_document: null,
        company_logo: null,

        name: '',
        father_name: '',
        last_name: '',
        dob: '',
        gender: '',
        citizenship: '',
        country_code: '',
        userPhoto: ['No file selected'],
        user_photo: null,
        previewphoto: null,


        aadhar_number: '',
        pan_number: '',
        passport_number: '',
        aadharPhoto: ['No file selected'],
        panPhoto: ['No file selected'],
        passportPhoto: ['No file selected'],
        aadhar_photo: null,
        pan_photo: null,
        passport_photo: null,

        address: '',
        country: '',
        state: '',
        city: '',
        district: '',
        pincode: '',

        correspondenceAddress: '',
        correspondenceCountry: '',
        correspondenceState: '',
        correspondenceCity: '',
        correspondenceDistrict: '',
        correspondencePincode: '',

        declaration_date: '',
        declaration_place: '',
        signaturephoto: ['No file selected'],
        signature: null,

    })

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState('')

    const [success, setSuccess] = useState('')

    const [step, setStep] = useState(1)


    const handleRegister = async (registerData) => {
        try {
            setLoading(true)
            const formData = new FormData()
            formData.append('gst_number', registerData.gstNumber)
            formData.append('business_name_type', registerData.businessNameType)
            formData.append('business_name', registerData.businessName)
            formData.append('company_address', registerData.companyAddress)
            formData.append('type_of_company', registerData.typeOfCompany)
            formData.append('category', registerData.category)
            formData.append('authorized_person', registerData.authorizedPerson)
            formData.append('nature_of_business', registerData.natureOfBusiness)
            formData.append('email', registerData.email)
            formData.append('password', registerData.password)
            formData.append('contact', registerData.contact)
            formData.append('annual_turnover', registerData.annualTurnover)
            formData.append('year_of_inception', registerData.yearOfInception)
            formData.append('no_of_employees', registerData.noOfEmployees)
            if (registerData.gst_document) formData.append('gst_document', registerData.gst_document);
            if (registerData.msme_document) formData.append('msme_document', registerData.msme_document);
            if (registerData.shop_document) formData.append('shop_document', registerData.shop_document);
            formData.append('company_logo', registerData.company_logo)
            formData.append('name', registerData.name)
            formData.append('father_name', registerData.father_name)
            formData.append('last_name', registerData.last_name)
            formData.append('dob', registerData.dob)
            formData.append('gender', registerData.gender)
            formData.append('citizenship', registerData.citizenship)
            formData.append('countrycode', registerData.country_code)
            formData.append('aadhar_number', registerData.aadhar_number)
            formData.append('user_photo', registerData.user_photo)
            formData.append('pan_number', registerData.pan_number)
            formData.append('passport_number', registerData.passport_number)
            formData.append('aadhar_photo', registerData.aadhar_photo)
            formData.append('pan_photo', registerData.pan_photo)
            formData.append('passport_photo', registerData.passport_photo)
            formData.append('address', registerData.address)
            formData.append('country', registerData.country)
            formData.append('state', registerData.state)
            formData.append('city', registerData.city)
            formData.append('district', registerData.district)
            formData.append('pincode', registerData.pincode)
            formData.append('correspondence_address', registerData.correspondenceAddress)
            formData.append('correspondence_country', registerData.correspondenceCountry)
            formData.append('correspondence_state', registerData.correspondenceState)
            formData.append('correspondence_city', registerData.correspondenceCity)
            formData.append('correspondence_district', registerData.correspondenceDistrict)
            formData.append('correspondence_pincode', registerData.correspondencePincode)
            formData.append('declaration_date', registerData.declaration_date)
            formData.append('declaration_place', registerData.declaration_place)
            formData.append('signature', registerData.signature)



            console.table(Array.from(formData));



            // return false;

            await fetch(`${API_URL}/api/registerUser`, {
                method: 'POST',
                body: formData
            })
                .then(data => data.json())
                .then(data => {
                    if (data.status === 201) {
                        console.log(data.data)
                        setSuccess(data.message)
                        setLoading(false)
                        sessionStorage.setItem('email', registerData.email);
                        sessionStorage.setItem('password', registerData.password);
                        sendOtp();
                    } else {
                        setError(data.message)
                        setLoading(false)
                    }
                })
        } catch (error) {
            console.log(error)
            setError('Something went wrong')
            setLoading(false)
        }
    }


    const sendOtp = async () => {
        try {
            setLoading(true);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: registerData.email })
            };

            await fetch(`${API_URL}/api/sendOtp`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        swal({
                            text: data.message,
                            icon: "success"
                        });
                        setLoading(false);
                        window.location.href = '/OtpLogin';

                    } else {
                        swal({
                            text: data.message,
                            icon: "error"
                        });
                        setLoading(false);
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <RegisterContext.Provider value={{ isRegistered, setIsRegistered, registerData, setRegisterData, loading, error, success, handleRegister, step, setStep }}>
            {props.children}
        </RegisterContext.Provider>
    )

}

const useRegisterContext = () => {
    return useContext(RegisterContext)
}
export { RegisterContext, RegisterContextProvider, useRegisterContext }