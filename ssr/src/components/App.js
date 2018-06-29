import React, { Component } from 'react';
import Loadable from 'react-loadable';
import '../assets/App.css';
import { Main } from "./Main";
import ControlButton from "./ControlButton";

const AsyncHeader = Loadable({
  loader: () => import("./Header"),
  loading: () => <div>Loading sidebar...</div>,
});

class App extends Component {
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
      </div>
    );
  }
}

export default App;
