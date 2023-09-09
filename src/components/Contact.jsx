import React from "react";
import Headers from "./Header";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div>
            <Headers></Headers>
            <div className="gradient"></div>

            <section className="Wall-of-wonder">
                <div className="wall">
                    <h2>Additional contact</h2>

                    <article className="reverse">
                        <div className="text">
                            <p className="black-box">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        style={{ width: '100px', marginRight: '10px' }}
                                        src="https://i.imgur.com/xr7SZZX.png"
                                        className="footer-email links"
                                        alt="email"
                                    />
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                        <a style={{color: 'white'}} href="mailto:dicky5217@gmail.com">dicky5217@gmail.com</a>
                                        <br/>
                                        <a style={{color: 'white'}} href="mailto:dsosa.webdev@gmail.com">dsosa.webdev@gmail.com</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        style={{ width: '100px', marginRight: '10px' }}
                                        src="https://i.imgur.com/mep29VZ.png"
                                        className="footer-email links"
                                        alt="email"
                                    />
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                        <strong>+ 502 4156 3618</strong>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <div className="gradient"></div>
            <Footer></Footer>
        </div>
    )
}
export default Contact

/*
                    
*/