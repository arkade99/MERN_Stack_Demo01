import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ variant = "info", Children }) => {
  return (
    <Alert variant={variant} style={{ fontSize: 15 }}>
      <strong>{Children}</strong>
    </Alert>
  );
};

export default ErrorMessage;
