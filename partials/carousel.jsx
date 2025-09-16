import Carousel from 'react-bootstrap/Carousel';
import projects from '../src/assets/projectslist.jsx'
import './carousel.css'

function UncontrolledExample() {
  return (
    <section className='carousel-block'>
    <Carousel interval={null}>
        {projects.map(project=>(
         
           

            <Carousel.Item key={project.id}>
              <div className='carousel-content'>
                <div className='carousel-text'>
                <h3>{project.title}</h3>
                

              </div>
                <div className='carousel-image'>
                  <img src={project.photo} alt="projectimg"/>
                </div>
              </div>
              
            </Carousel.Item>
           
        ))}
    </Carousel>
    </section>
  );
}

export default UncontrolledExample;




