import React from 'react';
import '../css/editTemp.css';

function Sidebar({ onSelect, activeTab }) {
    return (
        <aside className="sidebar">
            <ul className="menu-links">
                <li className={`nav-link ${activeTab === 'template' ? 'active' : ''}`} onClick={() => onSelect('template')}>
                    <a href="#">
                        <i className='bx bx-templates icon'></i>
                        <span className="text nav-text">Templates</span>
                    </a>
                </li>
                <li className={`nav-link ${activeTab === 'text' ? 'active' : ''}`} onClick={() => onSelect('text')}>
                    <a href="#">
                        <i className='bx bx-font icon'></i>
                        <span className="text nav-text">Text</span>
                    </a>
                </li>
                <li className={`nav-link ${activeTab === 'ai' ? 'active' : ''}`} onClick={() => onSelect('ai')}>
                    <a href="#">
                        <i className='bx bx-brain icon'></i>
                        <span className="text nav-text">AI Write</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;