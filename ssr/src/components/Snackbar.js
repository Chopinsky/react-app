import React, { Component } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { SharedContextConsumer } from './Main';

export default class SharedSnackbar extends Component {
  render() {
    return (
      <SharedContextConsumer>
        {
          ({ isOpen, message, closeSnackbar }) => (
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={isOpen}
              autoHideDuration={6000}
              onClose={closeSnackbar}
              message={message}
              action={[
                <IconButton key="close" color="inherit" onClick={closeSnackbar}>
                  <Close />
                </IconButton>,
              ]}
            />
          )
        }
      </SharedContextConsumer>
    );
  }
}