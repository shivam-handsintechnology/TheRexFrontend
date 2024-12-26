const InitialData = {
    // CANDIDATE fORM
    "candidateForm": {
        "name": "",
        "dob": "",
        "gender": "",
        "age": 14,
        "email": "",
        "phone": "",
        "education": "",
        "experience": null,
        "industry": [],
        "currentSalary": null,
        "salaryExpectations": null,
        "designation": "",
        "maritalstatus": "",
        "aboutus": "",
        "profilephoto": null,
        "resume": null,
        "socialnetworks": [
            { type: "", url: "" }, // Initial empty field
        ],
        "city_id": "",
        "state_id": "",
        "country_id": "",
        "pincode": "",
        "address1": "",
    },
    // Employer fORM
    "EmployerForm": {
        "name": "tst",
        "email": "shivam@handsintechnology.com",
        "phone": "1234567890",
        "website": "https://chatgpt.com/c/67667583-c688-800e-9421-0e4fa7e5ab04",
        "logo": null,
        "founder": "Test Founder",
        "establishedDate": "12/02/1997",
        "org_size": 14,
        "industry": [],
        "introvideourl": "https://chatgpt.com/c/67667583-c688-800e-9421-0e4fa7e5ab04",
        "aboutus": "dasas",
        "photos": [],
        "videos": [],
        "socialnetworks": [
            { type: "", url: "" }, // Initial empty field
        ],
        "city_id": "",
        "state_id": "",
        "country_id": "",
        "pincode": "1234567",
        "address1": "sss",
    },
    "InitialJobPortalUserData": /** 
* Paste one or more documents here
*/
    {
        "role": "",
        "token": localStorage.getItem("token") || "",
    },
    "JobAplicationFomINtialData": {
        "firstName": "",
        "lastName": "",
        "email": "",
        "phoneNumber": "",
        "address": "",
        "city": "",
        "zipCode": "",
        "cv": "",
        "loading": false,
        "reumeloading": false,
        "isresumeuploaded": true
    },
    "jobPortalformInitialData": {
        "first_name": "",
        "last_name": "",
        "email": "",
        "phone_number": "",
        "role": "",
        "info_about_me": "",
        "country_id": "",
        "state_id": "",
        "city_id": "",
        "profilephoto": null,
        "profilephotoPreview": null,
        "isPhoneValid": true,
        "resume": null,
        "statelist": [],
        "citylist": [],
        "counrylist": [],
        "skills": []
    },
    "initialJobFilterData": {
        "searchedQuery": "",
        "location": [],
        "jobid": "",
        "category": [],
        "min_years": 0,
        "max_years": 10,
        "minSalary": "",
        "maxSalary": "",
        "jobtypes": [],
        "education": [],
    },
    initialPostJobdata: {
        title: "",
        description: "",
        short_description: "",
        requirements: "",
        skills: [],
        benefits: [],
        "salary_range": {
            "min": "",
            "max": ""
        },
        "experience": {
            "min_years": "",
            "max_years": ""
        },
        state_id: "",
        city_id: "",
        country_id: "",
        jobType: "",
        position: "",
        education: "",
        category: "",
        tags: [],
        interview_process: "",
        additional_instructions: "",
        application_deadline: null,
    },
    "initialRecruiterform": {
        "personalDetails": {
            "profilephoto": null,
            "first_name": "",
            "middle_name": "",
            "last_name": "",
            "phone": "",
            "currentAddress": {
                "street": "",
                "city_id": "",
                "state_id": "",
                "zipCode": "",
                "country_id": ""
            },
            "permanentAddress": {
                "street": "",
                "city_id": "",
                "state_id": "",
                "zipCode": "",
                "country_id": ""
            }
        },
        "email": "",
        "company": {
            "aboutus": "",
            "skills": [],
            "companylogo": null,
            "achievement": [],
            "currentDesignation": "",
            "from": "",
            "name": "",
            "address1": "",
            "address2": "",
            "city_id": "",
            "state_id": "",
            "country_id": "",
            "totalExperience": "",
            "levelIHireFor": [],
            "industry": [],
            "subindustry": [],
            "website": ""
        },
        "termsOfService": false
    },
    "initialjobseekerform": {
        "personalDetails": {
            "profilephoto": null,
            "first_name": "",
            "middle_name": "",
            "last_name": "",
            "dateOfBirth": "",
            "placeOfBirth": "",
            "age": "",
            "currentLocation": "",
            "currentAddress": {
                "street": "",
                "city_id": "",
                "state_id": "",
                "zipCode": "",
                "country_id": ""
            },
            "permanentAddress": {
                "street": "",
                "city_id": "",
                "state_id": "",
                "zipCode": "",
                "country_id": ""
            },
            "languagesKnown": []
        },
        "ContactDetails": {
            "phone": "",
            "whatsappphone": "",
            "portfolioLink": "",
            "linkedinprofileLink": ""
        },
        "employmentdetails": {
            "employmentStatus": "",
            "experience": "",
            "jobtype": "",
            "careerlevel": "",
            "functionalarea": "",
            "industry": "",
            "Specialization": ""
        },
        "educationDetails": [
            {
                "degree": "",
                "institution": "",
                "yearOfCompletion": "",
                "percentage": "",
                "board": ""
            }
        ],
        "keySkills": [
            {
                "skill": "",
                "proficiency": ""
            },
            {
                "skill": "",
                "proficiency": ""
            },
            {
                "skill": "",
                "proficiency": ""
            }
        ],
        "communicationSkills": {
            "english": "",
            "hindi": "",
            "gujarati": "",
            "marathi": ""
        },
        "additionalInformation": {
            "computerProficiency": "",
            "currentSalary": "",
            "salaryExpectations": "",
            "howdidyouhearaboutmysso": "",
            "resume": "",
            "IdProof": ""
        },
        "email": ""
    },
    "languageOptions": [
        {
            "value": "english",
            "label": "English"
        },
        {
            "value": "spanish",
            "label": "Spanish"
        },
        {
            "value": "french",
            "label": "French"
        },
        {
            "value": "german",
            "label": "German"
        },
        {
            "value": "chinese",
            "label": "Chinese"
        },
        {
            "value": "japanese",
            "label": "Japanese"
        },
        {
            "value": "arabic",
            "label": "Arabic"
        },
        {
            "value": "hindi",
            "label": "Hindi"
        },
        {
            "value": "portuguese",
            "label": "Portuguese"
        },
        {
            "value": "russian",
            "label": "Russian"
        }
    ],
    "jobTypes": [
        "Full-time",
        "Part-time",
        "Contract",
        "Temporary",
        "Internship",
        "Remote",
        "Fresher",
        "Hybrid",
        "Freelancing"
    ],
    "careerLevels": [
        "Fresher",
        "Staff/Assistant",
        "Junior-level",
        "Senior-level",
        "Executive/Officer",
        "Managerial",
        "Consultant",
        "AGM/DGM/GM",
        "C-level position",
        "Director/President",
        "Founder",
        "Others"
    ],
    "degrees": [
        "10th",
        "12th",
        "Diploma",
        "Bachelors",
        "Masters",
        "PhD"
    ],
    "employmentStatuses": [
        "College student",
        "Internship",
        "Fresher",
        "Full time Employed",
        "Part time Employed",
        "Contract-basis",
        "Remote/Work from Home",
        "Hybrid",
        "Freelancer",
        "Self-Employed",
        "Unemployed"
    ],
    "jobExperience": [
        {
            "label": "Fresher",
            "value": 0
        },
        {
            "label": "Up to 6 months",
            "value": 0.5
        },
        {
            "label": "1+ year",
            "value": 1
        },
        {
            "label": "2+ year",
            "value": 2
        },
        {
            "label": "3+ year",
            "value": 3
        },
        {
            "label": "4+ year",
            "value": 4
        },
        {
            "label": "5 - 10 year",
            "value": 5
        },
        {
            "label": "10+ year",
            "value": 10
        }
    ],
    "proficiencyLevels": [
        "None",
        "Beginner",
        "Intermediate",
        "Expert"
    ],
    "communicationProficiency": [
        "None",
        "Beginner",
        "Intermediate",
        "Fluent"
    ],
    "SalaryFilter": [

        { label: "0 - 3 Lakhs", value: { min: 0, max: 3 } },
        { label: "3 - 6 Lakhs", value: { min: 3, max: 6 } },
        { label: "6 - 9 Lakhs", value: { min: 6, max: 9 } },
        { label: "Above 9 Lakhs", value: { min: 9, max: Infinity } },

    ],
    "sources": [
        "Print Media",
        "Social Media",
        "Satsang Sabha",
        "Mahotsav",
        "Banner",
        "Saints",
        "Satsangis",
        "Relatives",
        "Family members",
        "Friends",
        "Others"
    ],
    "levelOptions": [
        {
            "value": "junior",
            "label": "Junior"
        },
        {
            "value": "mid",
            "label": "Mid"
        },
        {
            "value": "senior",
            "label": "Senior"
        },
        {
            "value": "lead",
            "label": "Lead"
        }
    ]
}
export default InitialData