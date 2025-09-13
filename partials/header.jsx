import { NavLink } from 'react-router-dom';
import aboutIcon from '../public/assets/about.svg';
import projectIcon from '../public/assets/projects.svg';
import devIcon from '../public/assets/about.svg';
import contactIcon from '../public/assets/contact.svg';
import './header.css'

function Header(){
    return(
        <header>
        <div className="header">
            <div className="welcomeheader">
                <a className="headerbtn" href="/">
                    <img className="headerimg" src={aboutIcon} alt="dev"/>
                    <label className="headertext">Welcome</label>
                </a>

            </div>
            <div className="routeheader">
                
                <NavLink className="headerbtn" to="/">
                    <img className="headerimg" src={devIcon} alt="about"/><label className="headertext">about</label>
                </NavLink>
                
                <NavLink className="headerbtn" to="/projects">
                    <img className="headerimg" src={projectIcon} alt="proj"/><label className="headertext">projects</label>
                </NavLink>
                
                <NavLink className="headerbtn" to="/contact">
                    <img className="headerimg" src={contactIcon} alt="contact"/><label className="headertext">contact</label>
                </NavLink>
            </div>
        </div>
    </header>

        

    )
}

export default Header;