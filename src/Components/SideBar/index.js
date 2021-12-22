import React, {useState} from 'react'
import { Container,MenuItem, DropMenu, DropMenuItem,Label,QuickLink  } from './SideBar';

const SideBar = ({menuOpen, Logout}) =>{
    const [dropMenuOpen, SetDropMenuOpen] = useState(true);

    const LogOutD = () =>{
        Logout();
    }
    return (
        <Container style={{overflow:'clip'}} menuOpen={menuOpen}>
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
            <QuickLink href='https://www.mytriumph.com/'>TRIUMPH</QuickLink>
            <QuickLink href='https://www.ezcoi.com/Default.aspx?ReturnUrl=%2FUser%2FUserControlCenter.aspx'>EzCOI</QuickLink>
            <QuickLink href='https://manage.fleetone.com/cards/IndexFleetone.action'>FleetONE</QuickLink>
        </Container>
    );
}

export default SideBar;