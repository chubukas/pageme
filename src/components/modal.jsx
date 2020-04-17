import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import FormComponent from "./form";

const ModalComponent = (props) => {
  const { toggles } = props;

  const [modal, setModal] = useState(toggles);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle} className="bg-warning">
          Contact Me
        </ModalHeader>
        <ModalBody className="bg-warning">
          <FormComponent></FormComponent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalComponent;
