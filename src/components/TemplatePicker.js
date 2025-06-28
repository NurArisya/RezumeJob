import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import '../css/templatepicker.css';

import temp1 from "../data/temp1.json";
import temp2 from "../data/temp2.json";
import temp3 from "../data/temp3.json";
import temp4 from "../data/temp4.json";
import temp5 from "../data/temp5.json";
import temp6 from "../data/temp6.json";
import temp7 from "../data/temp7.json";
import temp8 from "../data/temp8.json";
import TemplateCard from './TemplateCard';

function TemplatePicker() {
    const navigate = useNavigate();
    const location = useLocation();
    const userAnswers = location.state || {}; // Get answers from router state

    const colorPalette = [
        '#3498db', // blue
        '#e74c3c', // red
        '#2ecc71', // green
        '#9b59b6', // purple
        '#efa6ff', // soft purple
        '#f1c40f', // yellow
        '#1abc9c', // teal
        '#e67e22', // orange
        '#34495e'  // dark blue
    ];

    const [selectedColor, setSelectedColor] = useState('#3498db'); // default blue
    const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(null);
    const [alignment, setAlignment] = useState('left');
    const [filteredTemplates, setFilteredTemplates] = useState([]);

    const allTemplates = [
        temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8
    ];

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const handleChooseTemplate = () => {
        if (selectedTemplateIndex !== null) {
            navigate('/editresume', {
                state: {
                    template: filteredTemplates[selectedTemplateIndex],
                    selectedColor,
                    alignment
                }
            });
        } else {
            alert("Please select a template first.");
        }
    };

    const backDashboardPage = () => {
        navigate("/dashboard");
    };

    useEffect(() => {
        let filtered = [];
        if (userAnswers.career === 'Student') {
            filtered = [temp2, temp6, temp7];
        } else if (userAnswers.experience === 'More than 10 years') {
            filtered = [temp1, temp3, temp4];
        } else if (userAnswers.career === 'Freelancer') {
            filtered = [temp5, temp8];
        } else {
            filtered = allTemplates;
        }
        setFilteredTemplates(filtered);
    }, [userAnswers]);

    return (
        <>
            <header>
                <nav>
                    <div className="navheader">
                        <div className="navlogo">
                            <a href="#" className="logo">RezumeJob</a>
                        </div>
                        <ul className="menuBar">
                            <li><a onClick={backDashboardPage} style={{ cursor: "pointer" }}>Back to Dashboard</a></li>
                            <li><a href="#">Profile</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/*template layout*/}
            <div className="template-picker-layout">
                {/*template picker*/}
                <div className="template-preview">
                    <h3>Your Resume Templates</h3>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        {filteredTemplates.map((template, index) => (
                            <TemplateCard
                                key={index}
                                templateData={template}
                                selectedColor={selectedColor}
                                alignment={alignment}
                                onClick={() => setSelectedTemplateIndex(index)}
                                isSelected={selectedTemplateIndex === index}
                            />
                        ))}
                    </div>
                </div>

                {/*color picker*/}
                <div className="style-panel">
                    <h3>Choose a Template Color</h3>
                    <div className="color-palette">
                        {colorPalette.map((color, index) => (
                            <div
                                key={index}
                                className={`color-swatch ${selectedColor === color ? 'selected' : ''}`}
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColor(color)}
                                title={color}
                            />
                        ))}
                    </div>

                    <div className="alignment-picker">
                        <h3 style={{ marginBottom: '20px' }}>Section Alignment</h3>
                        <button className={alignment === 'left' ? 'active' : ''} onClick={() => setAlignment('left')}>Left</button>
                        <button className={alignment === 'center' ? 'active' : ''} onClick={() => setAlignment('center')}>Center</button>
                    </div>

                    <button className="chooseBtn" onClick={handleChooseTemplate}>
                        Choose Template
                    </button>
                </div>
            </div>
        </>
    )

};

export default TemplatePicker;