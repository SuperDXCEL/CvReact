import { useState } from 'react'
import './index.css'

function CoolBox({ label, description="Hello", value, onChange }) {
  const [isHovered, setIsHovered] = useState(false);
  
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  
  return (
    <>
      <label className='coolBox'><b>{label}</b>
        <input
          value={value}
          onChange={onChange}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {isHovered && <p>ENTER NOW!</p>}
      </label>
    </>
  ); 
}

function GeneralSection({ formData, handleChange }) {
  return (
    <div className='generalBox'>
      <CoolBox label="Name? " value={formData.name} onChange={handleChange('name')} />
      <CoolBox label="Email? " value={formData.email} onChange={handleChange('email')}/>
      <CoolBox label="Phone Number? " value={formData.phone} onChange={handleChange('phone')}/>
    </div>
  );
}

function EducationalExperience({ formData, handleChange }) {
  return (
    <div className='generalBox'>
      <CoolBox label="School Name?" value={formData.school} onChange={handleChange('school')}/>
      <CoolBox label="Title?" value={formData.title} onChange={handleChange('title')}/>
      <CoolBox label="Date of graduation?" value={formData.graduationDate} onChange={handleChange('graduationDate')}/>
    </div>
  );
}

function PracticalExperience({ formData, handleChange}) {
  return (
    <div className='generalBox'>
      <CoolBox label="Previous companies? " value={formData.company} onChange={handleChange('company')}/>
      <CoolBox label="Position? " value={formData.position} onChange={handleChange('position')}/>
      <CoolBox label="Responsabilities? " value={formData.duration} onChange={handleChange('duration')}/>
    </div>
  );
}

function FullForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    title: "",
    graduationDate: "",
    company: "",
    position: "",
    duration: ""
  });

  const [isEditing, setIsEditing] = useState(true)

  function submitFunction() {
    setIsEditing(false);
  }

  function editFunction() {
    setIsEditing(true);
  }

  // Handle input change
  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
  <>
        <div className='gridContainer'>
          <GeneralSection formData={formData} handleChange={handleChange}></GeneralSection>
          <EducationalExperience formData={formData} handleChange={handleChange}></EducationalExperience>
          <PracticalExperience formData={formData} handleChange={handleChange}></PracticalExperience>
        </div>
        <div className='whiteBackground'>
          <button className='submitButton' onClick={submitFunction}>Submit</button>
        </div>
      {!isEditing && (
        <div className="submissionResult">
          <h3>Form Submitted:</h3>
          <p><b>Name:</b> {formData.name}</p>
          <p><b>Email:</b> {formData.email}</p>
          <p><b>Phone Number:</b> {formData.phone}</p>
          <p><b>School Name:</b> {formData.school}</p>
          <p><b>Title:</b> {formData.title}</p>
          <p><b>Graduation Date:</b> {formData.graduationDate}</p>
          <p><b>Previous Companies:</b> {formData.company}</p>
          <p><b>Position:</b> {formData.position}</p>
          <p><b>Responsibilities:</b> {formData.duration}</p>
          <button onClick={editFunction}>Edit</button>
        </div>
      )}
  </>
  )
}

export default FullForm;