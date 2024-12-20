import React, { useState,useEffect } from 'react';

// Import your Profile components for each step
import Profiletwo from './Profiletwo';
import Profilethree from './Profilethree';
import Profilefour from './Profilefour';
import Profileone from './Profileone';
import bannerimg from "@/assets/profile.png"
import "./profile.css"
import { Container } from 'react-bootstrap';
import Profileheader from './Proifleheader';
import { useNavigate } from 'react-router-dom';
import { useRegisterContext } from '@/services/registerContext.jsx';


const Profile = () => {
  const navigate = useNavigate()

  const {isRegistered, registerData, setRegisterData, handleRegister, step, setStep } = useRegisterContext();
    const [localdata, setLocalData] = useState(registerData);

  const totalSteps = 4; // Total steps in the form (1-4 steps)
  const [currentStep, setCurrentStep] = useState(1); // Track the current step

 // Detecting a page refresh using performance.navigation.type
 useEffect(() => {
  if (!isRegistered) {
    navigate("/register"); // Redirect to register page if not registered
  }
}, [isRegistered, navigate]);

 // Calculate progress percentage based on the current step
 const progress = (currentStep / totalSteps) * 100;

  // Calculate the progress percentage based on the current step
  // let progress = 0;

  //  if (currentStep === 0) {
  //   progress = 0; 
  // } else if (currentStep === 1) {
  //   progress = 0; // Step 1 sets progress to 50%
  // } else if (currentStep === 2) {
  //   progress = 33; // Step 2 sets progress to 60%
  // } else if (currentStep === 3) {
  //   progress = 66; // Step 3 sets progress to 80%
  // } else if (currentStep === 4) {
  //   progress = 100; // Step 4 sets progress to 100%
  // }

  // Function to go to the next step
  const nextStep = () => {
    // setCurrentStep((prev) => Math.min(prev + 1, 4)); // Max step is 4
    console.log('Current Step:', currentStep);
  if (validateStep(currentStep)) {
    console.log('Validation Passed');
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  } else {
    console.log('Validation Failed');
  }
  };

  // Function to go to the previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      navigate("/register"); // Redirect to register page
    }
  };

  // Function to handle finishing the process (at the last step)
  const finish = () => {
    try {
      if (!registerData.declaration_date) {
        console.log('Validation failed: Declaration date is missing');
        swal({
          text:'Please select the declaration date',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.declaration_place) {
        console.log('Validation failed: Declaration place is missing');
        swal({
          text:'Please enter the declaration place',
          icon:'warning'
        });
        return false;
      }
      else if (registerData?.signature?.length == 0 || registerData?.signature == null) {
        console.log('Validation failed: Signature is missing');
        swal({
          text:'Please upload your signature',
          icon:'warning'
        });
        return false;
      } else {
      
      handleRegister(registerData)
      }
    }
    catch (error) {
      console.log(error)
    }
    };

  // Conditional rendering for step content
  const stepContent = [
    <Profileone key="step1" />,  // Render Profileone component for Step 1
    <Profiletwo key="step2" />,  // Render Profiletwo component for Step 2
    <Profilethree key="step3" />,  // Render Profilethree component for Step 3
    <Profilefour key="step4" />,  // Render Profilefour component for Step 4 (final step)
  ];

  // Step headings for each step
  const stepHeadings = [
    "Personal Details",  // Heading for Step 1
    "Proof Of Identity",  // Heading for Step 2
    "Address Details",  // Heading for Step 3
    "Applicant Declaration",  // Heading for Step 4
  ];

  // Function to validate the current step
  const validateStep = (currentStep) => {
    console.log('Validating Step:', currentStep);


    if (currentStep === 1) {
      if (!registerData.name) {
        console.log('Validation failed: Name is missing');
        swal({
          text:'Please enter your first name',
          icon:'warning'
        });
        nameRef.current.focus();
        return false;
      }
     else if (!registerData.father_name) {
        console.log('Validation failed: middle name is missing');
        swal({
          text:'Please enter your middle name',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.last_name) {
        console.log('Validation failed: last name is missing');
        swal({
          text:'Please enter your last name',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.dob) {
        console.log('Validation failed: Date of birth is missing');
        swal({
           text:'Please enter select date of birth',
           icon:'warning'
        });
        return false;
      }
      else if (!registerData.gender) {
        console.log('Validation failed: gender is missing');
        swal({
         text:'Please select your gender',
         icon:'warning'
        });
        return false;
      }
      else if (registerData?.user_photo?.length == 0 || registerData?.user_photo == null) {
        console.log('Validation failed: Photo is missing');
        swal({
         text:'Please upload your photo',
         icon:'warning'
        });
        return false;
      }
      else if (!registerData.citizenship) {
        console.log('Validation failed: citizenship is missing');
        swal({
         text:'Please select your citizenship',
         icon:'warning'
        });
        return false;
      }
      
      return true; 
    }
    if (currentStep === 2) {
      if (registerData.citizenship === 'India' && (!registerData.aadhar_number || registerData.aadhar_number.length < 12 || registerData.aadhar_number.length > 12 )) {
        console.log('Validation failed: Aadhar number is missing');
        swal({
          text:'Please enter your Aadhar number',
          icon:'warning'
        });
        return false;
      }
      else if (registerData.citizenship === 'India' && (registerData?.aadhar_photo?.length == 0 || registerData?.aadhar_photo == null )) {
        console.log('Validation failed: Aadhar photo is missing');
        swal({
          text:'Please upload your Aadhar photo',
          icon:'warning'
        });
        return false;
      }
      else if (registerData.citizenship === 'India' && !registerData.pan_number  ) {
        console.log('Validation failed: PAN number is missing');
        swal({
          text:'Please enter your PAN number',
          icon:'warning'
        });
        return false;
      }
      else if ( registerData.citizenship === 'India' && (registerData?.pan_photo?.length == 0 || registerData?.pan_photo == null)) {
        console.log('Validation failed: PAN photo is missing');
        swal({
          text:'Please upload your PAN photo',
          icon:'warning'
        });
        return false;
      }
      else if ( registerData.citizenship !== 'India' && !registerData.passport_number ) {
        console.log('Validation failed: Passport number is missing');
        swal({
          text:'Please enter your Passport number',
          icon:'warning'
        });
        return false;
      }
      else if ( registerData.citizenship !== 'India' && (registerData?.passport_photo?.length == 0 || registerData?.passport_photo == null)) {
        console.log('Validation failed: Passport photo is missing');
        swal({
          text:'Please upload your Passport photo',
          icon:'warning'
        });
        return false;
      }
      return true;
    }
    if (currentStep === 3) {
      if (!registerData.address) {
        console.log('Validation failed: Address is missing');
        swal({
          text:'Please enter your address',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.country) {
        console.log('Validation failed: Country is missing');
        swal({
          text:'Please select your country',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.state) {
        console.log('Validation failed: State is missing');
        swal({
          text:'Please select your state',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.city) {
        console.log('Validation failed: City is missing');
        swal({
          text:'Please select your city',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.district) {
        console.log('Validation failed: District is missing');
        swal({
          text:'Please enter your district',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.pincode) {
        console.log('Validation failed: Pincode is missing');
        swal({
          text:'Please enter your pincode',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.correspondenceAddress) {
        console.log('Validation failed: Correspondence Address is missing');
        swal({
          text:'Please enter your correspondence address',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.correspondenceCountry) {
        console.log('Validation failed: Correspondence Country is missing');
        swal({
          text:'Please select your correspondence country',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.correspondenceState) {
        console.log('Validation failed: Correspondence State is missing');
        swal({
          text:'Please select your correspondence state',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.correspondenceCity) {
        console.log('Validation failed: Correspondence City is missing');
        swal({
          text:'Please select your correspondence city',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.correspondenceDistrict) {
        console.log('Validation failed: Correspondence District is missing');
        swal({
          text:'Please enter your correspondence district',
          icon:'warning'
        });
        return false;
      }
      else if (!registerData.correspondencePincode) {
        console.log('Validation failed: Correspondence Pincode is missing');
        swal({
          text:'Please enter your correspondence pincode',
          icon:'warning'
        });
        return false;
      }

      return true;
    }

}





  return (
    <>
    <Profileheader/>
      <div className="multi-step-form"> 
        <img src={bannerimg} className='w-100 profile-img' />
        <Container fluid>
          {/* Display the dynamic heading based on the current step */}
          <h1 className='currentheading'>{stepHeadings[currentStep - 1]}</h1>

          <div className='profile-section-full'>
            <div className="progress-container">
              {/* Progress Line */}
              <div className="progress-line">
                <div className="progress" style={{ width: `${progress}%` }}></div>
              </div>

              {/* Circle Step Indicators */}
              <div className="steps">
                {Array.from({ length: totalSteps }, (_, index) => (
                  <div
                    key={index}
                    className={`step ${currentStep >= index + 1 ? 'active' : ''}`}
                  >
                    {/* Display percentage based on step */}
                    {((index + 1) * 25)}%
                  </div>
                ))}
              </div>
            </div>

            {/* Content for the current step */}
            <div className="step-content">
              {stepContent[currentStep - 1]}
            </div>

          </div>
          <div className="form-navigation">
            {/* "Previous" Button */}
            <button className='back' onClick={prevStep} >Back</button>

            {/* "Next" Button for steps 1-3 */}
            {currentStep < totalSteps ? (
              <button className='nextbutton' onClick={nextStep} disabled={currentStep === totalSteps}>Next</button>
            ) : (
              // "Finish" Button for the final step
              <button className='submit-buttonss' onClick={finish}>Submit</button>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Profile;
