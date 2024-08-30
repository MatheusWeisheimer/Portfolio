import './TechStack.css'

import ColoredIcon from "../icons/ColoredIcon"

function TechStack({darkMode}) {
    const ICON_WIDTH = "5.5rem"

    return(
        <section name="tech_stack">
            <div className="heading_content_container">
                <h2 className={`heading ${darkMode ? "darkmode_heading" : "lightmode_heading"}`}>
                    Tech Stack
                </h2>
                <p className={`content ${darkMode ? "darkmode_content" : "lightmode_content"}`}>
                    Tecnologies I have studied recently
                </p>
            </div>
            <div className="tech_container">
                <ColoredIcon name="ColoredHtml" width={ICON_WIDTH}/>
                <ColoredIcon name="ColoredCss" width={ICON_WIDTH}/>
                <ColoredIcon name="ColoredJs" width={ICON_WIDTH}/>
                <ColoredIcon name="ColoredReactjs" width={ICON_WIDTH}/>
                <ColoredIcon name="ColoredC" width={ICON_WIDTH}/>
                <ColoredIcon name="ColoredJava" width={ICON_WIDTH}/>
                <ColoredIcon name="ColoredPython" width={ICON_WIDTH}/>
            </div>
        </section>
    )
}

export default TechStack