import React from "react";

const Body = () => {
    return (
        <div>
            <section className="introduction">
                <p className="name">Hello mi name is <span> Dicky Sosa</span></p>
                <h2>Software Developer</h2> <br />
            </section>

            <div className="gradient"></div>

            <section className="Wall-of-wonder">
                <div className="wall">
                    <h2>Projects i´m proud of</h2>
                    <article>
                        <div className="text">
                            <h4>Latest Project</h4>
                            <h3>Teams Stats App</h3>
                            <p className="black-box">This application is your go-to tool for meticulously tracking 
                            the performance of your baseball team. Whether it's wins or losses, base on balls, strikeouts, 
                            and the individual stats of each player, this app has you covered. Stay on top of your team's 
                            progress, make informed decisions, and strategize for success with this comprehensive baseball 
                            stats tracker.</p>
                            <p>Technologies used include:</p>
                            <ul>
                                <li>Ionic</li>
                                <li>React.js</li>
                                <li>TypeScript</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <img src="https://i.imgur.com/adq9eJM.png" alt="team-stats-app" />
                    </article>


                    <article className="reverse">
                        <div className="text">
                            <h4></h4>
                            <h3>TaskXpert</h3>
                            <p className="black-box"> Stay organized and boost your productivity with ease. Create, edit,
                                delete, and mark tasks as completed effortlessly. Whether it's for work, study, or personal
                                goals, our app simplifies task management, helping you stay on top of your to-do list. Say
                                goodbye to chaos and hello to efficient task tracking! </p>
                            <p>Technologies used include:</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <img src="https://i.imgur.com/x1TJ8SB.png" alt="TaskXpert" />
                    </article>


                    <article>
                        <div className="text">
                            <h4></h4>
                            <h3>ShapeShifters</h3>
                            <p className="black-box">ShapeShifters is an application that allow you Monitor your progress,
                                track sets, weights, and reps effortlessly. Whether you're a beginner or a seasoned gym-goer,
                                Shapeshifters empowers you to transform your fitness journey. Stay motivated, stay accountable,
                                and see the results you desire with Shapeshifters.</p>
                            <p>Technologies used include:</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <img src="https://i.imgur.com/BDdIC6y.png" alt="ShapeShifters" />
                    </article>

                    {/* <article className="reverse">
                    <div className="text">
                        <h4></h4>
                        <h3>AccuStrickeZone</h3>
                        <p className="black-box">Smart Net Automated Strike Zone Detection simplifies tracking and
                            improving your baseball performance. Our app provides instant feedback on whether your pitches
                            land within the correct zone. With real-time analysis and immediate feedback, you can fine-tune
                            your pitching technique and achieve exceptional accuracy. Gain a competitive edge and elevate
                            your game with our pitch tracking app. </p>
                        <p>Technologies used include:</p>
                        <ul>
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                    <img src="https://cdn.britannica.com/53/212553-050-E4A98496/Baseball-bat.jpg" alt="Paper" />
                </article> */}

                    <article className="reverse">
                    <div className="text">
                        <h4></h4>
                            <h3>Wordle</h3>
                            <p className="black-box">fun online word game that challenges your guessing skills 
                            and vocabulary. The goal of the game is to guess a secret five-letter word within a 
                            limited number of attempts. Each time you make an attempt, the game provides you with 
                            clues about the correct letters in the word and their location. Using these clues and 
                            your knowledge of the available letters, you must guess the correct word before running 
                            out of attempts.</p>
                            <p>Technologies used include:</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <img src="https://i.imgur.com/mHix24g.png" alt="Wordle" />
                </article>
                    
                </div>


            </section>

            <div className="gradient"></div>

            <section className="contact">
                <h2>Contact me</h2>
                <p>i´m always interested in hearing about new job opportunities</p>
                <p>
                    <a className="resumen links">
                        <button className="res-btn">Email me</button>
                    </a>
                </p>
            </section>

            <div className="gradient"></div>
        </div>
    )
}
export default Body;