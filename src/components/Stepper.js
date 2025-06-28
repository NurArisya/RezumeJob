import React from 'react';

function Stepper() {
    return (
        <div className="stepper">
            <div className="step active">Answer Question</div>
            <div className="step active">Choose Templates</div>
            <div className="step">Edit & Preview Resume</div>
        </div>
    );
}

export default Stepper;
