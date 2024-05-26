import React from 'react';
import Timeline from './components/Timeline';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <AppContainer>
    <Timeline />
  </AppContainer>
);

export default App;
