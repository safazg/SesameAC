import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


//translation
import { useSelector } from "react-redux";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const language = useSelector((state) => state.language);
  const classes = useStyles();
  return (
    <div className={classes.section} xs={12} sm={12} md={6}>
      <h1 style={{ textAlign: "center", fontSize: "60px", fontWeight: "600" }}>
        {language === "an" ? "About Us" : "À Propos"}
      </h1>
      <p>
        {" "}
        {language === "an"
          ? " Sesame AC offers its clients the best possible protection for all their assistance needs. As a consulting and disaster management company, we are committed to finding the best services for you. Our expert staff has the knowledge to manage everything from the simplest policy to the most complicated package."
          : "Sesame AC offre à ses clients la meilleure protection possible pour tous leurs besoins d’assistance. En tant que société de consultation et gestion des sinistres, nous nous engageons à trouver les meilleurs services pour vous. Notre personnel expert a les connaissances nécessaires pour tout gérer, de la politique la plus simple au package le plus compliqué. "}{" "}
        <br />
        <br />
        {language === "an"
          ? "Contact us to get a free estimate today."
          : "Contactez-nous pour obtenir une estimation gratuite dès aujourd'hui. "}
      </p>
    </div>
  );
}
