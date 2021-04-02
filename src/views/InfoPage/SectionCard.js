import React from "react";
import helpline from "assets/img/helpline.jpg";
import service from "assets/img/service.jpg";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import "views/InfoPage/styleInfo.css";

//Translation
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SectionCard = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  return (
    <GridContainer
      justify="center"
      style={{ marginTop: "20%", marginLeft: "23%" }}
    >
      <GridItem xs={12} sm={12} md={4}>
        <div className="card">
          <div className="image">
            <img src={service} />
          </div>
          <div className="details">
            <div className="center">
              <h1>
                {" "}
                {language === "an"
                  ? "CUSTOMER SERVICE"
                  : "SERVICE À LA CLIENTÈLE"}
                <br />
              </h1>
              <p>
                {language === "an"
                  ? "When it comes to insurance, you want to turn to a business you can trust. That’s why so many people choose Sesame AC. Contact us to see how we can meet all of your requirements. We’re always here for you - day or night."
                  : "Contactez-nous pour voir comment nous pouvons répondre à toutes vos exigences. Nous sommes toujours là pour vous - jour et nuit."}
              </p>
            </div>
          </div>
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <div className="card">
          <div className="image">
            <img src={helpline} />
          </div>
          <div className="details">
            <div className="center">
              <h1>
                {language === "an" ? "24/7 HELPLINE" : "ASSISTANCE 24/7"}
                <br />
              </h1>
              <p>
                {language === "an"
                  ? "Our years of experience and expertise allowed us to know more easily how to meet your unique needs. As a top Insurance and consulting company, we make sure our clients only receive the very best, including our exceptional 24/7 Helpline."
                  : "Nos années d’expérience et d’expertise nous ont permis de savoir plus facilement comment répondre à vos besoins uniques. En tant         qu’entreprise de gestion et de consulting , nous nous assurons que nos clients ne reçoivent que le meilleur, y compris notre ligne d’assistance exceptionnelle 24/7."}
              </p>
            </div>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
};

export default SectionCard;
