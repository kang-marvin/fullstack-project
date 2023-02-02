import React from "react";

import { Message } from "semantic-ui-react";

const NotFound = () => {
  return (
    <Message negative>
      <Message.Header>
        Sorry, That page does not exists
      </Message.Header>
      <p>Go back <a href="/">home</a></p>
    </Message>
  );
};

export default NotFound;