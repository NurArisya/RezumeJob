import React, { useState } from 'react';
import '../css/questionstyle.css';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});

    const questions = [
        {
            id: 1,
            text: 'How long have you been working?',
            key: "experience",
            options: ['No Experience', 'Less than 3 years', '3-5 years', '5-10 years', 'More than 10 years']
        },
        {
            id: 2,
            text: 'What is your current career level?',
            key: "career",
            options: ['Student', 'Experienced Worker', 'Unemployed', 'Career Change', 'Freelancer']
        },
        {
            id: 3, //students
            text: 'Which one do you prefer to highlight the most?',
            key: "highlight",
            options: [
                'Leadership & Volunteerism Experience',
                'Projects',
                'Award and Certifications',
                'Experience'
            ]
        }
    ];

    // Handle when a user clicks an answer
    const handleOptionsSelect = (option) => {
        const displayQuestion = questions[currentQuestion];
        const key = currentQuestion.key;

        // Save the answer
        setAnswers(prev => {
            const updated = { ...prev, [key]: option };

            let skipQuestion = currentQuestion + 1;

            if (displayQuestion.id === 2 && option !== 'Student') {
                // Skip question 3 if not a student
                skipQuestion = questions.length;
            }

            if (skipQuestion < questions.length) {
                setCurrentQuestion(skipQuestion);
            } else {
                console.log("Final Answers:", updated);
                navigate('/choosetemplate', { state: updated });
            }

            return updated;
        });
    };

    // Get the current question to show
    const displayQuestion = questions[currentQuestion];

    return (
        <div className="questionnaire-container">
            <h2>{displayQuestion.text}</h2>

            <div className="options">
                {displayQuestion.options.map((option, index) => (
                    <button key={index} onClick={() => handleOptionsSelect(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Questions;
