import * as React from 'react';
import styled from 'styled-components';
import { Main } from '../components/layout/Main';
import { Link } from 'react-router-dom';

const Header = styled.div`
  background-color: #10324a;
  padding: 0.5em 1em;
  color: white;
`;

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <h1>React with Typescript</h1>
        </Header>
        <Main>
          <Link to="/404">404</Link>
        </Main>
      </div>
    );
  }
}

export default Home;
