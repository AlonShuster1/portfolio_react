import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form action="mailto:alonshusterr@gmail.com" method='GET' encType='text/plain'>
        <p>send me a message!</p>
        <div class="d-flex gap-3">
            <Form.Group className="flex-fill mb-3" controlId="contactName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" required/>
      </Form.Group>

      <Form.Group className="flex-fill mb-3" controlId="contactEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name='Email' required />
      </Form.Group>

        </div>
         
       <Form.Group className="mb-3" controlId="contactEmail">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" name="subject" placeholder="whats this about?" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="contactSubject">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="message" rows={3} placeholder='write your message' />
      </Form.Group>
      <Button type="submit">Send</Button>
    </Form>
  );
}

export default TextControlsExample;