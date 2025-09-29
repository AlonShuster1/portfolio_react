import { NavLink } from 'react-router-dom';
import aboutIcon from '../src/assets/about.svg';
import projectIcon from '../src/assets/projects.svg';
import dev1Icon from '../src/assets/dev1.svg';
import contactIcon from '../src/assets/contact.svg';
import './header.css'




function Header(){

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    
    };
    return(
        

        
        <header>
        <div className="header">
            <div className="welcomeheader">
                <NavLink className="headerbtn" id="welcomebtn" to="/" onClick={scrollToTop}>
                    <img className="headerimg" src={dev1Icon}  alt="dev"/>
                    <label className="headertext">Welcome</label>
                </NavLink>

            </div>
            <div className="routeheader">
                
                <NavLink className="headerbtn" to="/" onClick={scrollToTop}>
                    <img className="headerimg" src={aboutIcon} alt="about"/><label className="headertext">about</label>
                </NavLink>
                
                <NavLink className="headerbtn" to="/projects" onClick={scrollToTop}>
                    <img className="headerimg" src={projectIcon} alt="proj"/><label className="headertext">projects</label>
                </NavLink>
                
                <NavLink className="headerbtn" to="/contact" onClick={scrollToTop}>
                    <img className="headerimg" src={contactIcon} alt="contact"/><label className="headertext">contact</label>
                </NavLink>
            </div>
        </div>
    </header>

        

    )
}

export default Header;