import React from 'react';
import '../../css/editTemp.css';

function SkillsForm({ skills, setSkills }) {
    const updateSkill = (index, value) => {
        const newSkills = [...skills];
        newSkills[index] = value;
        setSkills(newSkills);
    };

    return (
        <div>
            <h2>Skills</h2>
            {skills.map((skill, idx) => (
                <div key={idx}>
                    <input type="text" value={skill} onChange={(e) => updateSkill(idx, e.target.value)} />
                </div>
            ))}
        </div>
    );
}

export default SkillsForm;
