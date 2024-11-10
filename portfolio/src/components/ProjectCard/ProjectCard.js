import './ProjectCard.css'

import ColoredIcon from '../icons/ColoredIcon'
import UncoloredIcon from '../icons/UncoloredIcon'

function ProjectCard(props) {
    const darkMode = props.darkMode
    const {image, title, desc, tecs, livePreview, viewCode} = props

    const tecIcons = tecs.map(tec => (
        <ColoredIcon key={tec} name={`Colored${tec}`} width="1.5rem"/>
    ))

    const imagePreview = require(`../../assets/images/${image}.jpg`);

    return (
        <div className={`card_container ${darkMode ? "darkmode_background" : "box_shadow"}`}>
            <div style={ {backgroundImage: `url(${imagePreview})`}} className='project_thumb'></div>
            <div className='card_content'>
                <h3 className={`${darkMode ? "darkmode_heading" : "lightmode_heading"}`}>
                    {title}
                </h3>
                <p className={`${darkMode ? "darkmode_content" : "lightmode_content"}`}>
                    {desc}
                </p>
                <div className='tecnologies_container'>
                    {tecIcons}
                </div>
                <div className='goto_container'>
                    {
                        livePreview &&
                        <div className={`goto_inner_container ${darkMode ? "darkmode_heading" : "lightmode_heading"}`}>
                            <UncoloredIcon name="UncoloredChain" width="1.3rem" darkMode={darkMode}/>
                            <a href={livePreview} target='blank'>Live Preview</a>
                        </div>
                    }
                    <div className={`goto_inner_container ${darkMode ? "darkmode_heading" : "lightmode_heading"}`}>
                        <UncoloredIcon name="UncoloredGithub" width="1.3rem" darkMode={darkMode}/>
                        <a href={viewCode} target='blank'>View Code</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectCard