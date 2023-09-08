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
                    <h2>Projects i´m proud of</h2>
                    <article>
                        <div class="text">
                            <h4>Latest Project</h4>
                            <h3>Wall of wonder</h3>
                            <p class="black-box">
                                Description of the project. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed ut risus mauris. Nulla facilisi. Donec at
                                molestie lorem. Nam interdum velit sit amet purus tristique, sit amet
                                rhoncus velit ultrices. Donec laoreet ultrices ligula, sed interdum
                                ante pulvinar nec.
                            </p>
                            <p>My favorite Technologies to use:</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <img
                            src="https://cdn.britannica.com/53/212553-050-E4A98496/Baseball-bat.jpg"
                            alt="Paper"
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