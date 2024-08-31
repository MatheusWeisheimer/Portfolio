import './Home.css'

function Home({darkMode}) {
    const picture = require('../../assets/images/me.jpg');

    return (
        <section className="home" name="home">
            <h2 className={`heading ${darkMode ? "darkmode_heading" : "lightmode_heading"}`}>
                Hi, my name is<br></br>Matheus Weisheimer<br></br>Web developer
            </h2>
            <div 
                className="profile_picture" 
                style={{
                    backgroundImage: `url(${picture})`, 
                }}>
            </div>
        </section>
    )
}

export default Home