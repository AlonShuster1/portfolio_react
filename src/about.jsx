import "./about.css"
// import Carousel from "../partials/carousel"


function About() {
    return(
    <div className="aboutpage">
    <div className="presentation" id="pres">
    
        <div className="brief">
            <h1>Alon Shuster</h1>
            <h2>Full-Stack Developer</h2>
            <p>I'm a third year CS student at Sami Shamoon college.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>
        <div className="features">

        </div>
    </div>

    <div className="projects" id="proj">
        <h2>Projects preview</h2>
        {/* <Carousel/> */}
    </div>

    <div className="contact" id="cont">
        <h2>Contact me!</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>

    </div>

    )

}
    



export default About;