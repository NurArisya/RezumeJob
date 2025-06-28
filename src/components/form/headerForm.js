import React from 'react';
import '../../css/editTemp.css';

function HeaderForm({ fullName, setFullName, email, setEmail, address, setAddress, phone, setPhone }) {
    return (
        <div className="input-field-section">
            <h2>Personal Info</h2>

            <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Phone</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
        </div>
    );
}

export default HeaderForm;
