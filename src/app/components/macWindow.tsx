import React from 'react';
import './macWindow.css';
import AsciiName from './asciiArt';
import { TypeAnimation } from 'react-type-animation';
import AsciiBanner from '@/app/constants/banner';
import { GREETING, BIO, DEV1, DEV2, DEV3, DEV4, DEV5, DEV6, DEV7, DEV9, DEVFINAL, LINKS } from '../constants/string';
const pdf = '/TaylorDouglasHutchensResume2024.pdf';
const banner = AsciiBanner;

interface WindowProps {
    greeting: string;
    name: string;
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
              <div>
                <AsciiName />
              </div>
            
            <TypeAnimation 
            speed={40} 
            omitDeletionAnimation={true}
            sequence={[ 
                GREETING + "\n" + BIO, 500,
                DEV2, 500,
                DEV3, 500,
                DEV4, 500,
                DEV5, 500,
                DEV6, 500,
                DEV7, 500,
                DEV9, 500,
                DEVFINAL, 500,
                DEVFINAL +  "\n" + LINKS , 500,
                ]} 
            style={{ 
                fontSize: '1rem',
                display: 'inline-block/block',
                whiteSpace: "pre-line" }} />

            
                <embed
                    style={{
                            width: '100%',
                        height: '100%',
                    }}
                    type='application/pdf'
                    src={pdf} />


                

            </div>
        </div>
    );
};

export default MacWindow;