import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./index.scss"
import MLogo from "../../assets/images/MLogo.png"
import LogoSubtitle from "../../assets/images/logoSub.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={MLogo} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="mertsub" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://www.github.com/mertarinci">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com">
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="skype:mertarinci96">
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar