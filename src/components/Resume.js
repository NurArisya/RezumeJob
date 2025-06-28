import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../css/editTemp.css';
import '../css/templatepicker.css';
import HeaderForm from './form/headerForm';
import SummaryForm from './form/summaryForm';
import ExperienceForm from './form/experienceForm';
import EducationForm from './form/educationForm';
import SkillsForm from './form/skillsForm';
import CertificateForm from './form/certificateForm';
import LanguageForm from './form/languageForm';

function Resume() {
    const navigate = useNavigate();
    const location = useLocation();
    const { template, selectedColor, alignment } = location.state || {};
    const [activeTab, setActiveTab] = useState('template'); // default tab

    const [step, setStep] = useState(0);
    const totalSteps = template?.sections?.length || 0;
    const currentSection = template?.sections?.[step];

    const [fullName, setFullName] = useState(template?.sections.find(s => s.type === 'header')?.name || '');
    const [email, setEmail] = useState(template?.sections.find(s => s.type === 'header')?.email || '');
    const [address, setAddress] = useState(template?.sections.find(s => s.type === 'header')?.address || '');
    const [phone, setPhone] = useState(template?.sections.find(s => s.type === 'header')?.phone || '');
    const [summary, setSummary] = useState(template?.sections.find(s => s.type === 'summary')?.text);
    const [role, setRole] = useState(template?.sections.find(s => s.type === 'experience', 'volunteer')?.text);
    const [company, setCompany] = useState(template?.sections.find(s => s.type === 'experience',)?.text);
    const [startDate, setStartDate] = useState(template?.sections.find(s => s.type === 'experience')?.text);
    const [endDate, setEndDate] = useState(template?.sections.find(s => s.type === 'education')?.text);

    const [experienceList, setExperienceList] = useState(
        template?.sections.find(s => s.type === 'experience')?.list || []
    );

    const [skills, setSkills] = useState(
        template?.sections.find(s => s.type === 'skills')?.list || []
    );

    const [educationList, setEducationList] = useState(
        template?.sections.find(s => s.type === 'education')?.list || []
    );

    const [certifications, setCertifications] = useState(
        template?.sections.find(s => s.type === 'certifications')?.list || []
    );

    const [languagesList, setLanguagesList] = useState(
        template?.sections.find(s => s.type === 'language')?.list || []
    );

    const renderFormSection = () => {
        const section = currentSection;
        if (!section) return <p>No section available.</p>;

        switch (section.type) {
            case 'header':
                return (
                    <HeaderForm
                        fullName={fullName}
                        setFullName={setFullName}
                        email={email}
                        setEmail={setEmail}
                        address={address}
                        setAddress={setAddress}
                        phone={phone}
                        setPhone={setPhone}
                    />
                );
            case 'summary':
                return (
                    <SummaryForm
                        summary={summary}
                        setSummary={setSummary}
                    />
                );
            case 'experience':
                return (
                    <ExperienceForm
                        experienceList={experienceList}
                        setExperienceList={setExperienceList}
                    />
                );
            case 'skills':
                return (
                    <SkillsForm
                        skills={skills}
                        setSkills={setSkills}
                    />
                );
            case 'education':
                return (
                    <EducationForm
                        educationList={educationList}
                        setEducationList={setEducationList}
                    />
                );
            case 'certifications':
                return (
                    <CertificateForm
                        certifications={certifications}
                        setCertifications={setCertifications}
                    />
                );
            case 'language':
                return (
                    <LanguageForm
                        languagesList={languagesList}
                        setLanguagesList={setLanguagesList}
                    />
                );
            default:
                return <p>Section "{section.type}" not supported yet.</p>;
        }
    };

    const backTemplatePage = () => {
        navigate("/choosetemplate");
    };

    return (
        <div>
            <nav>
                <div className="navheader">
                    <div className="navlogo">
                        <a href="#" className="logo">Rezume<span>Job</span></a>
                    </div>
                    <ul className="menuBar">
                        <li><a onClick={backTemplatePage} style={{ cursor: "pointer" }}>Back to Template</a></li>
                    </ul>
                </div>
            </nav>

            <div className="editor-container">
                {/**Left Panel */}
                <div className='sidebar-panel'>
                    <Sidebar onSelect={setActiveTab} activeTab={activeTab} />

                </div>

                <div className="main-layout">
                    <div className="resume-preview" style={{ textAlign: alignment }}>
                        {template?.sections.map((section, idx) => {
                            switch (section.type) {
                                case 'header':
                                    return (
                                        <section className="resume-section" key={idx}>
                                            <h1 style={{ color: selectedColor }}>{fullName || section.name}</h1>
                                            <p>{address || section.address} | {phone || section.phone} | {email || section.email}</p>
                                        </section>
                                    );
                                case 'summary':
                                    return (
                                        <section className="resume-section" key={idx}>
                                            <h2 style={{ color: selectedColor }}>Professional Summary</h2>
                                            <p>{summary || section.text}</p>
                                        </section>
                                    );
                                case 'experience':
                                    return (
                                        <section className="resume-section" key={idx}>
                                            <h2 style={{ color: selectedColor }}>Experience</h2>
                                            {experienceList.map((job, i) => (
                                                <div key={i}>
                                                    <strong>{job.role}</strong> – {job.company} ({job.startDate} - {job.endDate})
                                                    <p>{job.description}</p>
                                                </div>
                                            ))}
                                        </section>
                                    );
                                case 'education':
                                    return (
                                        <section className="resume-section" key={idx}>
                                            <h2 style={{ color: selectedColor }}>Education</h2>
                                            {educationList.map((edu, i) => (
                                                <div key={i}>
                                                    <strong>{edu.degree}</strong> – {edu.school} ({edu.startDate} - {edu.endDate})
                                                </div>
                                            ))}
                                        </section>
                                    );
                                case 'skills':
                                    return (
                                        <section className="resume-section" key={idx}>
                                            <h2 style={{ color: selectedColor }}>Skills</h2>
                                            <p>{section.list.join(', ')}</p>
                                        </section>
                                    );
                                case 'certifications':
                                    return (
                                        <section className="resume-section" key={idx}>
                                            <h2 style={{ color: selectedColor }}>Certifications</h2>
                                            <ul>{section.list.map((cert, i) => <li key={i}>{cert}</li>)}</ul>
                                        </section>
                                    );
                                case 'language':
                                    return (
                                        <section className="resume-section" key={idx}>
                                            <h2 style={{ color: selectedColor }}>Languages</h2>
                                            <ul>
                                                {languagesList.map((lang, i) => (
                                                    <li key={i}>{lang.language} – {lang.proficiency}</li>
                                                ))}
                                            </ul>
                                        </section>
                                    );
                                case 'references':
                                    return (
                                        <section className="resume-section" key={idx}>
                                            <h2 style={{ color: selectedColor }}>References</h2>
                                            {section.list.map((ref, i) => (
                                                <div key={i}>
                                                    <p><strong>{ref.name}</strong>, {ref.position} at {ref.company}</p>
                                                    <p>Email: {ref.email} | Phone: {ref.phone}</p>
                                                </div>
                                            ))}
                                        </section>
                                    );
                                case 'project':
                                    return (
                                        <section className="resume-section" key={idx}>
                                            <h2 style={{ color: selectedColor }}>Projects</h2>
                                            {section.list.map((proj, i) => (
                                                <div key={i}>
                                                    <strong>{proj.title}</strong>
                                                    <p>{proj.description}</p>
                                                </div>
                                            ))}
                                        </section>
                                    );
                                case 'volunteer':
                                    return (
                                        <section className="resume-section" key={idx}>
                                            <h2 style={{ color: selectedColor }}>Volunteer Experience</h2>
                                            {section.list.map((vol, i) => (
                                                <div key={i}>
                                                    <strong>{vol.role}</strong> – {vol.organization} ({vol.startDate} - {vol.endDate})
                                                    <p>{vol.description}</p>
                                                </div>
                                            ))}
                                        </section>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>

                <div className="form-editor">
                    {renderFormSection()}
                    {/* Navigation buttons */}
                    <div className="form-navigation">
                        {step > 0 && <button onClick={() => setStep(step - 1)}>Previous</button>}
                        {step < totalSteps - 1 && <button onClick={() => setStep(step + 1)}>Next</button>}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Resume;