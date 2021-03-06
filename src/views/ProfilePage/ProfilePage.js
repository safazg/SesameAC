import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

//Translation
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Sesame AC"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <h2 className={classes.title}>
            {" "}
            {language === "an" ? "Here is our team" : "Voici notre ??quipe"}
          </h2>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={team1} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Gigi Hadid
                    <br />
                    <small className={classes.smallTitle}>Model</small>
                  </h4>
                  <CardBody>
                    <span className={classes.description}>
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some <a href="#pablo">links</a> for people to be able
                      to follow them outside the site.
                    </span>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-instagram"} />
                    </Button>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-facebook"} />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={team2} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Christian Louboutin
                    <br />
                    <small className={classes.smallTitle}>Designer</small>
                  </h4>
                  <CardBody>
                    <span className={classes.description}>
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some <a href="#pablo">links</a> for people to be able
                      to follow them outside the site.
                    </span>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-linkedin"} />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={team3} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Kendall Jenner
                    <br />
                    <small className={classes.smallTitle}>Model</small>
                  </h4>
                  <CardBody>
                    <span className={classes.description}>
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some <a href="#pablo">links</a> for people to be able
                      to follow them outside the site.
                    </span>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-instagram"} />
                    </Button>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-facebook"} />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
