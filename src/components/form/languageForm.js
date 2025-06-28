// src/components/forms/LanguageForm.js
import '../../css/editTemp.css';
import '../../css/templatepicker.css';

function LanguageForm({ languagesList, setLanguagesList }) {
    const handleChange = (index, field, value) => {
        const updatedList = [...languagesList];
        updatedList[index][field] = value;
        setLanguagesList(updatedList);
    };

    const handleAddLanguage = () => {
        setLanguagesList([
            ...languagesList,
            { language: '', proficiency: '' }
        ]);
    };

    const handleRemoveLanguage = (index) => {
        const updatedList = [...languagesList];
        updatedList.splice(index, 1);
        setLanguagesList(updatedList);
    };

    return (
        <div>
            <h2>Languages</h2>
            {languagesList.map((lang, idx) => (
                <div key={idx} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                    <label>Language</label>
                    <input
                        type="text"
                        value={lang.language}
                        onChange={(e) => handleChange(idx, 'language', e.target.value)}
                    />

                    <label>Proficiency</label>
                    <input
                        type="text"
                        value={lang.proficiency}
                        onChange={(e) => handleChange(idx, 'proficiency', e.target.value)}
                    />

                    <button type="button" onClick={() => handleRemoveLanguage(idx)} style={{ marginTop: '0.5rem' }}>
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" onClick={handleAddLanguage}>+ Add More Language</button>
        </div>
    );
}

export default LanguageForm;
