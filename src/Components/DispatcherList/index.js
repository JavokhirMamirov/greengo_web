import React from 'react'
import { Container } from '../DriverList/DriverListStyle';
import "../DriverList/styles.css";
const DispatcherListPanel = ({data})=>{
    return(
        <Container>
            <table>
                <tr>
                    <th>Index</th>
                    <th>Dispatcher name</th>
                    <th>Status</th>
                </tr>
                {data.map((dispatcher, index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{dispatcher.name}</td>
                    <td>{dispatcher.is_active? "Active":"Deactive"}</td>
                </tr>
                ))}
            </table>
        </Container>

    );
}

export default DispatcherListPanel;