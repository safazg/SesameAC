import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h1 style={{ textAlign: "center",
    fontSize: "60px",
    fontWeight: "600",}}>About Us</h1>
    <p>          Sesame AC offers its clients the best possible protection for all
          their assistance needs. As a consulting and disaster management
          company, we are committed to finding the best services for you. Our
          expert staff has the knowledge to manage everything from the simplest
          policy to the most complicated package. <br />
          <br />
          Contact us to get a free estimate today.</p>

    </div>
  );
}
