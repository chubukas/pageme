import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

import sendMessage from "../sendMessage";

const FormComponent = (props) => {
  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [message, setmessage] = useState();
  const [phone, setphone] = useState();

  const updateData = (e) => {
    e.preventDefault();
    let value = e.target.value;
    e.target.name === "name" && setname({ name: value });
    e.target.name === "email" && setemail({ email: value });
    e.target.name === "message" && setmessage({ message: value });
    e.target.name === "phone" && setphone({ phone: value });
  };

  const sendData = (e) => {
    e.preventDefault();
    let data = {
      email,
      name,
      message,
      phone,
    };
    sendMessage(data);
  };

  return (
    <div>
      <Form onSubmit={(e) => sendData(e)}>
        <FormGroup>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            onChange={(e) => updateData(e)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Contact Email"
            onChange={(e) => updateData(e)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Enter Your Contact Phone number"
            onChange={(e) => updateData(e)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="message"
            id="message"
            placeholder="Enter Your Message"
            onChange={(e) => updateData(e)}
            required
          />
        </FormGroup>
        <Button color="primary">Send Message</Button>
      </Form>
    </div>
  );
};

export default FormComponent;
