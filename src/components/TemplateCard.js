import React, { useState } from 'react';
import '../css/templatecard.css';

const TemplateCard = ({ templateData, selectedColor, alignment, onClick, isSelected }) => {
    const { style, sections } = templateData;

    const getSectionByType = (type) => sections.find(sec => sec.type === type);

    const header = getSectionByType("header");
    const summary = getSectionByType("summary");
    const experience = getSectionByType("experience");
    const education = getSectionByType("education");
    const skills = getSectionByType("skills");
    const certifications = getSectionByType("certifications");
    const languages = getSectionByType("language");
    const references = getSectionByType("references");
    const projects = getSectionByType("projects");
    const volunteer = getSectionByType("volunteer");

    return (
        <div
            className="template-card"
            onClick={onClick}
            style={{
                '--selected-color': selectedColor,
                border: isSelected
                    ? `2px solid ${selectedColor}`
                    : `2px dashed #aaa`,
                backgroundColor: isSelected ? '#f9f9f9' : '#fff',
                boxShadow: isSelected ? '0 0 8px rgba(0,0,0,0.05)' : 'none',
            }}
        >

            <h2 style={{ color: selectedColor, textAlign: alignment }}>{header?.name}</h2>

            {alignment === 'center' && (
                <div style={{
                    width: '100%',
                    margin: '0 auto 10px auto',
                    borderBottom: `2px solid ${selectedColor}`
                }}></div>
            )}

            <div
                style={{
                    textAlign: alignment,
                    fontSize: '12px',
                    marginBottom: '10px',
                }}
            >
                <span><strong>Address:</strong> {header?.address}</span>
                <span style={{ margin: '0 10px' }}>|</span>
                <span><strong>Phone:</strong> {header?.phone}</span>
                <span style={{ margin: '0 10px' }}>|</span>
                <span><strong>Email:</strong> {header?.email}</span>
            </div>



            {summary && (
                <>
                    <h3 style={{ color: selectedColor }}>Summary</h3>
                    <p>{summary.text}</p>
                </>
            )}

            {experience?.list && (
                <>
                    <h3 style={{ color: selectedColor }}>Experience</h3>
                    {experience.list.map((exp, idx) => (
                        <div key={idx}>
                            <p><strong>{exp.role}</strong> at {exp.company}</p>
                            <p style={{ fontStyle: "italic", float: "right" }}>{exp.startDate} – {exp.endDate}</p>
                            <p>{exp.description}</p>

                        </div>
                    ))}
                </>
            )}

            {education?.list && (
                <>
                    <h3 style={{ color: selectedColor }}>Education</h3>
                    {education.list.map((edu, idx) => (
                        <div key={idx}>
                            <p><strong>{edu.degree}</strong> - {edu.school}</p>
                            <p style={{ fontStyle: "italic", float: "right" }}>{edu.startDate} – {edu.endDate}</p>
                        </div>
                    ))}
                </>
            )}

            {skills?.list && (
                <>
                    <h3 style={{ color: selectedColor }}>Skills</h3>
                    <ul>
                        {skills.list.map((skill, idx) => <li key={idx}>{skill}</li>)}
                    </ul>
                </>
            )}

            {certifications?.list && (
                <>
                    <h3 style={{ color: selectedColor }}>Award and Certifications</h3>
                    <ul>
                        {certifications.list.map((certificate, idx) => <li key={idx}>{certificate}</li>)}
                    </ul>
                </>
            )}

            {projects?.list && (
                <>
                    <h3 style={{ color: selectedColor }}>Projects</h3>
                    {projects.list.map((proj, idx) => (
                        <div key={idx}>
                            <p><strong>{proj.title}</strong> — {proj.tools}</p>
                            <p>{proj.description}</p>
                        </div>
                    ))}
                </>
            )}

            {volunteer?.list && (
                <>
                    <h3 style={{ color: selectedColor }}>Leadership & Volunteerism Experience</h3>
                    {volunteer.list.map((vol, idx) => (
                        <div key={idx}>
                            <p><strong>{vol.organization}</strong>, {vol.role}</p>
                            <p style={{ fontStyle: "italic", float: "right" }}>{vol.startDate} – {vol.endDate}</p>
                            <p>{vol.description}</p>
                        </div>
                    ))}
                </>
            )}

            {languages?.list && (
                <>
                    <h3 style={{ color: selectedColor }}>Languages</h3>
                    <ul>
                        {languages.list.map((lang, idx) => (
                            <li key={idx}>{lang.language} — {lang.proficiency}</li>
                        ))}
                    </ul>
                </>
            )}

            {references?.list && (
                <>
                    <h3 style={{ color: selectedColor }}>References</h3>
                    {references.list.map((ref, idx) => (
                        <div key={idx}>
                            <p><strong>{ref.name}</strong>, {ref.position}</p>
                            <p>{ref.company}</p>
                            <p>Email: {ref.email}</p>
                            <p>Phone: {ref.phone}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default TemplateCard;
