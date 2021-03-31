/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import {
  Mail,
  Home,
  Info,
  LocalOffer,
  Contacts,
  ContactSupport,
  EmojiFlags,
  Translate,
} from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

//Translation
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" style={{ color: "inherit" }}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Home className={classes.icons} />{" "}
            {language === "an" ? "HOME" : "ACCEUIL"}
          </Button>
        </Link>
      </ListItem>
      {/*        */}
      <ListItem className={classes.listItem}>
        <Link to="/info-page" style={{ color: "inherit" }}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Info className={classes.icons} /> INFORMATION
          </Button>
        </Link>
      </ListItem>
      {/*        */}

      <ListItem className={classes.listItem}>
        <Link to="/partners-page" style={{ color: "inherit" }}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <EmojiFlags className={classes.icons} />
            {language === "an" ? "PARTNERS" : "PARTENAIRES"}
          </Button>
        </Link>
      </ListItem>{" "}
      {/*        */}
      <ListItem className={classes.listItem} style={{ color: "inherit" }}>
        <Link to="/profile-page" style={{ color: "inherit" }}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Contacts className={classes.icons} />
            {language === "an" ? "AGENTS" : "ÉQUIPE"}
          </Button>
        </Link>
      </ListItem>{" "}
      {/*        */}
      <ListItem className={classes.listItem}>
        <Link to="/faq" style={{ color: "inherit" }}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <ContactSupport className={classes.icons} /> FAQ
          </Button>
        </Link>
      </ListItem>{" "}
      {/*        */}
      <ListItem className={classes.listItem}>
        <Link to="/landing-page" style={{ color: "inherit" }}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Mail className={classes.icons} /> CONTACT
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={() =>
            language === "an"
              ? dispatch({ type: "fr" })
              : dispatch({ type: "an" })
          }
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Translate className={classes.icons} />

          {language === "an" ? "FR" : "ANG"}
        </Button>
      </ListItem>
    </List>
  );
}
