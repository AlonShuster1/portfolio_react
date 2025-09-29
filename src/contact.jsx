import './contact.css'
import TextControlsExample from '../partials/form'
import ContactUs from '../partials/contactform'
import externalimg from '../src/assets/external.svg'




function Contact() {
    return(
        <>
        <div className='form_grid'>
            <div className='form_information'>
            <h3>Lets work together!</h3>
            <p>Looking for a junior developer? 
                Send me a quick message, I’d be happy to chat.</p>
            <div className='buttons'>
                <a className='button' href="mailto:alonshusterr@gmail.com"><span>Email </span><img src={externalimg} />  </a>
                <a className='button' href="https://www.linkedin.com/in/alon-shuster"><span>LinkedIn </span><img src={externalimg} />  </a>
                <a className='button' href="https://github.com/AlonShuster1"><span>GitHub </span><img src={externalimg} />  </a>
            </div>
            
           
        </div>
        <div className='form_div'>
            <ContactUs />
        </div>

        </div>

        <div style={{margin:"400px 50px"}}>

        </div>
        
        
       
            
       
       
        </>
    )
    
}

export default Contact;