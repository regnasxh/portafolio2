import "./index.css"
import img1 from '../../assets/images/p1.png'
import img2 from '../../assets/images/p2.png'
import img3 from '../../assets/images/p3.png'
import img4 from '../../assets/images/p4.png'
import { useNavigate } from "react-router-dom";
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

export default function Projects() {
    const navigator = useNavigate();
    var data = [
        {
            heading: 'Global indicators',
            lable: 'Power BI',
            text: 'A dashboard with the analysis of the global population, infant mortality and life expectancy by region.',
            img: img1,
            url: "/global-indicators",
            ispowerbi: true
        },
        {
            heading: 'Human resources report',
            lable: 'Power BI',
            text: 'Report where the total of the employers is analyzed as well as their salaries and their performance.',
            img: img2,
            url: "/human-resources-report",
            ispowerbi: true
        },
        {
            heading: 'financial analysis',
            lable: 'Power BI',
            text: 'An interactive financial analysis where dax was applied to create measures such as profit and expected balance.',
            img: img3,
            url: "/financial-analysis",
            ispowerbi: true
        },
        {
            heading: 'Stroke prediction',
            lable: 'Python',
            text: 'An ML model to predict patient strokes by applying feature selection and comparing several supervised learning models.',
            img: img4,
            url: "https://www.kaggle.com/code/francescoaliatis/stroke-prediction-plotly-5-ml-acc-95",
            ispowerbi: false
        }
    ]

    const handleLink = (bool, url) => {
        if (bool) {
            navigator(url, { replace: true })
        }
        else {
            window.open(url, '_blank')
        }
    }


    return (
        <div className="projects_container_wrapper">

            <div className="theme_container">
                <div className="projects_container" id="projects">
                    <h1 className="p_main_head">Projects</h1>
                    <Reveal triggerOnce={true} keyframes={fade_top}>

                        <div className="projects_content">
                            {data.map((v, i) => {
                                return (

                                    <div id={i} className="sub_projects_wrapper" onClick={() => handleLink(v.ispowerbi, v.url)} >

                                        <div className="sub_projects" >

                                            <h1>{v.heading}</h1>
                                            <h3>{v.lable}</h3>
                                            <p>{v.text}</p>
                                            <div>
                                                <img src={v.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Reveal>
                </div>
            </div>

        </div >

    )
}