import React from "react";
import Alert from "react-bootstrap/Alert";

function Alerts() {
  return [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
      <br />
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
      like.
    </Alert>
  ));
}

export default Alerts;
