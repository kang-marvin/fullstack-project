import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Container } from "semantic-ui-react";

const App = props => {
  const { children } = props;

  return (
    <BrowserRouter>
      <Container textAlign="center">
        {children}
      </Container>
    </BrowserRouter>
  )
}

export default App;
