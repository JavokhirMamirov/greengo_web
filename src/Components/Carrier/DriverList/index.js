import React from 'react'
import { Container, ActiveSpan, DeactiveSpan, ActiveBtn, DeActiveBtn } from './DriverListStyle';
import "./styles.css"
import {MdClear,MdOutlineDone} from 'react-icons/md';
const DriverListPanel = ({data, ChangeStatus})=>{
    return(
        <Container>
            <table>
                <tr>
                    <th>Truck number</th>
                    <th>Owner</th>
                    <th>Driver name</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Change Status</th>
                </tr>
                {data.map((driver, index)=>(
                    <tr key={index}>
                        <td>{driver.track_number}</td>
                        <td>{driver.owner?.name}</td>
                        <td>{driver.name}</td>
                        <td>{driver.phone}</td>
                        <td>{driver.email}</td>
                        <td>{driver.is_active? <ActiveSpan>Active</ActiveSpan> :
                        <DeactiveSpan>Deactive</DeactiveSpan>}</td>
                        <td>{driver.is_active? <DeActiveBtn onClick={()=>ChangeStatus(driver.id, driver.name, false, 'driver')}><MdClear size={20}/></DeActiveBtn>:
                        <ActiveBtn  onClick={()=>ChangeStatus(driver.id, driver.name, true, 'driver')}><MdOutlineDone size={20} /></ActiveBtn>  }</td>
                    </tr>
                ))}
                
            </table>
        </Container>

    );
}

export default DriverListPanel;