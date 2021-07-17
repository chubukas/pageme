

export interface FormInputs {
  FullName: string,
  PhoneNumber: string,
  Email: string,
  Topic: string,
  Message: string
}

export const formInputs = {
  FullName: "",
  PhoneNumber: "",
  Email: "",
  Topic: "",
  Message: ""
}

export interface FormStates {
  fullname: boolean,
  phonenumber: boolean,
  email: boolean,
  topic: boolean,
  message: boolean
}

export const formstates = {
  fullname: false,
  phonenumber: false,
  email: false,
  topic: false,
  message: false
}


export const checkinputs = (inputsData: FormInputs, setformsState: (arg0: FormStates) => void, formsState: FormStates): boolean => {
  let checked: boolean = false;
  for (const inputs in inputsData) {
    if (inputsData[inputs] === "") {
      setformsState({ ...formsState, [inputs.toLocaleLowerCase()]: true })
      checked = true;
      break;
    }
  }
  return checked;
}

