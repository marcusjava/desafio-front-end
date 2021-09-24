import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./styles/with-spinner";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...props }) => {
    console.log(props);
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };

export default WithSpinner;
