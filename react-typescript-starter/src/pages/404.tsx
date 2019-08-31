import * as React from 'react';
import styled from 'styled-components';

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1px;
  padding-top: 1px;
  min-width: 100vw;
  min-height: 100vh;
  justify-content: center;
`;

const Text = styled.p`
  text-align: center;
  font-weight: 100;
  font-size: 3rem;
`;

const NotFound = () => {
  return (
    <FlexWrap>
      <Text>404 NOT FOUND</Text>
    </FlexWrap>
  );
};

export default NotFound;
