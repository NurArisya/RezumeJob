import '../../css/editTemp.css';
import '../../css/templatepicker.css';

function ExperienceForm({ experienceList, setExperienceList }) {
    const handleChange = (index, field, value) => {
        const updatedList = [...experienceList];
        updatedList[index][field] = value;
        setExperienceList(updatedList);
    };

    const handleAddExperience = () => {
        setExperienceList([
            ...experienceList,
            { company: '', role: '', startDate: '', endDate: '', description: '' }
        ]);
    };

    const handleRemoveExperience = (index) => {
        const updatedList = [...experienceList];
        updatedList.splice(index, 1);
        setExperienceList(updatedList);
    };

    return (
        <div>
            <h2>Experience</h2>
            {experienceList.map((exp, idx) => (
                <div key={idx} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                    <label>Company</label>
                    <input type="text" value={exp.company} onChange={(e) => handleChange(idx, 'company', e.target.value)} />

                    <label>Role</label>
                    <input type="text" value={exp.role} onChange={(e) => handleChange(idx, 'role', e.target.value)} />

                    <label>Start Date</label>
                    <input type="text" value={exp.startDate} onChange={(e) => handleChange(idx, 'startDate', e.target.value)} />

                    <label>End Date</label>
                    <input type="text" value={exp.endDate} onChange={(e) => handleChange(idx, 'endDate', e.target.value)} />

                    <label>Description</label>
                    <textarea value={exp.description} onChange={(e) => handleChange(idx, 'description', e.target.value)} />

                    <button type="button" onClick={() => handleRemoveExperience(idx)} style={{ marginTop: '0.5rem' }}>
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" onClick={handleAddExperience}>+ Add More Experience</button>
        </div>
    );
}

export default ExperienceForm;
