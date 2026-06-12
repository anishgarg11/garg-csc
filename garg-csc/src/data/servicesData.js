export const servicesData = [
  {
  slug: "aadhaar-card",
  title: "Aadhaar Card",
  icon: "🪪",

  shortDescription:
    "Aadhaar address update, mobile number update and Care Of (Father/Husband) name update services.",

  overview:
    "We provide Aadhaar update services including address correction, mobile number update and Care Of name changes (Father/Husband Name) as per UIDAI guidelines.",

  availableServices: [
    "Address Update",
    "Mobile Number Update",
    "Care Of (Father/Husband) Name Update",
    "Aadhaar Print"
  ],

 requiredDocuments: [
  {
    title: "Address Proof",
    documents: [
      "Electricity Bill (Not older than 3 Months)",
      "Caste/Domicile Certificate",
      "Property/Water/telephone Bill Receipt",
      "Marriage Certificate",
      "Gas Connection Bill",
      "Indian Passport",
      "Rent Agreement",
      "Voter ID Card",
      "Ration Card",
      "Domicile",
    ]
  },
  {
    title: "Care of Name Change/Correction",
    documents: [
      "Father/Husband Aadhaar card"
    ]
  },
],

  importantNote:
    "Mobile number update requires OTP verification on the currently registered mobile number. Please ensure your existing mobile number is active.",

  processingTime: "10–20 Minutes",

  faqs: [
    {
      question: "Can I update my mobile number in Aadhaar?",
      answer:
        "Yes, mobile number update service is available. OTP verification on the currently registered mobile number is required."
    },
    {
      question: "Which documents are accepted for address update?",
      answer:
        "Electricity Bill, Voter ID, Domicile Certificate, Recent Bank Passbook, Registered Rent Agreement and Property Registry documents may be accepted."
    }
  ]
},

  {
    slug: "pan-card",
    title: "PAN Card",
    icon: "🗂️",

    shortDescription:
      "New PAN applications, corrections, reprints and PAN-Aadhaar linking assistance.",

    overview:
      "We assist individuals in applying for a new PAN Card, correcting existing details, reprinting lost cards and completing PAN-Aadhaar linking requirements.",

    availableServices: [
      "New PAN Application",
      "PAN Correction",
      "PAN Reprint",
      "PAN-Aadhaar Linking",
      "Lost PAN Card Assistance"
    ],

    requiredDocuments: [
        {
            title: "Identity Proof", 
            documents: ["Aadhaar Card"]
        },
  {
    title: "Address Proof",
    documents: [
      "Aadhaar Card",
      "Voter ID Card",
      "Indian Passport",
      "Domicile",
      
    ]
  },
  {
    title: "Date of Birth Proof",
    documents: [
      "Birth Certificate",
      "Voter ID Card",
      "Indian Passport",
      "School Marksheet/Certificate"
    ]
  },
  {
    title:"Passport Size Photographs",
    documents: [    
        "2 Recent color photograph with White Background"
    ]
  }
  
],

    importantNote:
    "Applicant name, date of birth and father's name should match the supporting documents provided during application.",

    processingTime: "15–20 Minutes",

    faqs: [
      {
        question: "How long does PAN application take?",
        answer: "Application submission is completed within minutes; issuance depends on the authority."
      },
      {
     question: "Which documents are accepted as Date of Birth proof?",
     answer:
       "Birth Certificate, Voter ID, Passport and School Marksheet/Certificate are commonly accepted."
   },
      {
     question: "Which documents are accepted as Address proof?",
     answer:
       "Aadhaar Card, Voter ID, Passport, Domicile & Rent Agreement are commonly accepted."
   },
      {
        question: "Can I correct my name on PAN?",
        answer: "Yes, PAN correction services are available."
      },
    ]
  },
  {
  slug: "voter-card",
  title: "Voter Card",
  icon: "🗳️",

  badges: [
    "Election Commission Service",
    "CSC Assistance",
    "Online Application"
  ],

  shortDescription:
    "New voter registration, voter card correction, address update and EPIC card services.",

  overview:
    "We provide assistance for new voter registration, correction of voter details, address changes, voter ID download and other Election Commission related services.",

  availableServices: [
    "New Voter Registration",
    "Voter Card Correction",
    "Address Change",
    "Name Correction",
    "EPIC Card Download",
    "Voter ID Status Check"
  ],

  requiredDocuments: [
    {
            title: "Identity Proof", 
            documents: ["Aadhaar Card"]
        },
  {
    title: "Address Proof",
    documents: [
      "Aadhaar Card",
      "Indian Passport",
      "Bank Passbook",
      "Domicile",
      "Rent Agreement",
      "Water/Electricity/Gas Connection Bill for that address(atleast 1 year)",
      
    ]
  },
  {
    title: "Date of Birth Proof",
    documents: [
      "Birth Certificate",
      "Aadhaar Card",
      "Pan Card",
      "Driving License",
      "Indian Passport",
      "School Marksheet/Certificate"
    ]
  },
  {
    title:"Passport Size Photographs",
    documents: [    
        "1 Recent color photograph with White "
    ]
  },
  {
  title: "Reference Voter ID Details",
  documents: [
    "EPIC Number / Voter ID details of a family member or neighbour registered at the same locality"
  ]
}
  ],

  importantNote:
    "Applicant must be 18 years or older to apply for a new Voter ID Card.",

  processingTime: "15–20 Minutes",

  faqs: [
    {
      question: "Who can apply for a new Voter ID Card?",
      answer:
        "Any Indian citizen who is 18 years of age or above can apply for a Voter ID Card."
    },
    
    {
      question: "Can I change my Name, DOB, Relative Name, Mobile No. and Address on my Voter ID?",
      answer:
        "Yes, voter card Name, DOB, Relative Name, Mobile No. and Address correction and update services are available."
    }
  ]
},
  {
  slug: "passport",
  title: "Passport",
  icon: "🛂",

  shortDescription:
    "New Passport applications, renewals, re-issue requests, and passport-related assistance services.",

  overview:
    "We assist applicants with Passport application form filling, document verification guidance, appointment booking, renewals, and re-issue requests. Our CSC provides complete support throughout the Passport application process.",

  badges: [
    "Government Service",
    "CSC Assistance",
    "Online Application Support"
  ],

  availableServices: [
    "New Passport Application",
    "Passport Renewal",
    "Passport Re-Issue",
    "Appointment Booking",
    "Application Form Filling",
    "Document Verification Guidance",
    "Application Status Tracking"
  ],

  requiredDocuments: [
    {
      title: "Identity Proof",
      documents: [
        "Aadhaar Card",
        "Voter ID Card",
        "PAN Card",
        "Driving Licence"
      ]
    },
    {
      title: "Address Proof",
      documents: [
        "Aadhaar Card",
        "Voter ID Card",
        "Parents Passport Copy(In case of Minor)",
        "Water/Electricity/Gas Connection Bill for that address",
        "Bank Passbook",
        "Rent Agreement",
      ]
    },
    {
      title: "Date of Birth Proof",
      documents: [
        "Birth Certificate",
        "Transfer or School Leaving or Matriculation Certificate",
        "PAN Card",
        "Driving Licence",
        "Voter ID",
        "Policy Bond Issued by Public Sector Insurance Company",
      ]
    },
    {
  title: "Minor Applicant Documents",
  documents: [
    "Birth Certificate of Minor",
    "Aadhaar Card",
    "Parents Aadhaar Cards",
    "Parents Passport"
  ]
},
   
  ],

  processingTime: "20–30 Minutes",

  importantNote:
    "Passport approval and issuance are subject to verification by the Passport Office and Police Department.",

  faqs: [
    {
      question: "Can I apply for a new Passport through CSC?",
      answer:
        "Yes, we provide assistance for online Passport application submission and appointment booking."
    },
    {
      question: "Is police verification mandatory?",
      answer:
        "Police verification may be required depending on the Passport application category."
    },
    {
      question: "Can I renew my expired Passport?",
      answer:
        "Yes, Passport renewal and re-issue assistance services are available."
    }
  ]
},
  {
  slug: "printing-documentation",
  title: "Printing & Documentation",
  icon: "🖨️",

  shortDescription:
    "Printing, photocopying, scanning, lamination and document preparation services.",

  overview:
    "We provide high-quality printing and documentation services for students, professionals, businesses and government-related applications. Services include photocopying, printing, scanning, lamination and document preparation support.",

  badges: [
    "Quick Service",
    "A4 & A3 Printing",
    "Document Assistance"
  ],

  availableServices: [
    "Black & White Printouts",
    "Color Printouts",
    "Photocopy Services",
    "Document Scanning",
    "Lamination",
    "Passport Size Photo Print",
    "Resume Printing",
    "Online Form Printing",
    "PDF Conversion",
    "Document Upload Assistance"
  ],

  requiredDocuments: [
    {
      title: "Documents for Printing",
      documents: [
        "PDF File",
        "Word Document",
        "Image File",
        "Email Attachment",
        "Pen Drive Documents"
      ]
    },
    {
      title: "Documents for Scanning",
      documents: [
        "Original Document to be Scanned"
      ]
    }
  ],

  processingTime: "5–15 Minutes",

  faqs: [
    {
      question: "Do you provide color printing?",
      answer:
        "Yes, both black & white and color printing services are available."
    },
    {
      question: "Can I print documents from WhatsApp or Email?",
      answer:
        "Yes, documents can be printed directly from WhatsApp, Email, Pen Drive or other digital sources."
    },
    {
      question: "Are A3 size printouts available?",
      answer:
    "Yes, A3 size printouts are available in black & white only."
    }
  ]
},
  {
    slug: "banking-services",
    title: "Banking Services",
    icon: "🏦",

    shortDescription:
      "New PAN applications, corrections, reprints and PAN-Aadhaar linking assistance.",

    overview:
      "We assist individuals in applying for a new PAN Card, correcting existing details, reprinting lost cards and completing PAN-Aadhaar linking requirements.",

    availableServices: [
      "New PAN Application",
      "PAN Correction",
      "PAN Reprint",
      "PAN-Aadhaar Linking",
      "Lost PAN Card Assistance"
    ],

    requiredDocuments: [
      "Aadhaar Card",
      "Passport Size Photograph",
      "Address Proof"
    ],

    processingTime: "15–30 Minutes",

    faqs: [
      {
        question: "How long does PAN application take?",
        answer: "Application submission is completed within minutes; issuance depends on the authority."
      },
      {
        question: "Can I correct my name on PAN?",
        answer: "Yes, PAN correction services are available."
      }
    ]
  },

 {
  slug: "certificates",
  title: "Certificates",
  icon: "📜",

  shortDescription:
    "Income, Caste, Domicile, EWS, Birth and Death Certificate application assistance.",

  overview:
    "We provide assistance for various government certificate services including Income Certificate, Caste Certificate, Domicile Certificate, EWS Certificate, Birth Certificate and Death Certificate applications. Our team helps with online applications, document verification guidance and status tracking.",

  badges: [
    "Government Service",
    "Online Application",
    "CSC Assistance"
  ],

  availableServices: [
    "Income Certificate",
    "Caste Certificate",
    "Domicile Certificate",
    "EWS Certificate",
    "Birth Certificate",
    "Death Certificate",
    "Certificate Correction Assistance",
    "Application Status Tracking"
  ],

  requiredDocuments: [
  {
    title: "Income / Caste / Domicile / EWS Certificate",
    documents: [
      "Parivar Pehchan Patra (PPP) / Family ID"
    ]
  },

  {
    title: "Birth Certificate",
    documents: [
      "Hospital Discharge Summary",
      "Parents' Aadhaar Cards"
    ]
  },

  {
    title: "Name Addition in Birth Certificate",
    documents: [
      "Birth Certificate (Without Name)",
      "Parents' Aadhaar Cards"
    ]
  },

  {
    title: "Death Certificate",
    documents: [
      "Cremation Ground (Shamshaan) Receipt",
      "Applicant Identity Proof (Aadhaar Card / Voter ID Card / PAN Card)"
    ]
  }
],

  processingTime: "15–30 Minutes",

  importantNote:
    "Required documents may vary depending on the certificate type and local authority requirements.",

  faqs: [
    {
  question: "What documents are required for a Birth Certificate?",
  answer:
    "Hospital Discharge Summary and Aadhaar Cards of both parents are required."
},
{
  question: "How can I add a name to a Birth Certificate?",
  answer:
    "Birth Certificate without name and Aadhaar Cards of the parents are required."
},
{
  question: "What documents are required for a Death Certificate?",
  answer:
    "Cremation Ground receipt and applicant identity proof such as Aadhaar Card, Voter ID or PAN Card are required."
}
  ]
},
  {
  slug: "pmay-services",
  title: "PMAY (Urban) 2.0",
  icon: "🏠",

  shortDescription:
    "PMAY-U 2.0 housing scheme registration, eligibility verification and application assistance for eligible urban families.",

  overview:
    "We provide assistance for Pradhan Mantri Awas Yojana (Urban) 2.0 applications, beneficiary registration, eligibility verification, document preparation and application tracking. The scheme supports eligible urban families for construction, purchase or affordable housing benefits under PMAY-U 2.0.",

  badges: [
    "Government Scheme",
    "PMAY-U 2.0 Assistance",
    "Application Support"
  ],

  availableServices: [
    "PMAY-U 2.0 Registration",
    "Eligibility Verification",
    "Online Application Assistance",
    "Document Upload Support",
    "Application Status Check",
    "Beneficiary Information Update",
    "Housing Scheme Guidance"
  ],

  requiredDocuments: [
    {
      title: "Identity Documents",
      documents: [
        "Aadhaar Card of Applicant",
        "Aadhaar Card of Family Members (if required)"
      ]
    },
    {
      title: "Family & Address Details",
      documents: [
        "Aadhaar Card of Family Members",

      ]
    },
    {
      title: "Income Documents",
      documents: [
        "Income Certificate",
        "Income Related Supporting Documents"
      ]
    },
    {
      title: "Bank Details",
      documents: [
        "Bank Passbook (Applicant)"
      ]
    }
  ],

  importantNote:
    "Applicant's family should not own a pucca house anywhere in India. Previous beneficiaries of government housing schemes may not be eligible under PMAY-U 2.0.",

  processingTime: "Depends on Government Verification & Approval",

  faqs: [
    {
      question: "Who can apply for PMAY-U 2.0?",
      answer:
        "Eligible EWS, LIG and MIG families living in urban areas who do not own a pucca house anywhere in India."
    },
    {
      question: "Can existing PMAY beneficiaries apply again?",
      answer:
        "No. Beneficiaries who have already received benefits under eligible government housing schemes are generally not eligible."
    },
    {
      question: "Is Aadhaar mandatory?",
      answer:
        "Yes, Aadhaar details are required for beneficiary verification."
    },
    {
      question: "Can I check my PMAY application status?",
      answer:
        "Yes, application status tracking assistance is available."
    }
  ]
},
  {
  slug: "udyam-registration",
  title: "Udyam Registration",
  icon: "🏢",

  shortDescription:
    "MSME (Micro, Small & Medium Enterprise) registration and certificate download assistance.",

  overview:
    "We provide assistance for Udyam Registration under the Ministry of MSME. Udyam Registration helps businesses avail government benefits, subsidies, priority lending, tenders and various MSME schemes.",

  badges: [
    "MSME Registration",
    "Government Recognized",
    "Online Certificate"
  ],

  availableServices: [
    "New Udyam Registration",
    "Udyam Certificate Download",
    "Udyam Registration Update",
    "Business Information Correction",
    "Udyam Verification Assistance",
    "MSME Registration Guidance"
  ],

  requiredDocuments: [
    {
      title: "Proprietor Aadhaar Card",
      documents: [
        "Aadhaar Card of Business Owner"
      ]
    },
    {
      title: "PAN Card",
      documents: [
        "PAN Card of Proprietor / Business"
      ]
    },
    {
      title: "Business Details",
      documents: [
        "Business Name",
        "Business Address",
        "Business Activity Details",
        "Mobile Number"
      ]
    }
  ],

  importantNote:
    "The Aadhaar and PAN details of the business owner must be correct and active for successful registration.",

  processingTime: "20–30 Minutes",

  faqs: [
    {
      question: "Who can apply for Udyam Registration?",
      answer:
        "Any Micro, Small or Medium Enterprise (MSME), including proprietorships, partnerships and companies, can apply."
    },
    {
      question: "Is Udyam Registration free?",
      answer:
        "The Government does not charge any registration fee. Service charges may apply for assistance."
    },
    {
      question: "What are the benefits of Udyam Registration?",
      answer:
        "MSMEs can avail government schemes, subsidies, priority sector lending and tender-related benefits."
    },
    {
      question: "Can I download my Udyam Certificate later?",
      answer:
        "Yes, certificate download assistance is available."
    }
  ]
},
  {
  slug: "insurance",
  title: "Insurance Services",
  icon: "🛡️",

  shortDescription:
    "Health, life and motor insurance registration, renewal and policy assistance.",

  overview:
    "We provide assistance for various insurance services including health insurance, life insurance and motor insurance. Our team helps customers with policy purchase, renewal, policy information and insurance-related guidance.",

  badges: [
    "Health Insurance",
    "Life Insurance",
    "Motor Insurance"
  ],

  availableServices: [
    "Health Insurance Policy",
    "Life Insurance Policy",
    "Motor Insurance Policy",
    "Insurance Renewal",
    "Policy Information Assistance",
    "Premium Payment Assistance",
    "Insurance Claim Guidance"
  ],

  requiredDocuments: [
    {
      title: "Identity Proof",
      documents: [
        "Aadhaar Card"
      ]
    },
    {
      title: "Contact Details",
      documents: [
        "Mobile Number"
      ]
    },
    {
      title: "Vehicle Documents (For Motor Insurance)",
      documents: [
        "RC (Registration Certificate)",
        "Previous Insurance Policy (if available)"
      ]
    }
  ],

  importantNote:
    "Insurance eligibility, premium amount and coverage depend on the selected policy and insurance provider.",

  processingTime: "15–30 Minutes",

  faqs: [
    {
      question: "Which insurance services are available?",
      answer:
        "Health Insurance, Life Insurance and Motor Insurance services are available."
    },
    {
      question: "Can I renew my existing insurance policy?",
      answer:
        "Yes, insurance renewal assistance is available for eligible policies."
    },
    {
      question: "What documents are required for motor insurance?",
      answer:
        "RC and previous insurance policy details may be required."
    },
    {
      question: "Can I compare different insurance plans?",
      answer:
        "Yes, assistance is available for selecting suitable insurance plans based on your requirements."
    }
  ]
},
  {
  slug: "bill-payments",
  title: "Bill Payments",
  icon: "💡",

  shortDescription:
    "Fast and secure utility bill payment services including electricity, water, gas, mobile, DTH and loan repayments.",

  overview:
    "We provide convenient bill payment services through CSC. Customers can pay utility bills, recharge services and loan EMIs quickly without visiting multiple offices or websites.",

  availableServices: [
    "Electricity Bill Payment",
    "Water Bill Payment",
    "Gas Bill Payment",
    "Mobile Recharge",
    "DTH Recharge",
    "Loan EMI Repayment"
  ],

  requiredDocuments: [],

  processingTime: "5–10 Minutes",

  badges: [
    "Instant Payment",
    "CSC Assistance",
    "Digital Receipt Available"
  ],

  faqs: [
    {
      question: "Do I receive a payment receipt?",
      answer:
        "Yes, a digital or printed payment receipt is provided after successful payment."
    },
    {
      question: "Can I pay bills from any operator or provider?",
      answer:
        "Most major electricity boards, telecom operators, DTH providers and utility services are supported."
    },
    {
      question: "How long does bill payment take?",
      answer:
        "Payments are usually processed instantly, though confirmation time may vary depending on the service provider."
    }
  ]
},

{
  slug: "education-services",
  title: "Education Services",
  icon: "📚",

  shortDescription:
    "Online admissions, scholarship applications, exam forms, results and education-related assistance.",

  overview:
    "We help students with various educational services including online admissions, scholarship registrations, examination forms, result downloads, and other academic documentation support.",

  availableServices: [
    
    "School / College Admission Forms",
    "Scholarship Applications",
    "Exam Registration",
    "Result & Marksheet Download",
    "University Form Filling",
    "Education Document Printing"
  ],

  requiredDocuments: [
     {
      title: "Required Documents",
      documents: [
        "Aadhaar Card",
    "Passport Size Photograph",
    "Educational Certificates / Marksheet",
    "Mobile Number",
    "Email ID"
      ]
    },
   
  ],

  processingTime: "30–60 Minutes",

  faqs: [
    {
      question: "Can you help with online college admissions?",
      answer:
        "Yes, we assist with filling and submitting online admission forms for schools, colleges, and universities."
    },
    {
      question: "Do you provide scholarship application services?",
      answer:
        "Yes, we help students apply for various government and private scholarship schemes."
    },
    {
      question: "Can I get my result or marksheet printed here?",
      answer:
        "Yes, we can download and print results, marksheets, and other educational documents."
    }
  ]
},

  {
  slug: "ayushman-bharat",
  title: "Ayushman Bharat",
  icon: "🏥",

  shortDescription:
    "Ayushman Card creation, eligibility checking, card download and beneficiary assistance services.",

  overview:
    "We help eligible beneficiaries with Ayushman Bharat services including eligibility verification, Ayushman Card generation, card download, and beneficiary record updates.",

  availableServices: [
    "Ayushman Card Registration",
    "Eligibility Check",
    "Ayushman Card Download",
    "Beneficiary Search",
    "Family Member Verification",
    "Ayushman Scheme Assistance"
  ],

  requiredDocuments: [
    {
    title: "Required Documents",
    documents: [
    "Aadhaar Card/Family ID",
    ]
  }
  ],  

  processingTime: "10–20 Minutes",

  faqs: [
    {
      question: "Who is eligible for an Ayushman Card?",
      answer:
        "Eligibility depends on government records and scheme criteria. We can check your eligibility instantly."
    },
    {
      question: "Can I download my Ayushman Card here?",
      answer:
        "Yes, we can help you download and print your Ayushman Card."
    },
    {
      question: "What documents are required?",
      answer:
        "Aadhaar Card or Family ID and a registered mobile number are generally required."
    }
  ]
},

  {
  slug: "driving-license",
  title: "Driving License",
  icon: "🚗",

  shortDescription:
    "Learner License, Driving License application, renewal and related transport services.",

  overview:
    "We assist citizens with various Driving License services including Learner License applications, Driving License renewals, duplicate licenses, address updates and online transport-related services.",

  availableServices: [
    "Learner License Application",
    "Driving License Application",
    "Driving License Renewal",
    "Duplicate Driving License",
    "Address Change in License",
    "Driving License Download",
    "Application Status Check"
  ],

  requiredDocuments: [
    "Aadhaar Card",
    "Passport Size Photograph",
    "Mobile Number"
  ],

  processingTime: "15–30 Minutes",

  faqs: [
    {
      question: "Can I apply for a Learner License online?",
      answer:
        "Yes, we can assist you with the online Learner License application process."
    },
    {
      question: "Can I renew my Driving License here?",
      answer:
        "Yes, Driving License renewal services are available."
    },
    {
      question: "What documents are required for a Driving License application?",
      answer:
        "Generally, Aadhaar Card, photograph, and a mobile number are required. Additional documents may be needed depending on the service."
    }
  ]
},

  {
  slug: "family-id",
  title: "Family ID",
  icon: "👨‍👩‍👧‍👦",

  shortDescription:
    "Family ID creation, corrections, member addition, deletion and update services.",

  overview:
    "We assist citizens with Haryana Family ID (PPP) services including new Family ID registration, member addition or deletion, mobile number updates, address corrections, income updates and other family record modifications.",

  availableServices: [
    "New Family ID Registration",
    "Family ID Correction",
    "Member Addition",
    "Member Deletion",
    "Address Update",
    "Mobile Number Update",
    "Income Update",
    "Family ID Download"
  ],

  requiredDocuments: [
      {
        title: "Identity Proof",
        documents: [
          "Aadhaar Card",
        ]
      },
      {
        title: "Address Proof",
        documents: [
     "Aadhaar Card of All Family Members (Haryana Address Required), Haryana Electricity Bill and Property ID"

        ]
      },
      {
        title: "Date of Birth Proof",
        documents: [
          "Birth Certificate",
          "School Marksheet/Certificate",
          "Voter ID Card",
          "Indian Passport"
        ]
      }
    ],

  processingTime: "30–60 Minutes",

  faqs: [
    {
      question: "Can I create a new Family ID?",
      answer:
        "Yes, we assist with new Haryana Family ID (PPP) registration and verification."
    },
    {
      question: "Can I add or remove a family member from Family ID?",
      answer:
        "Yes, member addition and deletion services are available."
    },
    {
      question: "What documents are required for Family ID services?",
      answer:
        "Aadhaar cards of all family members and valid Haryana address proof are generally required. Additional documents may be needed depending on the update request."
    },
    {
  question: "Is Haryana address mandatory for Family ID services?",
  answer: "Yes, the Aadhaar Card should contain a valid Haryana address for most Family ID (PPP) services."
}
  ]
},

  {
  slug: "police-verification",
  title: "Police Verification",
  icon: "👮",

  shortDescription:
    "Police verification and character certificate application assistance services.",

  overview:
    "We assist citizens in applying for Police Verification and Character Certificates required for jobs, passport applications, government schemes, education, and other official purposes.",

  availableServices: [
    "Character Certificate Application",
    "Police Verification Request",
    "Application Form Filling",
    "Document Upload Assistance",
    "Certificate Download Assistance"
  ],

  requiredDocuments: [
    {
      title:"General Documents",
      documents: [
        "Aadhaar Card",
        "Voter ID Card",
        "Driving License",
        "Indian Passport"
      ]
    }
  ],

  processingTime: "15–30 Minutes",

  faqs: [
    {
      question: "What is Police Verification used for?",
      answer:
        "Police Verification is commonly required for jobs, passport applications, government services, and other official purposes."
    },
    {
      question: "Can I apply for a Character Certificate through this service?",
      answer:
        "Yes, we assist with Character Certificate applications and related documentation."
    },
    {
      question: "What documents are required?",
      answer:
        "Generally, Aadhaar Card, passport-size photograph, and a mobile number are required. Additional documents may be requested by the authority."
    }
  ]
},
  {
  slug: "government-jobs",
  title: "Government Jobs",
  icon: "💼",

  shortDescription:
    "Government job application, registration, form filling and exam-related assistance.",

  overview:
    "We assist candidates with government job applications, online registration, examination forms, fee payment, admit card downloads, result checking and other recruitment-related services.",

  availableServices: [
    "Government Job Application",
    "Online Registration",
    "Exam Form Filling",
    "Application Fee Payment",
    "Admit Card Download",
    "Document Upload Assistance",
    "Result Checking",
  ],

  requiredDocuments: [
    {
      title: "General Documents",
      documents: [
        "Aadhaar Card",
        "Passport Size Photograph",
        "Educational Certificates",
        "Income Certificate (if applicable)",
        "Caste Certificate (if applicable)",
        "Mobile Number",
        "Email ID"
      ]
    }
  ],

  processingTime: "30–60 Minutes",

  faqs: [
    {
      question: "Can you help me apply for government jobs?",
      answer:
        "Yes, we provide assistance with online registration, application submission and document uploads for various government recruitment portals."
    },
    {
      question: "Can I get my admit card downloaded here?",
      answer:
        "Yes, we can help you download and print admit cards, exam notices and results."
    },
    {
      question: "What documents are required for government job applications?",
      answer:
        "Requirements vary by recruitment, but Aadhaar Card, photograph, educational certificates, mobile number and email ID are commonly required."
    }
  ]
},

 {
  slug: "e-shram-card",
  title: "E-Shram Card",
  icon: "💳",

  shortDescription:
    "E-Shram Card registration, updates, download and unorganized worker assistance services.",

  overview:
    "We assist unorganized sector workers with E-Shram Card registration, profile updates, card downloads and other labour welfare scheme-related services.",

  availableServices: [
    "New E-Shram Registration",
    "E-Shram Card Download",
    "Profile Update",
    "Mobile Number Update",
    "Occupation Update",
    "Labour Welfare Scheme Assistance"
  ],

  requiredDocuments: [
    {
      title: "General Documents",
      documents: [
        "Aadhaar Card",
        "Bank Passbook",
        "Mobile Number"
      ]
    }
    
  ],

  processingTime: "10–20 Minutes",

  faqs: [
    {
      question: "Who can apply for an E-Shram Card?",
      answer:
        "Workers in the unorganized sector such as labourers, drivers, domestic workers, street vendors, farmers and self-employed individuals can apply."
    },
    {
      question: "Is a bank account required for E-Shram registration?",
      answer:
        "Yes, bank account details are generally required during the registration process."
    },
    {
      question: "What documents are required for E-Shram Card registration?",
      answer:
        "Aadhaar Card, bank account details and a mobile number linked with Aadhaar are generally required."
    }
  ]
},

  
  {
  slug: "property-id",
  title: "Property ID",
  icon: "🏠",

  shortDescription:
    "Property ID creation, correction, ownership verification and property record assistance services.",

  overview:
    "We assist property owners with Property ID creation, corrections, ownership verification, record updates and other property-related online services.",

  availableServices: [
    "New Property ID Registration",
    "Property ID Correction",
    "Property Ownership Verification",
    "Property Record Update",
    "Property ID Search",
    "Property Tax Assistance",
    "Property Details Download"
  ],

  requiredDocuments: [
    {
      title: "Identity Proof",
      documents: [
        "Aadhaar Card",
        "Family ID (PPP)"
      ]
    },
    {
      title: "Address Proof",
      documents: [
        "Electricity Bill",
      ]
    },
    {
      title: "Property Documents",
      documents: [
        "Registry / Sale Deed and Property Tax Receipt",
      ]
    },
  ],

  processingTime: "15–30 Minutes",

  faqs: [
    {
      question: "What is a Property ID?",
      answer:
        "A Property ID is a unique identification number assigned to a property for record management and property tax purposes."
    },
    {
      question: "Can I correct details in my Property ID?",
      answer:
        "Yes, we assist with Property ID corrections and record updates."
    },
    {
      question: "What documents are required for Property ID services?",
      answer:
        "Generally, Aadhaar Card, property ownership documents, electricity bill and a mobile number are required."
    }
  ]
},


  {
  slug: "ticket-booking",
  title: "Ticket Booking",
  icon: "🎫",

  shortDescription:
    "Train, bus, flight and travel ticket booking services.",

  overview:
    "We assist customers with booking train, bus and flight tickets, checking seat availability, ticket cancellations and travel-related services.",

  availableServices: [
    "Train Ticket Booking",
    "Bus Ticket Booking",
    "Flight Ticket Booking",
    "Ticket Cancellation",
    "PNR Status Check",
    "Seat Availability Check",
    "Ticket Printout"
  ],

  requiredDocuments: [
    {
      title: "general Documents",
      documents: [
        "Aadhaar Card"
      ]
    }
  ],

  processingTime: "5–15 Minutes",

  faqs: [
    {
      question: "Can you book train tickets?",
      answer:
        "Yes, we provide train ticket booking services, including Tatkal ticket booking subject to availability."
    },
    {
      question: "Can I cancel my booked ticket?",
      answer:
        "Yes, we can assist with ticket cancellations according to the rules of the service provider."
    },
    {
      question: "What documents are required for ticket booking?",
      answer:
        "Generally, a valid ID proof and mobile number are required. Additional details may be needed depending on the mode of travel."
    }
  ]
},

 {
  slug: "pension-services",
  title: "Pension Services",
  icon: "👴",

  shortDescription:
    "Haryana pension application, verification and pension-related assistance services.",

  overview:
    "We assist eligible Haryana residents with pension applications, document verification, status tracking and other pension-related services provided by the Government of Haryana.",

  availableServices: [
    "Old Age Samman Allowance",
    "Widow Pension",
    "Disability Pension",
    "Pension Status Check",
    "Pension Update Services"
  ],

  requiredDocuments: [
    {
      title: "Identity Proof",
      documents: [
    "Family ID (PPP)",
    "Aadhaar Card",
      ]
    },
    {
      title: "Address Proof",
      documents: [
    "Voter ID Card",
    "Haryana Residence Proof",
      ]
    },
    {
      title: "DOB Proof",
      documents: [
    "Birth Certificate",
    "School Marksheet/Certificate",
    "Voter ID Card",
    "Indian Passport"
      ]
    }
  ],

  processingTime: "1-2 Months (Subject to Government Verification & Approval)",

  faqs: [
   {
  question: "Who is eligible for Haryana pension schemes?",
  answer:
    "The applicant must be a resident of Haryana and the annual family income should be less than ₹3,00,000. Additional eligibility conditions may apply depending on the pension scheme."
},
    {
      question: "Is Family ID mandatory for Haryana pension services?",
      answer:
        "Yes, Family ID (PPP) is generally required for pension applications in Haryana."
    },
    {
      question: "What documents are required for pension applications?",
      answer:
        "Family ID, Aadhaar, Voter ID Card, Haryana residence proof and bank account details are generally required."
    }
  ]
},

{
  slug: "ration-card",
  title: "Ration Card",
  icon: "🍚",

  shortDescription:
    "Haryana Ration Card eligibility check, verification and related assistance services.",

  overview:
  "We assist Haryana residents with Family ID verification and ration card-related services. After a new Family ID is created, government income verification may take approximately 5–6 months. Families with a verified annual income below ₹1.80 lakh may become eligible for a Ration Card.",
  
  availableServices: [
    "Ration Card Eligibility Check",
    "Income Verification Assistance",
    "Ration Card Status Check",
    "Ration Card Download"
  ],

  eligibility: [
    "Applicant must be a resident of Haryana",
    "Annual family income should be less than ₹1.80 lakh",
    "Eligibility is determined through Family ID (PPP) and government verification"
  ],

  requiredDocuments: [
    {
      title: "Identity Proof",
      documents: [
        "Family ID (PPP)",

      ]
    }
  ],

  processingTime:
    "5–6 Months (Subject to Government Verification & Approval)",

  faqs: [
    {
      question: "Who is eligible for a Haryana Ration Card?",
      answer:
        "Families with an annual income below ₹1.80 lakh and meeting Haryana Government eligibility criteria may qualify for a ration card."
    },
    {
      question: "Do I need to apply separately for a ration card?",
      answer:
        "In many cases, eligible families are identified through Family ID (PPP) records and government verification processes."
    },
    {
      question: "Is Family ID mandatory?",
      answer:
        "Yes, Family ID (PPP) is generally required for eligibility assessment and verification."
    },
    {
  question: "When does a family become eligible for a Haryana Ration Card?",
  answer:
    "After a new Family ID (PPP) is created, income verification is carried out by the Government. This process may take approximately 5–6 months. Families with a verified annual income below ₹1.80 lakh may become eligible for a Ration Card."
}
  ]
}
]




export const service = [
    {
  slug: "aadhaar-card",
  title: "Aadhaar Card",
  icon: "🪪",

  badges: [
    "UIDAI Related",
    "CSC Assistance",
    "Same day Service"
  ],

  shortDescription: "...",
  overview: "...",
},

 {slug: "pan-card",
  title: "PAN Card",
  icon: "🪪",

  badges: [
    "Income tax Service",
    "CSC Assistance",
    "online Application"
  ],

  shortDescription: "...",
  overview: "...",
},
    
]