import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import React, { FormEvent, useState } from "react"

import { Label, InsideForm, Button } from "./StyleContact";
import { FormInputs, formInputs, FormStates, formstates, checkinputs } from "./formFunctions"
import { SendMessage } from "./sendMessage"


const Form = () => {

  const [inputsData, setInputData] = useState<FormInputs>(formInputs)
  const [Buttonstate, setButtonstate] = useState<boolean>(true)
  const [formsState, setformsState] = useState<FormStates>(formstates)

  const { FullName, PhoneNumber, Email, Topic, Message } = inputsData;
  const { fullname, phonenumber, email, topic, message } = formsState;

  const changeInputs = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    const { name, value } = e.currentTarget;
    setInputData({ ...inputsData, [name]: value })

    FullName !== "" && PhoneNumber !== "" && Email !== "" && Topic !== "" &&
      Message !== "" ? setButtonstate(false) : setButtonstate(true)
  }

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const checked: boolean = checkinputs(inputsData, setformsState, formsState);

    if (!checked) {
      setInputData(formInputs)
      setformsState(formstates)
      SendMessage(inputsData)
    }
  }

  return (
    <>
      <form method="post" className="needs-validation" noValidate onSubmit={submit}>
        <InsideForm>
          <div className="row">
            <div className="form-floating col-md-4 mb-3">
              <input type="text" className="form-control" id="FullName" value={FullName}
                name="FullName" placeholder="name" required onChange={(e) => changeInputs(e)} />
              <Label name="FullName">Full name</Label>
              {fullname && (<small className="text-danger">
                <i>Please type your full name</i>
              </small>)}
            </div>
            <div className="form-floating col-md-4 mb-3">
              <input type="number" className="form-control" id="PhoneNumber" value={PhoneNumber}
                placeholder="name" name="PhoneNumber" required onChange={(e) => changeInputs(e)} />
              <Label name="PhoneNumber">Phone Number</Label>
              {phonenumber && (<small className="text-danger text-sm">
                <i>Please add type your mobiel</i>
              </small>)}
            </div>
            <div className="form-floating col-md-4 mb-3">
              <input type="email" className="form-control" id="Email" value={Email}
                placeholder="name" required name="Email" onChange={(e) => changeInputs(e)} />
              <Label name="Email">Email</Label>
              {email && (<small className="text-danger">
                <i>Please type your email.</i>
              </small>)}
            </div>
          </div>

          <div className="row mt-md-3">
            <div className="form-floating col-md-4 mb-3">
              <select className="form-select fw-bold" id="Topic" value={Topic}
                required name="Topic" onChange={(e) => changeInputs(e)}>
                <option disabled value="">Choose...</option>
                <option className="fw-bold" value="I did like to start a project">
                  I'd like to start a project
                </option>
                <option className="fw-bold" value="I did like to ask a question">
                  I'd like to ask a question
                </option>
                <option className="fw-bold" value="I did like to make a proposal">
                  I'd like to make a proposal
                </option>
              </select>
              <Label name="Topic">Topic</Label>
              {topic && (<small className="text-danger">
                <i>Please  select your topic.</i>
              </small>)}
            </div>
            <div className="form-floating col-md-6">
              <textarea name="Message" id="Message" placeholder="Message" value={Message}
                className="form-control" onChange={(e) => changeInputs(e)} ></textarea>
              <Label name="Message">Your Message</Label>
              {message && (<small className="text-danger">
                <i>Please type your message.</i>
              </small>)}
            </div>
          </div>
        </InsideForm>
        <div className="text-center mt-5">
          <Button disabled={Buttonstate}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <span className="mx-2">Submit form</span>
          </Button>
        </div>
      </form>

    </>
  );
}

export default Form;