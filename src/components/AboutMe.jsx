import React from "react";
import Headers from "./Header";
import Footer from "./Footer";

const AboutMe = () => {
    return (
        <div>
            <Headers></Headers>
            <div class="gradient"></div>

            <section class="Wall-of-wonder">
                <div class="wall">
                    <h2>About me</h2>
                    <article>
                        <div class="text">
                            <h4></h4>
                            <h3>Quick Bio</h3>
                            <p class="black-box">
                            Passionate and results-driven Software Developer experienced in HTML, 
                            CSS, JavaScript, React, Node.js, and Express.js. Proficient in building 
                            responsive and dynamic user interfaces using HTML, CSS, and JavaScript. 
                            Skilled in utilizing React to develop interactive and engaging frontend 
                            components. Experienced in efficient data management using SQL and PostgreSQL, 
                            ensuring data integrity and security. Proficient in Git, GitHub, and Bash scripting 
                            for version control and collaborative development. Strong problem-solving abilities 
                            and attention to detail. Effective communicator and team player. Fluent in English 
                            (90% proficiency).
                            </p>
                            <p>My Technologies:</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>TypeScript</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>SQL</li>
                                <li>PostgreSQL</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Git</li>
                                <li>GitHub</li>
                            </ul>
                        </div>
                        <img
                            src="https://i.imgur.com/EPmzQpi.jpg"
                            alt="Dicky Sosa"
                        />
                    </article>
                </div>
            </section>
            <div class="gradient"></div>
            <Footer></Footer>
        </div>
    )
}
export default AboutMe