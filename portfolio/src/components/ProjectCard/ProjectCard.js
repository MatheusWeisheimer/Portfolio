import './ProjectCard.css'

import ColoredIcon from '../icons/ColoredIcon'
import UncoloredIcon from '../icons/UncoloredIcon'

function ProjectCard({darkMode}) {
    return (
        <div className={`card_container ${darkMode ? "darkmode_background" : "box_shadow"}`}>
            <div className='project_thumb'></div>
            <div className='card_content'>
                <h3 className={`${darkMode ? "darkmode_heading" : "lightmode_heading"}`}>
                    Project title
                </h3>
                <p className={`${darkMode ? "darkmode_content" : "lightmode_content"}`}>
                    Project description
                </p>
                <div className='tecnologies_container'>
                    <ColoredIcon name="ColoredHtml" width="1.5rem"/>
                    <ColoredIcon name="ColoredCss" width="1.5rem"/>
                    <ColoredIcon name="ColoredJs" width="1.5rem"/>
                    <ColoredIcon name="ColoredReactjs" width="1.5rem"/>
                </div>
                <div className='goto_container'>
                    <div className={`goto_inner_container ${darkMode ? "darkmode_heading" : "lightmode_heading"}`}>
                        <UncoloredIcon name="UncoloredChain" width="1.3rem" darkMode={darkMode}/>
                        <a>Live Preview</a>
                    </div>
                    <div className={`goto_inner_container ${darkMode ? "darkmode_heading" : "lightmode_heading"}`}>
                        <UncoloredIcon name="UncoloredGithub" width="1.3rem" darkMode={darkMode}/>
                        <a>View Code</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectCard