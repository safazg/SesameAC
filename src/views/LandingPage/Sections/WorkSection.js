import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";
// @material-ui/icons
import validator from "email-validator";
//init emailJs
import { init } from "emailjs-com";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
//Translation
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  init("user_cEBR1bdP4kWTt8KXUvCSl");
  //Translation
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const classes = useStyles();
  //name email message states errors

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const [emailText, setEmailText] = useState("Your email");

  //name email message states

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const funcSend = () => {
    setNameErr(false);
    setEmailErr(false);
    setMessageErr(false);
    setEmailText("Your email");
    if (!name) {
      setNameErr(true);
    } else if (!email) {
      setEmailErr(true);
    } else if (!message) {
      setMessageErr(true);
    } else if (!validator.validate(email)) {
      setEmailText("Invalid email");
      setEmailErr(true);
    } else {
      emailjs
        .send("service_b79l5mw", "template_buwcccb", { name, email, message })
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (err) {
            console.log("FAILED...", err);
          }
        );
      setEmail("");
      setMessage("");
      setName("");
    }
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            {language === "an" ? "GET IN TOUCH" : "CONTACTEZ NOUS"}
          </h2>
          <h4 className={classes.description}>
            {language === "an"
              ? "Email us with any questions or inquiries or call +216 75276828. We would be happy to answer your questions and set up a meeting with you."
              : "Envoyez-nous un courriel pour toute question ou demande de renseignements ou composez le +216 75276828. Nous serons heureux de répondre à vos questions et d’organiser une rencontre avec vous."}
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  error={nameErr}
                  val={name}
                  func={setName}
                  labelText={language === "an" ? "Your name" : "Votre nom"}
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  error={emailErr}
                  val={email}
                  func={setEmail}
                  labelText={emailText}
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                error={messageErr}
                val={message}
                func={setMessage}
                labelText={language === "an" ? "Your Message" : "Votre Message"}
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />

              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" onClick={funcSend}>
                  {language === "an" ? "Send Message" : "Envoyer"}
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
