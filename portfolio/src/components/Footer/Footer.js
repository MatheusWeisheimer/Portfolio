import './Footer.css'
import {DARKMODE_FILL, LIGHTMODE_FILL} from '../../utils/constants'
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import ColoredIcon from '../icons/ColoredIcon'
import UncoloredIcon from '../icons/UncoloredIcon'

function Footer({darkMode}) {

    return (
        <footer className='footer'>
            <div className="footer_contact">
                <a href="https://github.com/MatheusWeisheimer" target="blank">
                    <UncoloredIcon name="UncoloredGithub" width="1.87rem" darkMode={darkMode}/>
                </a>
                <a href="https://www.linkedin.com/in/matheus-weisheimer-30325a242/" target="blank">
                    <UncoloredIcon name="UncoloredLinkedin" width="1.87rem" darkMode={darkMode}/>
                </a>
            </div>
            <nav>
                <ul className={`footer_nav ${darkMode ? "darkmode_content" : "lightmode_content"}`}>
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
        </footer>
    )
}

export default Footer