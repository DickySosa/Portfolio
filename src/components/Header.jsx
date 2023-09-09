import React from "react";
import { useNavigate } from "react-router-dom";

const Headers = () => {
    const navigate = useNavigate()

    const handleNavigation = (path) =>{
        navigate(path)
    }
    return (
        <nav className="about-me">
            <ul>
                <li>
                    <h1>
                        <a className="io links">
                            <img
                                className="chip"
                                src="https://www.pngmart.com/files/4/Chip-Transparent-PNG.png"
                                alt="chip"
                            />
                            Dicky Sosa
                        </a>
                    </h1>
                </li>
                <li><a className="projects links" onClick={() => handleNavigation('/')}>Projects</a></li>
                <li><a className="about links" onClick={() => handleNavigation('/about-me')}>About</a></li>
                <li><a className="aditionalContacts links" onClick={() => handleNavigation('/contact')}>Contact</a></li>
                <li>
                    <a className="linkedin io links" href="https://www.linkedin.com/in/dicky-sosa-4308b5272/" target="_blank">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                            alt="linkedIn"
                        />
                    </a>
                </li>
                <li>
                    <a className="github links" href="https://github.com/DickySosa" target="_blank">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="Github"
                        />
                    </a>
                </li>
                <li>
                    <a className="resumen links" href="https://drive.google.com/file/d/1GQ_TiZzUnPL2TLXFC4uM0CtsdWCganNL/view?usp=sharing" target="_blank">
                        <button className="res-btn">Resume</button>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default Headers;