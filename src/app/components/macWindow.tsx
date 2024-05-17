import React, { useState } from 'react';
import './macWindow.css';
import AsciiName from './asciiArt';
import { TypeAnimation } from 'react-type-animation';
import { GREETING, BIO, DEV1, DEV2, DEV3, DEV4, DEV5, DEV6, DEV7, DEV9, DEVFINAL, LINKS } from '../constants/string';
import Modal from './Modal';
import LinkedInSvg from './LinkedIn';
import GitHubSvg from './GitHub';
import EmailIcon from './GmailMe';
import PdfIcon from './PdfIcon';
import AsciiBanner from '../constants/banner';
const pdf = '/TaylorDouglasHutchensResume2024.pdf';

interface WindowProps {
    greeting: string;
    name: string;
} 

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
                    <AsciiBanner />
                    <AsciiName />
                    <AsciiBanner />
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