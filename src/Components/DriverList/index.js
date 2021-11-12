import React from 'react'
import { Container } from './DriverListStyle';
import "./styles.css"
const DriverListPanel = ()=>{
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
                <tr>
                    <td>101</td>
                    <td>John Tairov</td>
                    <td>Clifford Smith</td>
                    <td>267-235-4255</td>
                    <td>JohnSmith@gmail.com</td>
                    <td>Active</td>
                </tr>
            </table>
        </Container>

    );
}

export default DriverListPanel;