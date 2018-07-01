import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { setMessage } from "../store/action";
import '../assets/App.css';
import { Main } from "./Main";
import ControlButton from "./ControlButton";

const AsyncHeader = Loadable({
  loader: () => import("./Header"),
  loading: () => <div>Loading sidebar...</div>,
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.message) {
      //this.props.updateMessage("Hello from client!");
    }
  }
  
  render() {
    return (
      <div className="app">
        <AsyncHeader />
        <Main>
          <div className="app-intro">
            <ControlButton
              isPrimary={true}
              message={"You clicked the primary button!"}
            />
            <ControlButton 
              isPrimary={false}
              message={"You clicked the secondary button!"}
            />
          </div>
        </Main>
        <p>Redux: {this.props.message}</p>
      </div>
    );
  }
}

// export default connect(
//   ({ app }) => ({
//     message: app.message,
//   }),
//   (dispatch) => ({
//     updateMessage: (message) => dispatch(setMessage(message))
//   })
// );
