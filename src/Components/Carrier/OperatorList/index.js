import React from 'react'
import { MdClear, MdOutlineDone } from 'react-icons/md';
import { ActiveBtn, ActiveSpan, Container, DeActiveBtn, DeactiveSpan } from '../DriverList/DriverListStyle';
import "../DriverList/styles.css";
const OperatorListPanel = ({data,ChangeStatus})=>{
    return(
        <Container>
            <table>
                <tr>
                    <th>Index</th>
                    <th>Operator Name</th>
                    <th>Status</th>
                    <th>Change Status</th>
                </tr>
                {data.map((operator, index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{operator.name}</td>
                    <td>{operator.is_active? <ActiveSpan>Active</ActiveSpan> :
                        <DeactiveSpan>Deactive</DeactiveSpan>}</td>
                    <td>{operator.is_active? <DeActiveBtn onClick={()=>ChangeStatus(operator.id, operator.name, false, 'operator')}><MdClear size={20}/></DeActiveBtn>:
                        <ActiveBtn onClick={()=>ChangeStatus(operator.id, operator.name, true, 'operator')}><MdOutlineDone size={20}/></ActiveBtn>  }</td>
                </tr>
                ))}
            </table>
        </Container>

    );
}

export default OperatorListPanel;