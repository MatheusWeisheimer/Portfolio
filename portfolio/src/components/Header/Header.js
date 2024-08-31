import { Link, Element, animateScroll as scroll } from 'react-scroll'
import ColoredIcon from '../icons/ColoredIcon'
import UncoloredIcon from '../icons/UncoloredIcon'
import './Header.css'

function Header({darkMode, switchDarkMode}) {
    return (
        <header className='header'>
            <div className="darkMode_switch" onClick={() => switchDarkMode()}>   
                <ColoredIcon name={darkMode ? "ColoredSun" : "ColoredMoon"} width="2.5rem"/>
                <span className={darkMode ? "darkmode_heading" : "lightmode_heading"}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </span>
            </div>
            <nav>
                <ul className={`nav_options ${darkMode ? "darkmode_content" : "lightmode_content"}`}>
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
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
                <a href="https://github.com/MatheusWeisheimer" target="blank">
                    <UncoloredIcon name="UncoloredGithub" width="1.87rem" darkMode={darkMode}/>
                </a>
                <a href="https://www.linkedin.com/in/matheus-weisheimer-30325a242/" target="blank">
                    <UncoloredIcon name="UncoloredLinkedin" width="1.87rem" darkMode={darkMode}/>
                </a>
            </div>
        </header>
    )
}

export default Header