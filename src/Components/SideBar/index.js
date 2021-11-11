import React, {useState} from 'react'
import { Container,MenuItem, DropMenu, DropMenuItem,Label,QuickLink  } from './SideBar';

const SideBar = () =>{
    const [dropMenuOpen, SetDropMenuOpen] = useState(true);
    return (
        <Container>
            <MenuItem>Dashboard</MenuItem>
            <MenuItem>Invoice</MenuItem>
            <MenuItem>Statements</MenuItem>
            <MenuItem onClick={()=>SetDropMenuOpen(!dropMenuOpen)}>Carrier Account</MenuItem>
            <DropMenu dropMenuOpen={dropMenuOpen}>
                <DropMenuItem>Accounting</DropMenuItem>
                <DropMenuItem>Driver List</DropMenuItem>
                <DropMenuItem>Documents</DropMenuItem>
            </DropMenu>
            <MenuItem>Preformance</MenuItem>
            <Label>Quick Links</Label>
            <QuickLink>TRIUMPH</QuickLink>
            <QuickLink>EzCOI</QuickLink>
            <QuickLink>FleetONE</QuickLink>
        </Container>
    );
}

export default SideBar;