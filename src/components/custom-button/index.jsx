import React from "react";

import { Button } from "./styles/custom-button";

function CustomButton({
  children,
  isGoogleButton,
  inverted = false,
  ...props
}) {
  return (
    <Button isGoogleButton={isGoogleButton} inverted={inverted} {...props}>
      {children}
    </Button>
  );
}

export default CustomButton;
