import React, { Component } from 'react';
import { Link } from 'react-router';

class Tab extends Component {
  render() {
    return (
      <ul className="Tab">
        <li className="Tab-item">
          <Link to="/">
            <span>Intro</span>
          </Link>
        </li>
        <li className="Tab-item">
          <Link to="/todo">
            <span>Todo (redux)</span>
          </Link>
        </li>
        <li className="Tab-item">tab 2</li>
        <li className="Tab-item">tab 3</li>
        <li className="Tab-item">tab 4</li>
      </ul>
    );
  }
}

export default Tab;
