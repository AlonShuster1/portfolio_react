import './projects.css'
import projects from './assets/projectslist'
import { useState, useEffect } from "react";



function Projects() {
    
    return(
        <div className="projectspage">
            <div className='briefprojects'>
                <h1>Projects Page</h1> <br/>
                <p>Here are some things I’ve built</p>
               
            </div>

            <div className='projects-showcase'>
                {projects.map((project=>
                        <div className='project-item'>
                                <a href={project.link} 
                                target="_blank" 
                                className='overlay'/>
                                <img src={project.photo} alt="image" />
                                <h2>{project.title}</h2>
                                <p>{project.details}</p>
                        </div>
                    
               
                   
                ))}

            </div>

    


        </div>
            );
        }

export default Projects;