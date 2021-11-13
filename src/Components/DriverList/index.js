import React from 'react'
import { Container } from './DriverListStyle';
import "./styles.css"

const DriverListPanel = ({data})=>{
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
                </tr>
                {data.map((driver, index)=>(
                    <tr key={index}>
                        <td>{driver.track_number}</td>
                        <td>{driver.owner?.name}</td>
                        <td>{driver.name}</td>
                        <td>{driver.phone}</td>
                        <td>{driver.email}</td>
                        <td>{driver.is_active?"Active":"Deactive"}</td>
                    </tr>
                ))}
                
            </table>
        </Container>

    );
}

export default DriverListPanel;