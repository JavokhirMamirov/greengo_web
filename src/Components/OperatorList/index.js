import React from 'react'
import { Container } from '../DriverList/DriverListStyle';
import "../DriverList/styles.css";
const OperatorListPanel = ({data})=>{
    return(
        <Container>
            <table>
                <tr>
                    <th>Index</th>
                    <th>Operator Name</th>
                    <th>Status</th>
                </tr>
                {data.map((operator, index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{operator.name}</td>
                    <td>{operator.is_active? "Active":"Deactive"}</td>
                </tr>
                ))}
            </table>
        </Container>

    );
}

export default OperatorListPanel;