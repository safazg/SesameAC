/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {
  Mail,
  Home,
  Info,
  LocalOffer,
  Contacts,
  ContactSupport,
  EmojiFlags,
} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Link to="/">
            <Home className={classes.icons} /> HOME
            </Link>
          </Button>
        
      </ListItem>
      {/*        */}
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          <Info className={classes.icons} /> INFORMATION
        </Button>
      </ListItem>
      {/*        */}
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          <LocalOffer className={classes.icons} /> OFFERS
        </Button>
      </ListItem>
      {/*        */}
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          <EmojiFlags className={classes.icons} /> PARTNERS
        </Button>
      </ListItem>{" "}
      {/*        */}
      <ListItem className={classes.listItem}>
        <Link to="/profile-page">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Contacts className={classes.icons} /> AGENTS
          </Button>
        </Link>
      </ListItem>{" "}
      {/*        */}
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          <ContactSupport className={classes.icons} /> FAQ
        </Button>
      </ListItem>{" "}
      {/*        */}
      <ListItem className={classes.listItem}>
        <Link to="/landing-page">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Mail className={classes.icons} /> CONTACT
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
