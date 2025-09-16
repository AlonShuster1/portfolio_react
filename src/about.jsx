
import "./about.css"
import UncontrolledExample from "../partials/carousel"


function About() {
    

    return(
    <div className="aboutpage">
    <div className="presentation" id="pres">
    
        <div className='briefabout'>
            <h1>Alon Shuster</h1>
           
            <h3>third year CS student at Sami Shamoon college</h3>
            <p>
                I enjoy solving problems through code and learning new technologies,
                starting from this website, and you can find more on the 'projects' tab.
                I'm currently looking for my first developer role to apply my skills in real projects.
            </p>

        </div>
       
    </div>

    <div className="projects" id="proj">
        <h1>Projects preview</h1>
        <UncontrolledExample/>
    </div>

    <div className="contact" id="cont">
        <h1>Contact me</h1>
        <p>Email me at <label style={{color:'#E07A5F', textDecoration:'underline'}}>alonshusterr@gmail.com</label></p>
        <p>Currently developing another project, so I’ll get back to you quickly.</p>
        
    </div>

    </div>

    )

}
    



export default About;