import './Projects.css'

import ProjectCard from "../ProjectCard/ProjectCard"

function Projects({darkMode}) {
    return(
        <section name="projects">
            <div className="heading_content_container">
                <h2 className={`heading ${darkMode ? "darkmode_heading" : "lightmode_heading"}`}>
                    Projects
                </h2>
                <p className={`content ${darkMode ? "darkmode_content" : "lightmode_content"}`}>
                    My Personal Projects
                </p>
            </div>
            <div className="projects">
                <ProjectCard darkMode={darkMode}/>
                <ProjectCard darkMode={darkMode}/>
                <ProjectCard darkMode={darkMode}/>
            </div>
        </section>
    )
}

export default Projects