import "./index.css"
import img from "../../assets/images/c.png"
import { HashLink } from "react-router-hash-link"
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fade_left = keyframes`
from {
    opacity: 0;
    -webkit-transform: translate3d(-50px, 0, 0);
    transform: translate3d(-50px, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;
const fade_right = keyframes`
from {
    opacity: 0;
    -webkit-transform: translate3d(50px, 0, 0);
    transform: translate3d(50px, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;

export default function Cover() {
    return (
        <div className="theme_container">

            <div className="cover_container">
                <Reveal triggerOnce={true} keyframes={fade_left}>

                    <div className="cover_content">
                        <h1>Francesco Aliatis</h1>
                        <h2>Data Analytics</h2>
                        <p>A data analyst focused on <span>processing</span>,<span> analyzing</span> and <span>visualizing</span> data for decision making.</p>
                        <HashLink smooth to={"/#contact"}>Contact</HashLink>
                    </div>
                </Reveal>
                <div className="cover_image">
                    <Reveal triggerOnce={true} keyframes={fade_right}>

                        <img src={img} alt="" />
                    </Reveal>

                </div>
            </div>
        </div>

    )
}