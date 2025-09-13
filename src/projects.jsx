import './projects.css'
import projects from '../public/assets/projectslist'

function Projects() {
    return(
        <div className="projectspage">
            <div className="brief">
                <h1>Projects Page</h1>
                <h2>Projects Page</h2>
                <p>short lorem ipsum graph about my soon to be projects</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div className='projects-showcase'>
                {projects.map((project=>
                    <a href={project.link} key={project.id}>
                        <div className='project-item'>
                            <img src={project.photo} alt="image" />
                            <h1>{project.title}</h1>
                            <p>{project.details}</p>
                        </div>
                    </a>
                ))}

            </div>

    


        </div>
            );
        }

export default Projects;