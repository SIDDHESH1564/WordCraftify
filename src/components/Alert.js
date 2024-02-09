import React, { useState } from "react";

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };
    
  return (
    props.warn && <div className={`alert alert-${props.warn.type} d-flex align-items-center`} role="alert">
    <strong>{capitalize(props.warn.type)}</strong>: {props.warn.msg}
    </div>
  );
}

export default Alert;
