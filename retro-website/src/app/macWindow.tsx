import React from 'react';
import './macWindow.css';

interface windowProps {
    title: string;
    // Add other props if needed
} 

const MacWindow: React.FC<{ windowProps: windowProps }> =  ({ windowProps }) => {
    return (
        <div className="mac-window">
            <div className="mac-title-bar">
                <div className="mac-close-button"></div>
                <div className="mac-minimize-button"></div>
                <div className="mac-maximize-button"></div>
            </div>
            <div className="mac-content">
                {windowProps.title}
            </div>
        </div>
    );
};

export default MacWindow;