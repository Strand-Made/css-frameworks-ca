import React from 'react'
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
const ContactForm = () => {
    return (
        <Form className="contact-form" >
            <Form.Group controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <label htmlFor="basic-url">Your vanity URL</label>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text className="website__input d-none d-md-block" id="basic-addon3">
        Website
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>


        <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Allow us to sell your personal details
to whomever we want" />
  </Form.Group>
  <Button className="contact-form__submit-btn" block variant="primary" type="submit">
    Submit
  </Button>
      </Form>
    )
}

export default ContactForm
