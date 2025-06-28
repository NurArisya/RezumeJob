import React from 'react';
import { useLocation } from 'react-router-dom';

function PreviewResume() {
    const location = useLocation();
    const { resumeData } = location.state || {};

    return (
        <div>
            <h1 style={{ color: resumeData.selectedColor }}>{resumeData.fullName}</h1>
            <p>{resumeData.address} | {resumeData.phone} | {resumeData.email}</p>
            <h2>Summary</h2>
            <p>{resumeData.summary}</p>

            <h2>Experience</h2>
            {resumeData.experienceList.map((exp, idx) => (
                <div key={idx}>
                    <strong>{exp.role}</strong> – {exp.company} ({exp.startDate} - {exp.endDate})
                    <p>{exp.description}</p>
                </div>
            ))}

            {/* Repeat for education, skills, etc. */}

            <button>Download as PDF</button> {/* optional: implement with html2pdf.js */}
        </div>
    );
}

export default PreviewResume;
