import './Services.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// ===== ADD / EDIT SERVICES HERE =====
const ALL_SERVICES = [
  {slug:'printing-documentation', icon: '🖨️', title: 'Printing & Documentation',desc: 'Photocopy, Printout, Scanning & Lamination Services (A4 & A3 Sizes Available)',category: 'Documentation'},
  { slug:'banking-services', icon: '🏦', title: 'Banking Services',    desc: 'Money Transfer, AEPS Withdrawal, Balance enquiry & Account Opening', category: 'Finance' },
  {slug:'aadhaar-card', icon: '🪪', title: 'Aadhaar Card',  desc: 'Address & Mobile Number Update, Demographic Correction & Aadhaar Print',          category: 'Identity' },
  {slug:'pan-card', icon: '🗂️', title: 'PAN Card',           desc: 'New Application, Correction & Reprint',  category: 'Identity' },
  {slug:'voter-card', icon: '🪪', title: 'Voter Card',       desc: 'New Enrolment, Update, Correction & Print', category: 'Identity' },
  {slug:'passport', icon: '🛂', title: 'Passport',            desc: 'New Application, Renewal & Status Tracking', category: 'Identity' },
  {slug:'certificates', icon: '📜', title: 'Certificates',        desc: 'Income, Caste, Domicile, Birth & Death',         category: 'Certificates' },
  {slug:'pmay-services', icon: '🏠',title: 'PMAY Services',desc: 'Housing Scheme Registration & Application Status',category: 'Government'},
  {slug:'udyam-registration', icon: '🏢',title: 'Udyam Registration',desc: 'MSME Registration & Certificate Download',category: 'Business'},
  { slug:'insurance', icon: '🛡️', title: 'Insurance',           desc: 'Health, Life, Motor Insurance',category: 'Health' },
  { slug:'bill-payments', icon: '💡', title: 'Bill Payments',       desc: 'Electricity, Water, Gas, Mobile & DTH Loan Repayment',          category: 'Utility' },
  { slug:'education-services', icon: '🎓', title: 'Education Services',  desc: "NIOS Admission, Haryana Open School Form Filling, School Admission & Scholarship Applications",            category: 'Education' },
  { slug:'ayushman-bharat', icon: '🏥', title: 'Ayushman Bharat',    desc: 'Card Registration & Hospital Information',        category: 'Health' },
  { slug:'driving-license', icon: '🚗', title: 'Driving License',     desc: 'Apply, Renewal & RC Related Services',           category: 'Transport' },
  { slug:'ration-card', icon: '🍚', title: 'Ration Card', desc: 'New Application, Correction, Member Addition & Status Check', category: 'Identity' },
  { slug:'family-id', icon: '👨‍👩‍👧‍👦', title: 'Family ID/PPP', desc: 'New Registration, Update, Verification & Download', category: 'Identity' },

{ slug:'police-verification', icon: '👮', title: 'Police Verification', desc: 'Character Certificate & Police Verification Services', category: 'Certificates' },

{ slug:'government-jobs', icon: '💼', title: 'Government Jobs', desc: 'Online Forms, Admit Cards & Result Services', category: 'Education' },

{ slug:'e-shram-card', icon: '📄', title: 'E-Shram Card', desc: 'Registration, Update & Download Services', category: 'Labour' },

{ slug:'property-id', icon: '🏡', title: 'Property ID', desc: 'Property Verification, Tax & Related Services', category: 'Property' },

{ slug:'ticket-booking',   icon: '🚄', title: 'Ticket Booking', desc: 'Railway, Bus & Flight Ticket Reservation', category: 'Travel' },

{ slug:'pension-services', icon: '💰', title: 'Pension Services', desc: 'Old Age, Widow & Disability Pension Applications', category: 'Government' },
]




export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const filteredServices = ALL_SERVICES.filter((s) =>
  s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  s.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
  s.category.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <section className="section section-bg">
      <div className="section-title">
        <h2>🛎️ All Our Services</h2>
        <p>Government and private — all essential digital services available here</p>
        <div className="title-line" />
      </div>
<div className="search-box">
  <input
    type="text"
    placeholder="Search services (PAN, Aadhaar, Banking...)"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>
      <div className="services-full-grid">
        {filteredServices.map((s) => (
<div
  key={s.title}
  className="service-full-card"
  onClick={() => navigate(`/services/${s.slug}`)}
>            <span className="service-full-icon">{s.icon}</span>
            <div className="service-full-info">
              <span className="service-category">{s.category}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {filteredServices.length === 0 && (
  <p className='no-service'>No services found</p>
)}
    </section>
  )
}

