import React, { Component } from 'react';
import Snackbar from "./Snackbar";

const SharedContext = React.createContext();

export class Main extends Component {
  state = {
    isOpen: false,
    message: '',
  };

  openSnackbar = (message) => {
    this.setState({
      isOpen: true,
      message,
    });
  };

  closeSnackbar = () => {
    this.setState({
      isOpen: false,
      message: '',
    });
  };

  render() {
    const { children } = this.props;

    return (
      <SharedContext.Provider
        value={{
          openSnackbar: this.openSnackbar,
          closeSnackbar: this.closeSnackbar,
          isOpen: this.state.isOpen,
          message: this.state.message,
        }} 
      >
        <Snackbar />
        {children}
      </SharedContext.Provider>
    );
  }
}

export const SharedContextConsumer = SharedContext.Consumer;