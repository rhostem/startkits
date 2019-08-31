import React, { Component } from 'react';
import sampleText from '../markups/sampleText.html!text';

class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Intro component</h2>
        <hr />
        <span dangerouslySetInnerHTML={{ __html: sampleText }}></span>
      </div>
    );
  }
}

export default Intro;
