import React from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
const ContactForm = () => {
    return (
        <Form>
            <Form.Group controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group controlId="formGroupWebsite">
          <Form.Label>Website</Form.Label>
          <Form.Control className="form-group__website" type="text"/>
        </Form.Group>


        <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
    <Form.Check className="form__checkbox" type="checkbox" label="Allow us to sell your personal details
to whomever we want" />
  </Form.Group>
  <Button block variant="primary" type="submit">
    Submit
  </Button>
      </Form>
    )
}

export default ContactForm
