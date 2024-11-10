import './Projects.css'
import projectsData from '../../utils/projectsData'

import ProjectCard from "../ProjectCard/ProjectCard"

function Projects({darkMode}) {
    const projectEls = projectsData.map(project => (
        <ProjectCard 
            key={project.name} 
            darkMode={darkMode}
            image={project.image}
            title={project.title}
            desc={project.desc}
            tecs={project.tecs}
            livePreview={project.livePreview}
            viewCode={project.viewCode}
        />
    ))

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
                {projectEls}
            </div>
        </section>
    )
}

export default Projects