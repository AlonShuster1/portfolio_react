import Carousel from 'react-bootstrap/Carousel';
import projects from '../src/assets/projectslist.jsx'
import '../src/app.css'

function UncontrolledExample() {
  return (
    <section className='carousel-block'>
    <Carousel interval={null}>
        {projects.map(project=>(
            <Carousel.Item key={project.id}>
                <img src={project.photo} alt="projectimg"/>
                <Carousel.Caption>
                    <h3>{project.title}</h3>
                    <p>{project.details}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
    </section>
  );
}

export default UncontrolledExample;




