import React from 'react'
import { Container } from '../DriverList/DriverListStyle';
import "../DriverList/styles.css";
const OperatorListPanel = ()=>{
    return(
        <Container>
            <table>
                <tr>
                    <th>Operator Name</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>John Tairov</td>
                    <td>267-235-4255</td>
                    <td>JohnSmith@gmail.com</td>
                    <td>Active</td>
                </tr>
            </table>
        </Container>

    );
}

export default OperatorListPanel;