import './contact.css'
import TextControlsExample from '../partials/form'




function Contact() {
    return(
        <>
        <div class="personal-card">
            <div className='centered-div'>
                <div className='details'>
                    <h1>Alon Shuster</h1>
                    
                    <p>Computer Science student</p>
                    <h3>Lets work together!</h3>
                    <a href="mailto:alonshusterr@gmail.com"><p id="lets-talk-button">Send me an email</p></a>
                </div>
                <div className='buttonsdiv'>
                    <a className='button' href="https://www.linkedin.com/in/alon-shuster">Linkedin</a>
                    <a className='button' href="https://github.com/AlonShuster1">Github</a>
                    </div>
            </div>
        </div>
        <div className='form'>

        </div>
        </>
    )
    
}

export default Contact;