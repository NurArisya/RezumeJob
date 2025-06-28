import React from 'react';
import '../../css/editTemp.css';

function SummaryForm({ summary, setSummary }) {
    return (
        <div className="input-field-section">
            <h2>Summary</h2>

            <div className="form-group">
                <label>Professional Summary</label>
                <textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Write your professional summary..."
                    rows={5}
                />
            </div>
        </div>
    );
}

export default SummaryForm;
