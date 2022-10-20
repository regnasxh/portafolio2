import "./index.css"
//import icon1 from "../../assets/images/icon1.png"
//import icon2 from "../../assets/images/icon2.png"
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

export default function Touch() {
    return (
        <div className="theme_container">
            <Reveal triggerOnce={true} keyframes={fade_top}>

                <div className="touch_container" id="contact">
                    <div className="touch_content">
                        <h1>Contact</h1>
                        <p>My inbox is always open so feel free to contact me on one of my social networks where I will send you a message back!</p>
                        <div className="icons_container">
                            <button onClick={() => window.open('https://www.linkedin.com/in/francesco-aliatis-74ab361aa/', '_blank')}>Linkedin</button>
                            <button onClick={() => window.open('https://www.kaggle.com/francescoaliatis', '_blank')}>Kaggle</button>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}