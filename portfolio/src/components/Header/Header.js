import { Link, Element, animateScroll as scroll } from 'react-scroll'
import UncoloredIcon from '../icons/UncoloredIcon'
import './Header.css'

function Header({darkMode, switchDarkMode}) {
    return (
        <header className='header'>
            <nav>
                <ul className={`nav_options ${darkMode ? "darkmode_content" : "lightmode_content"}`}>
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
                <a href="https://github.com/MatheusWeisheimer" target="blank"><UncoloredIcon name="UncoloredGithub" darkMode={darkMode} width="1.87rem"/></a>
                <a href="https://www.linkedin.com/in/matheus-weisheimer-30325a242/" target="blank"><UncoloredIcon name="UncoloredLinkedin" darkMode={darkMode} width="1.87rem"/></a>
            </div>
        </header>
    )
}

export default Header