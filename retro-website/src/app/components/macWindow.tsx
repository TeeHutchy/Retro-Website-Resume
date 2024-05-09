import React from 'react';
import './macWindow.css';
import AsciiName from './asciiArt';

interface WindowProps {
    title: string;
    // Add other props if needed
} 

const MacWindow: React.FC<{ windowProps: WindowProps }> =  ({ windowProps }) => {
    return (
        <div className="mac-window">
            <div className="mac-title-bar">
                <div className="mac-close-button"></div>
                <div className="mac-minimize-button"></div>
                <div className="mac-maximize-button"></div>
            </div>
            <div className="mac-content">
                <AsciiName />
                {windowProps.title}
            </div>
        </div>
    );
};

export default MacWindow;