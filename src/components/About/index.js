import "./index.scss"

import React from 'react'
import AnimatedLetters from "../AnimatedLetters"

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                        idx={15} />
                </h1>
                <p>I am Mert from Turkey. I finished my bachelor degree in Economics and Administrative Sciences. Coding and developing were always my passion since i was in high school. First, i started my coding journey with Python and than i discovered the world of "web and mobile app development".</p>
                <p>
                    I'm quietly confident, highly curious and always working hard to improve myself in this field. I really love solving problems and struggling with bugs for hours. As said : "Computer says no!"
                </p>
                <p>
                    In the end, if i need to define myself in one sentence that would be a curious, eager to learn, team player, a sports fanatic, family person and tech-obsessed!
                </p>
            </div>
        </div>
    )
}

export default About