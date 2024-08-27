import { Link, Element, animateScroll as scroll } from 'react-scroll';
import './Header.css'

function Header() {
    const githubIcon = require("../../assets/images/github_contact.png")
    const linkedinIcon = require("../../assets/images/linkedin_contact.png")

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="tech_stack" smooth={true} duration={500}>
                            Tech Stack
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="contact">
                <a href="https://github.com/MatheusWeisheimer" target="blank"><img className="contact_icon" src={githubIcon} alt="github icon"></img></a>
                <a href="https://www.linkedin.com/in/matheus-weisheimer-30325a242/" target="blank"><img className="contact_icon" src={linkedinIcon} alt="linkedin icon"></img></a>
            </div>
        </header>
    )
}

export default Header