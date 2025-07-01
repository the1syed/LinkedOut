// components/CreateJobModal.jsx
import React, { useState, useEffect } from 'react';

// --- Modal Styles ---
const modalStyles = `
/* Ensure high z-index to be on top of everything */
.createjob-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4); /* Darker overlay for more blur visibility */
  backdrop-filter: blur(6px);
  z-index: 2000; /* Higher than Navbar and other content */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.createjob-modal {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.13);
  padding: 32px 28px 28px 28px;
  max-width: 850px;
  width: 95vw;
  font-family: 'Inter', sans-serif;
  z-index: 2001; /* Higher than overlay */
  position: relative;
  border: 2px solid #00aaff22;
  max-height: 90vh; /* Limit height to prevent overflow on small screens */
  overflow-y: auto; /* Allow scrolling if content is too long */
}

.createjob-modal h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
}

.createjob-row {
  display: flex;
  gap: 24px;
  margin-bottom: 18px;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.createjob-field {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 250px; /* Ensure fields have a minimum width */
}

.createjob-field label {
  font-weight: 500;
  margin-bottom: 7px;
  color: #222;
}

.createjob-input, .createjob-select, .createjob-textarea {
  border: 1.5px solid #e0e0e0;
  border-radius: 9px;
  padding: 12px;
  font-size: 1.05rem;
  outline: none;
  margin-bottom: 2px;
  background: #fafbfc;
  transition: border-color 0.2s;
}

.createjob-input:focus, .createjob-select:focus, .createjob-textarea:focus {
  border-color: #00aaff;
}

.createjob-salary-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.createjob-salary-row .createjob-input {
  flex: 1;
}

.createjob-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.createjob-draft, .createjob-publish {
  padding: 13px 32px;
  border-radius: 9px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background 0.2s;
}

.createjob-draft {
  background: #fff;
  border: 1.5px solid #bdbdbd;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
}

.createjob-draft:hover {
  background: #f4f4f4;
}

.createjob-publish {
  background: #00aaff;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.createjob-publish:hover {
  background: #008fcc;
}

/* Close button for the modal */
.modal-close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2.2rem;
  cursor: pointer;
  color: #888;
  line-height: 1;
  padding: 0;
  transition: color 0.2s;
}

.modal-close-button:hover {
  color: #333;
}


/* General body styling to prevent scroll when modal is active */
body.modal-active {
  overflow: hidden;
}

@media (max-width: 900px) {
  .createjob-modal {
    padding: 18px 8px;
    max-width: 99vw;
  }
  .createjob-row {
    flex-direction: column;
    gap: 0;
  }
}
`;

const jobTypes = ['FullTime', 'PartTime', 'Internship', 'Contract'];
const locations = ['Chennai', 'Bangalore', 'Hyderabad', 'Delhi', 'Mumbai'];

export default function CreateJobModal({ onClose }) { // Accept onClose prop
  // Inject styles only once
  useEffect(() => {
    if (!document.getElementById('createjob-modal-style')) {
      const style = document.createElement('style');
      style.id = 'createjob-modal-style';
      style.innerHTML = modalStyles;
      document.head.appendChild(style);
    }
  }, []);

  // Manage body scroll
  useEffect(() => {
    document.body.classList.add('modal-active');
    return () => {
      document.body.classList.remove('modal-active');
    };
  }, []);

  const [form, setForm] = useState({
    title: 'Full Stack Developer',
    company: 'Amazon',
    location: locations[0],
    jobType: jobTypes[0],
    minSalary: '',
    maxSalary: '',
    deadline: '',
    description: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSaveDraft() {
    alert('Draft saved!');
    console.log("Draft Saved:", form);
    onClose(); // Close modal after saving draft
  }

  function handlePublish(e) {
    e.preventDefault();
    alert('Job published!');
    console.log("Job Published:", form);
    
    onClose(); // Close modal after publishing
  }

  return (
    <div className="createjob-modal-overlay">
      <form className="createjob-modal" onSubmit={handlePublish}>
        <button type="button" className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Create Job Opening</h2>
        <div className="createjob-row">
          <div className="createjob-field">
            <label>Job Title</label>
            <input
              className="createjob-input"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Full Stack Developer"
              required
            />
          </div>
          <div className="createjob-field">
            <label>Company Name</label>
            <input
              className="createjob-input"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Amazon"
              required
            />
          </div>
        </div>
        <div className="createjob-row">
          <div className="createjob-field">
            <label>Location</label>
            <select
              className="createjob-select"
              name="location"
              value={form.location}
              onChange={handleChange}
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div className="createjob-field">
            <label>Job Type</label>
            <select
              className="createjob-select"
              name="jobType"
              value={form.jobType}
              onChange={handleChange}
            >
              {jobTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="createjob-row">
          <div className="createjob-field">
            <label>Salary Range</label>
            <div className="createjob-salary-row">
              <input
                type="number"
                className="createjob-input w-1"
                name="minSalary"
                value={form.minSalary}
                onChange={handleChange}
                placeholder="₹ 0"
                min={0}
              />
              <input
                type="number"
                className="createjob-input w-1"
                name="maxSalary"
                value={form.maxSalary}
                onChange={handleChange}
                placeholder="₹ 12,00,00,000"
                min={0}
              />
            </div>
          </div>
          <div className="createjob-field">
            <label>Application Deadline</label>
            <input
              type="date"
              className="createjob-input"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="createjob-field" style={{marginBottom: 0}}>
          <label>Job Description</label>
          <textarea
            className="createjob-textarea"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Please share a description to let the candidate know more about the job role"
            rows={4}
          />
        </div>
        <div className="createjob-actions">
          <button type="button" className="createjob-draft" onClick={handleSaveDraft}>
            Save Draft <span style={{fontSize: '1.2em'}}>&#9660;</span>
          </button>
          <button type="submit" className="createjob-publish">
            Publish &nbsp; <span style={{fontSize: '1.2em'}}>&#187;</span>
          </button>
        </div>
      </form>
    </div>
  );
}
