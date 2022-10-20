import "./index.css"
import { HashLink } from 'react-router-hash-link';
import { useState } from "react";
import { IoClose } from 'react-icons/io5'
import { HiMenu } from 'react-icons/hi'



export default function Navbar() {
    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);
    return (
        <>
            <div className="navbar_container_wrapper">
                <div className="navbar_container">
                    <div className="navbar_logo">
                        <h1><HashLink smooth to={'/'}> FRANCESCO</HashLink></h1>
                    </div>
                    <div className="navbar_menu_items">
                        <HashLink smooth to={'/#about'}>About</HashLink>
                        <HashLink smooth to={'/#projects'}>Projects</HashLink>
                        <HashLink smooth to={'/#contact'}>Contact</HashLink>
                    </div>
                </div>
            </div>
            <div className="m_navbar">
                <div className="navbar_logo">
                    <h1><HashLink smooth to={'/'}>FRANCESCO </HashLink></h1>
                </div>
                <div>
                    <span onClick={handleClick}><HiMenu /></span>
                </div>
            </div>
            <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
                <div className="logo order-md-1">
                    <div className="fix-icon text-dark" onClick={handleClick}>
                        <IoClose />
                    </div>
                </div>

                <div className="navbar-nav">
                    <li className="nav-item">
                        <HashLink className="nav-link" onClick={handleClick} smooth to={'/#about'}>About</HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link" onClick={handleClick} smooth to={'/#projects'}>Projects</HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link" onClick={handleClick} smooth to={'/#contact'}>Contact</HashLink>

                    </li>
                </div>
            </div>
        </>

    )
}