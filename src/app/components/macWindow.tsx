import React, { useState } from 'react';
import './macWindow.css';
import AsciiName from './asciiArt';
import { TypeAnimation } from 'react-type-animation';
import { GREETING, BIO, DEV1, DEV2, DEV3, DEV4, DEV5, DEV6, DEV7, DEV9, DEVFINAL, LINKS } from '../constants/string';
import Modal from './Modal';
import LinkedInSvg from './LinkedIn';
import GitHubSvg from './GitHub';
import EmailIcon from './GmailMe';
const pdf = '/TaylorDouglasHutchensResume2024.pdf';

interface WindowProps {
    greeting: string;
    name: string;
} 

const PdfIcon = ({ onClick }) => (
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16" onClick={onClick} style={{ cursor: 'pointer', padding: '5px' }}>
  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
);

const MacWindow: React.FC<{ windowProps: WindowProps }> =  ({ windowProps }) => {
    const [showModal, setShowModal] = useState(false);
    const [openLinkedIn] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
    
    const handleCloseModal = () => {
      setShowModal(false);
    };

    return (
        <div className="mac-window">
            <div className="mac-title-bar">
                <div className="mac-close-button"></div>
                <div className="mac-minimize-button"></div>
                <div className="mac-maximize-button"></div>
            </div>
            <div className="mac-content">

                <div className='asciiArtName'>
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

                <div className='footer'>
                    <PdfIcon onClick={handleOpenModal}/>
                    <LinkedInSvg />
                    <GitHubSvg />
                    <EmailIcon />

          
                    <Modal show={showModal} handleClose={handleCloseModal}>
                    <h2>Resume</h2>
                        <embed
                            style={{
                                width: '100%',
                                height: '100vh',
                            }}
                            type='application/pdf'
                            src={pdf} />
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default MacWindow;