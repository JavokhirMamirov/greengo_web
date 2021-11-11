import React from 'react'
import './App.css';
import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';
import styled from 'styled-components';

function App() {
  return (
    <>
      <TopBar/>
      <Container>
        <SideBar/>
      </Container>
      
    </>
  );
}

export default App;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 920px;
`;