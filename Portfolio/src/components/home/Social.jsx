import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/deepak078" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiLinkedin />
            </a>
            <a href="https://github.com/DeepakThakur10" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
        </div>
    );
}

export default Social;