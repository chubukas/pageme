import * as emailjs from "emailjs-com";

const sendMessage = async (data) => {
  const { name, email, phone, message } = data;

  let mm = `${message.message}<br/> <br/>  From ${name.name} <br/> You Can Call Me With ${phone.phone}`;

  let templateParams = {
    from_name: email.email,
    to_name: "Chukwuebuka",
    subject: `Bussiness Message`,
    message_html: mm,
  };
  await emailjs
    .send(
      "gmail",
      "template_1Vt2KCbD",
      templateParams,
      "user_J5mQZV3e8uztfavKr6qb1"
    )
    .then((d) => {
      alert("Your Message was sent Successful !!!");
    })
    .catch((e) => {
      alert("Your Message was not sent.. Please try again");
    });
};

export default sendMessage;
