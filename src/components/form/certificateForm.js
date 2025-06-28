import React from 'react';

function CertificateForm({ certifications, setCertifications }) {
    const handleChange = (index, value) => {
        const updated = [...certifications];
        updated[index] = value;
        setCertifications(updated);
    };

    const handleAdd = () => {
        setCertifications([...certifications, ""]);
    };

    const handleRemove = (index) => {
        const updated = certifications.filter((_, i) => i !== index);
        setCertifications(updated);
    };

    return (
        <div className="input-field-section">
            <h2>Certifications</h2>
            {certifications.map((cert, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={cert}
                        onChange={(e) => handleChange(index, e.target.value)}
                        placeholder="e.g., AWS Certified Solutions Architect"
                    />
                    <button onClick={() => handleRemove(index)} style={{ marginLeft: '10px' }}>
                        Remove
                    </button>
                </div>
            ))}
            <button onClick={handleAdd}>Add Certification</button>
        </div>
    );
}

export default CertificateForm;
