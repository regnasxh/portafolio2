import "./index.css"
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fade_top = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export default function Footer() {
    return (
        <Reveal triggerOnce={true} keyframes={fade_top}>
            <div className="footer_container">
                <p>© 2022 Francesco Aliatis. All Rights Reserved.</p>
            </div>
        </Reveal>

    )
}