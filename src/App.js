import React, {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';
import styled from 'styled-components';

import Dashboard from './Pages/Dashboard';
import Invoice from './Pages/Invoice';
import DriverList from './Pages/DriverList';
import SignIn from './Components/SignIn';

function getToken(){
  const token = sessionStorage.getItem('token')
  return token?token:null
}

function App() {
  const [token, setToken] = useState(getToken());
  const [menuOpen, setMenuOpen] = useState(false);
  if(!token){
    return <SignIn setToken={setToken}/>
  }
  return (
    <Router>
      <TopBar setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
      <Container>
        <SideBar menuOpen={menuOpen}/>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route  path="/invoice" element={<Invoice/>} />
          <Route  path="/driver-list" element={<DriverList/>} />
          </Routes>
      </Container>
    </Router>
  );
}

export default App;


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
  margin-top:50px;
`;