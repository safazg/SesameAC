import React from "react";
import styles from "assets/jss/material-kit-react/views/faq";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

//Translation
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function FAQPage(props) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const [classicModal, setClassicModal] = React.useState(false);
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Sesame AC"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax  image={require("assets/img/question.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container} justify="center">
            <div className={classes.title}>
              <h1 style={{ textAlignLast: "center" }}>
                {" "}
                {language === "an" ? "Questions" : "Questions"}
              </h1>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.title}></div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
