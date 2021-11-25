import React, {useState} from 'react'
import { Container,MenuItem, DropMenu, DropMenuItem,Label,QuickLink  } from './SideBar';

const SideBar = ({menuOpen, Logout}) =>{
    const [dropMenuOpen, SetDropMenuOpen] = useState(true);

    const LogOutD = () =>{
        Logout();
    }
    return (
        <Container menuOpen={menuOpen}>
            <MenuItem  to='/'>Dashboard</MenuItem>
            <MenuItem to='/invoice'>Invoice</MenuItem>
            <MenuItem to='#'>Statements</MenuItem>
            <MenuItem to="#" onClick={()=>SetDropMenuOpen(!dropMenuOpen)}>Carrier Account</MenuItem>
            <DropMenu dropMenuOpen={dropMenuOpen}>
                <DropMenuItem to='#'>Accounting</DropMenuItem>
                <DropMenuItem to='/driver-list'>Driver List</DropMenuItem>
                <DropMenuItem to='/documents'>Documents</DropMenuItem>
            </DropMenu>
            <MenuItem to="/preformance">Preformance</MenuItem>
            <MenuItem to="#" onClick={()=>LogOutD()}>Logout</MenuItem>
            <Label>Quick Links</Label>
            <QuickLink>TRIUMPH</QuickLink>
            <QuickLink>EzCOI</QuickLink>
            <QuickLink>FleetONE</QuickLink>
        </Container>
    );
}

export default SideBar;