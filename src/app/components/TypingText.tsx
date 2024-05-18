import { TypeAnimation } from "react-type-animation"
import { P1, P2, P3 } from "../constants/string"


const TypingBio = () => {
    return (
        <TypeAnimation 
        speed={85} 
        omitDeletionAnimation={true}
        sequence={[ 
            P1, 0,
            P1 + P2, 0,
            P1 + P2 + P3, 0,
            ]} 
        style={{ 
            fontSize: '1rem',
            display: 'inline-block/block',
            whiteSpace: "pre-line" }} />
    );
};

export default TypingBio;