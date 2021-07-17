import * as emailjs from "emailjs-com";
import { init } from 'emailjs-com';

import { FormInputs } from "./formFunctions"

init("user_B10y4AnYRCdGsnbZJGoYw");

export const SendMessage = async (data: FormInputs) => {

  const { FullName, PhoneNumber, Email, Topic, Message } = data;

  let templateParams = {
    reply_to: Email,
    from_name: FullName,
    subject: Topic,
    message: Message,
    phone: PhoneNumber
  };

  await emailjs
    .send(
      "service_kn4my95",
      "template_qhdnszg",
      templateParams
    )
    .then((d) => {
      alert("Your Message was sent Successful !!!");
    })
    .catch((e) => {
      alert("Your Message was not sent.. Please try again");
    });
};

