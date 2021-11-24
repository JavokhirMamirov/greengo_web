import React, {useEffect, useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';
import styled from 'styled-components';

import Dashboard from './Pages/Dashboard';
import Invoice from './Pages/Invoice';
import DriverList from './Pages/DriverList';
import SignIn from './Components/SignIn';
import Preformance from './Pages/Preformance';
import Documents from './Pages/Documents';



function App() {
  const [token, setToken] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const tokenstore = localStorage.getItem('token')
    setToken(tokenstore)
  }, [])

  const LogOut = ()=>{
    localStorage.clear()
    setToken(null)
  }
  if(!token){
    return <SignIn setToken={setToken}/>
  }
  return (
    <Router>
      <TopBar setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
      <Container>
        <SideBar menuOpen={menuOpen} Logout={LogOut}/>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route  path="/invoice" element={<Invoice/>} />
          <Route  path="/driver-list" element={<DriverList/>} />
          <Route  path="/preformance" element={<Preformance/>} />
          <Route  path="/documents" element={<Documents/>} />
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