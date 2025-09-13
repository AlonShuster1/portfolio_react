import { NavLink } from 'react-router-dom';
import './header.css'

function Header(){
    return(
        <header>
        <div className="header">
            <div className="welcomeheader">
                <a className="headerbtn" href="/">
                    <img className="headerimg" src="/assets/dev.svg" alt="dev"/>
                    <label className="headertext">Welcome</label>
                </a>

            </div>
            <div className="routeheader">
                
                <NavLink className="headerbtn" to="/">
                    <img className="headerimg" src="public/assets/about.svg" alt="about"/><label className="headertext">about</label>
                </NavLink>
                
                <NavLink className="headerbtn" to="/projects">
                    <img className="headerimg" src="public/assets/projects.svg" alt="proj"/><label className="headertext">projects</label>
                </NavLink>
                
                <NavLink className="headerbtn" to="/contact">
                    <img className="headerimg" src="public/assets/contact.svg" alt="contact"/><label className="headertext">contact</label>
                </NavLink>
            </div>
        </div>
    </header>

        

    )
}

export default Header;