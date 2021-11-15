import React from 'react'
import { MdClear, MdOutlineDone } from 'react-icons/md';
import { ActiveBtn, ActiveSpan, Container, DeActiveBtn, DeactiveSpan } from '../DriverList/DriverListStyle';
import "../DriverList/styles.css";
const DispatcherListPanel = ({data,ChangeStatus})=>{
    return(
        <Container>
            <table>
                <tr>
                    <th>Index</th>
                    <th>Dispatcher name</th>
                    <th>Status</th>
                    <th>Change Status</th>
                </tr>
                {data.map((dispatcher, index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{dispatcher.name}</td>
                    <td>{dispatcher.is_active? <ActiveSpan>Active</ActiveSpan> :
                        <DeactiveSpan>Deactive</DeactiveSpan>}</td>
                    <td>{dispatcher.is_active? <DeActiveBtn   onClick={()=>ChangeStatus(dispatcher.id, dispatcher.name, false, 'dispatcher')}><MdClear size={20}/></DeActiveBtn>:
                    <ActiveBtn   onClick={()=>ChangeStatus(dispatcher.id, dispatcher.name, true, 'dispatcher')}><MdOutlineDone size={20}/></ActiveBtn>  }</td>
                </tr>
                ))}
            </table>
        </Container>

    );
}

export default DispatcherListPanel;