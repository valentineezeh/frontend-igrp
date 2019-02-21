import React from "react";

const SubmitButton = props => (
  <button className="btn btn-default btn-block" onClick={props.onClick}>
    {props.label}
  </button>
);

export default SubmitButton;
