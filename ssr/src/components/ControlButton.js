import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { SharedContextConsumer } from './Main';

export default ({ isPrimary, message }) => (
  <SharedContextConsumer>
    {
      ({ openSnackbar }) => (
        <Button
          style={{ margin: 10 }}
          variant="raised"
          color={ isPrimary ? "primary" : "secondary" }
          onClick={(event) => openSnackbar(message) }
        >
          { isPrimary ? "Pirmary Button" : "Secondary Button" }
        </Button>
      )
    }
  </SharedContextConsumer>
);