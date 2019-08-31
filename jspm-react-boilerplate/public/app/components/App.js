import React, { Component, PropTypes } from 'react';
import Tab from '../components/Tab';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <Tab />
        <div className="App-side">side</div>
        <div className="App-main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.func,
};

export default App;
