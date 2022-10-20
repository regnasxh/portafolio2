import "./index.css"
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


const fade_top = keyframes`
from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100px, 0);
    transform: translate3d(0, 100px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;
export default function About() {
    return (
        <div className="theme_container">
            <Reveal triggerOnce={true} keyframes={fade_top}>

                <div className="about_container" id="about">
                    <div className="about_content">
                        <h1>About me</h1>
                        <p>Hello! My name is Francesco, since I was young I’ve always been passionate about the world of technology
                            and the information that data can give us. I like to analyze data but above all that it has an attractive
                            design for a better understanding of the graphs and the information. Some tools that I use for data analysis
                            are <span> Excel</span>,<span> SQL</span>,<span> Power BI</span>, <span>Python </span>and their libraries. In Data science I work with <span>Python</span>  to create machine
                            learning models to identify patterns and make predictions. </p>
                    </div>
                </div>
            </Reveal >
        </div>

    )
}