import React from 'react';
import '../../css/editTemp.css';

function EducationForm({ educationList, setEducationList }) {
    const updateEducation = (index, field, value) => {
        const updatedList = [...educationList];
        updatedList[index][field] = value;
        setEducationList(updatedList);
    };

    const handleAddEducation = () => {
        setEducationList([
            ...educationList,
            { school: '', degree: '', startDate: '', endDate: '' }
        ]);
    };

    const handleRemoveEducation = (index) => {
        const updatedList = [...educationList];
        updatedList.splice(index, 1);
        setEducationList(updatedList);
    };


    return (
        <div>
            <h2>Education</h2>
            {educationList.map((edu, idx) => (
                <div key={idx}>
                    <label>School</label>
                    <input type="text" value={edu.school} onChange={(e) => updateEducation(idx, 'school', e.target.value)} />

                    <label>Degree</label>
                    <input type="text" value={edu.degree} onChange={(e) => updateEducation(idx, 'degree', e.target.value)} />

                    <label>Start Date</label>
                    <input type="text" value={edu.startDate} onChange={(e) => updateEducation(idx, 'startDate', e.target.value)} />

                    <label>End Date</label>
                    <input type="text" value={edu.endDate} onChange={(e) => updateEducation(idx, 'endDate', e.target.value)} />
                
                    <button type="button" onClick={() => handleRemoveEducation(idx)} style={{ marginTop: '0.5rem' }}>
                        Remove
                    </button>

                </div>
            ))}
            <button type="button" onClick={handleAddEducation}>+ Add More Education</button>
        </div>
    );
}

export default EducationForm;
