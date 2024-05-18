import React, { useState } from 'react';
import './macWindow.css';
import AsciiName from './asciiArt';
import Modal from './Modal';
import LinkedInSvg from './LinkedIn';
import GitHubSvg from './GitHub';
import EmailIcon from './GmailMe';
import PdfIcon from './PdfIcon';
import AsciiBanner from '../constants/banner';
import TypingBio from './TypingText';
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

                <div className='typingBio'>
                    <TypingBio />
                </div>
                


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