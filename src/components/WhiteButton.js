import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
const styles = theme => ({
  root: {
    height: 50,
    width: 220,
    backgroundColor: "transparent",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "#fb6976"
    }
  },
  text: {
    fontSize: 15
  }
});

const Button = ({ classes, children }) => (
  <button className={classes.root} onHover={this.handle}>
    <span className={classes.text}>{children}</span>
  </button>
);

export default injectSheet(styles)(Button);
