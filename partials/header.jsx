import './header.css'

function Header(){
    return(
        <header>
        <div className="header">
            <div className="welcomeheader">
                <a className="headerbtn" href="/">
                    <img className="headerimg" src="../src/assets/dev.svg" alt="dev"/>
                    <label className="headertext">Welcome</label>
                </a>

            </div>
            <div className="routeheader">
                
                <a className="headerbtn" href="/">
                    <img className="headerimg" src="../src/assets/about.svg" alt="about"/><label className="headertext">about</label>
                    
                </a>
                
                <a className="headerbtn" href="/projects">
                    <img className="headerimg" src="../src/assets/projects.svg" alt="proj"/><label className="headertext">projects</label>
                </a>
                
                <a className="headerbtn" href="/contact">
                    <img className="headerimg" src="../src/assets/contact.svg" alt="contact"/><label className="headertext">contact</label>
                </a>
            </div>
        </div>
    </header>

        

    )
}

export default Header;