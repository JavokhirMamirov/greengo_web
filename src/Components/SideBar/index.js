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
            <QuickLink href='https://www.mytriumph.com/' target="_blank">TRIUMPH</QuickLink>
            <QuickLink href='https://www.ezcoi.com/Default.aspx?ReturnUrl=%2FUser%2FUserControlCenter.aspx' target="_blank">EzCOI</QuickLink>
            <QuickLink href='https://manage.fleetone.com/cards/IndexFleetone.action' target="_blank">FleetONE</QuickLink>
        </Container>
    );
}

export default SideBar;