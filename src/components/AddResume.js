import { PlusSquare } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/addresume.css';

function AddResume() {

    const [showDialogMsg, setDialogMsg] = useState(false);
    const [getResumeTitle, setGetResumeTitle] = useState('');
    const navigate = useNavigate();

    //need to connect resume title with resume table

    const handleSkipQuestion = () => {
        if (getResumeTitle.trim() === '')
            return alert("Please enter the resume title.")
        //database part can be added
        navigate('/choosetemplate');
    };

    const continueToQuestion = () => {
        if (getResumeTitle.trim() === '')
            return alert("Please enter the resume title.")
        //database part can be added to store name
        navigate('/question');
    };

    return (
        <>
            <div className='add-resume-wrapper'>
                <div className='add-resume-box' onClick={() => setDialogMsg(true)}>
                    <PlusSquare />
                </div>
            </div>

            {showDialogMsg && (
                <div className='dialog-container'>
                    <div className='dialog-box'>
                        <h3>Your resume title.</h3>
                        <input
                            type="text"
                            placeholder="e.g. Resume1"
                            value={getResumeTitle}
                            onChange={(e) => setGetResumeTitle(e.target.value)}
                        />
                        <div className="dialog-buttons">
                            <button onClick={continueToQuestion}>Continue with Questions</button>
                            <button onClick={handleSkipQuestion}>Skip to Templates</button>
                            <button onClick={() => setDialogMsg(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default AddResume;