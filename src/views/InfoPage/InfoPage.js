import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import styles from "assets/jss/material-kit-react/views/infoPage";

//Translation
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//Images
import info1 from "assets/img/info1.jpg";
import info2 from "assets/img/info2.jpg";
import info3 from "assets/img/info3.jpg";
import info4 from "assets/img/info4.jpg";
import info5 from "assets/img/info5.jpg";

//CSS
import SectionCard from "./SectionCard";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";

export default function InfoPage(props) {
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
      <Parallax small image={require("assets/img/Info.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container} justify="center">
            <div className={classes.title}>
              <h1 style={{ textAlignLast: "center" }}>
                {" "}
                {language === "an" ? "Activity" : "Notre activit??"}
              </h1>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.title}>
                  <h3 style={{ textAlignLast: "center" }}>
                    {" "}
                    {language === "an"
                      ? "Know more about Sesame"
                      : "Savoir d'avantage sur Sesame"}
                  </h3>
                </div>
                <GridContainer style={{ placeContent: "center" }}>
                  <GridItem xs={12} sm={12} md={6} lg={4}>
                    <Button
                      color="primary"
                      block
                      onClick={() => setClassicModal(true)}
                    >
                      <LibraryBooks className={classes.icon} />
                      {language === "an" ? "Open" : "Ouvrir"}
                    </Button>
                    <Dialog
                      classes={{
                        root: classes.center,
                        paper: classes.modal,
                      }}
                      open={classicModal}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={() => setClassicModal(false)}
                      aria-labelledby="classic-modal-slide-title"
                      aria-describedby="classic-modal-slide-description"
                    >
                      <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                      >
                        <IconButton
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={() => setClassicModal(false)}
                        >
                          <Close className={classes.modalClose} />
                        </IconButton>
                        <h4 className={classes.modalTitle}>
                          {language === "an" ? "Social Object" : "Objet Social"}
                        </h4>
                      </DialogTitle>
                      <DialogContent
                        id="classic-modal-slide-description"
                        className={classes.modalBody}
                      >
                        <span>
                          {language === "an"
                            ? "The social object of SESAME is management, study, assistance, technical advice, recourse, regulation and liquidation of claims of any kind and representation of foreign companies in and outside Tunisia and more generally all commercial, financial, directly related securities or real estate, or indirectly to its social object."
                            : "L???objet social de SESAME consiste ?? la gestion, ??tude, assistance, conseil technique, recours, r??glement et liquidation des sinistres de toute nature et repr??sentation des soci??t??s ??trang??res en Tunisie et en dehors de la Tunisie et plus g??n??ralement toutes op??rations commerciales, financi??res, mobili??res ou immobili??res se rattachant directement ou indirectement ?? son objet social."}
                        </span>
                      </DialogContent>
                      <DialogActions className={classes.modalFooter}>
                        <Button
                          onClick={() => setClassicModal(false)}
                          color="danger"
                          simple
                        >
                          {language === "an" ? "Close" : "Fermer"}
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </GridItem>
                </GridContainer>
                <div
                  className="rotate-zoom-out"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "80px",
                    paddingTop: "80px",
                  }}
                >
                  <img
                    style={{
                      // webkitTransform: "rotate(10deg) scale(1.25)",
                      // transform: "rotate(10deg) scale(1.25)",
                      // webkitTransition: ".3s ease-in-out",
                      // transition: ".3s ease-in-out",

                      width: "250px",
                    }}
                    src={info1}
                  ></img>
                  <img
                    style={{
                      // webkitTransform: "rotate(10deg) scale(1.25)",
                      // transform: "rotate(10deg) scale(1.25)",
                      // webkitTransition: ".3s ease-in-out",
                      // transition: ".3s ease-in-out",

                      width: "250px",
                    }}
                    src={info2}
                  ></img>
                  <img
                    style={{
                      // webkitTransform: "rotate(10deg) scale(1.25)",
                      // transform: "rotate(10deg) scale(1.25)",
                      // webkitTransition: ".3s ease-in-out",
                      // transition: ".3s ease-in-out",

                      width: "250px",
                    }}
                    src={info3}
                  ></img>
                  <img
                    style={{
                      // webkitTransform: "rotate(10deg) scale(1.25)",
                      // transform: "rotate(10deg) scale(1.25)",
                      // webkitTransition: ".3s ease-in-out",
                      // transition: ".3s ease-in-out",

                      width: "250px",
                    }}
                    src={info4}
                  ></img>
                  <img
                    style={{
                      // webkitTransform: "rotate(10deg) scale(1.25)",
                      // transform: "rotate(10deg) scale(1.25)",
                      // webkitTransition: ".3s ease-in-out",
                      // transition: ".3s ease-in-out",

                      width: "250px",
                    }}
                    src={info5}
                  ></img>
                </div>
                <div className={classes.container}></div>
                <Tooltip
                  id="tooltip-left"
                  title={
                    language === "an"
                      ? "Negotiate and/or act with third parties and/or national and international insurance companies."
                      : "N??gocier et/ou agir avec des tiers et/ou des compagnies d???assurances nationales et internationales."
                  }
                  placement="left"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button>
                    {language === "an" ? "Negotiation" : "N??gociation"}
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title={
                    language === "an"
                      ? "Collect information. "
                      : "Recueillir des informations."
                  }
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button>
                    {language === "an" ? "Research" : "Recherche"}
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-bottom"
                  title={
                    language === "an"
                      ? "Provide advisory and intermediary services."
                      : "Fournir des services de conseil et d???interm??diation "
                  }
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button>{language === "an" ? "Advisory" : "Conseil"}</Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-right"
                  title={
                    language === "an"
                      ? "Enter into agreements with injured or damaged persons to find an arrangement with national or international insurance companies."
                      : "Conclure des accords avec des personnes bless??es ou endommag??e pour trouver un arrangement avec les compagnies d???assurances nationales ou internationales."
                  }
                  placement="right"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button>Solution</Button>
                </Tooltip>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div justify="center" className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h1 style={{ textAlign: "center" }} className={classes.title}>
                {language === "an"
                  ? "WHY CHOOSE US?"
                  : "POURQUOI NOUS CHOISIR?"}
              </h1>
              <h5
                style={{ textAlign: "center" }}
                className={classes.description}
              >
                {language === "an"
                  ? " Thanks to the outstanding expertise of its managers, Sesame will be your best option for the highest quality representation in the region."
                  : "Gr??ce ?? l???expertise exceptionnelle de ses gestionnaires, S??same sera votre meilleure option pour la repr??sentation de la plus haute qualit?? dans la r??gion."}
              </h5>
            </GridItem>
          </GridContainer>
        </div>
        <SectionCard />
      </div>
      <Footer />
    </div>
  );
}
