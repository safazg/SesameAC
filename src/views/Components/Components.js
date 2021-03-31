import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link, Route, Switch } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
// import LandingPage from "../../views/LandingPage/LandingPage";

import styles from "assets/jss/material-kit-react/views/components.js";

import logo from "../../assets/img/default-white.png";
import "./Components.css";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Sesame AC"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                {" "}
                <img
                  style={{
                    width: "40%",
                    paddingTop: "420px",
                  }}
                  src={logo}
                  alt="logo"
                ></img>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <SectionBasics /> */}
        {/* <SectionNavbars /> */}
        <SectionTabs />
        {/* <SectionPills /> */}
        {/* <SectionNotifications />
        <SectionTypography />
        <SectionJavascript /> */}
        <SectionCarousel />
        {/* <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
        {/* <LandingPage /> */}
      </div>
      <Footer />
    </div>
  );
}
