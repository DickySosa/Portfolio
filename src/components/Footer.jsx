import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <h2>Dicky Sosa</h2>
            <div className="img-container">

                <a className="github links" href="https://www.linkedin.com/in/dicky-sosa-4308b5272/" target="_blank">
                <img
                    className="linkedin links"
                    src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                    alt="linkedIn"
                />
                </a>

                <a className="github links" href="https://github.com/DickySosa" target="_blank">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="Github"
                    />
                </a>

              
                
            </div>
            <p><small>&copy; 2023 Dicky Sosa. All rigths reserved</small></p>

        </footer>

    )
}
export default Footer;