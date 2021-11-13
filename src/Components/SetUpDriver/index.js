import React, { useState } from 'react';
import { Modal } from '../Modal';
import {Form, Input, Label, Select,SubmitBtn, SubmitDiv} from './SetUpDriver';



const SetUpDriverModal = ({ showModal, setShowModal, SetUpDriver, owners }) => {
    const [name, setName] = useState(null);
    const [owner, setOwner] = useState(null);
    const [phone, setPhone] = useState(null);
    const [truck_number, setTruckNumber] = useState(null);
    const [Email, setEmail] = useState(null);
    
    const setUpDr = async ()=>{
        if (name !== null && owner !== null && phone !== null && truck_number !== null){
            const data = {
                name:name,
                owner:owner,
                phone:phone,
                track_number:truck_number,
                email:Email
            }
            await SetUpDriver(data);
        }else{
            console.log('error');
        }
    }

    
    return(
    <Modal showModal={showModal} setShowModal={setShowModal} title="Set Up Driver">
        <Form>
            <Label>Driver name</Label>
            <Input type="text" placeholder="Driver name"  onChange={v=>setName(v.target.value)}/>
            <Label>Owner</Label>
            <Select onChange={v=>setOwner(v.target.value)}>
                <option value={null}>Select owner</option>
                {owners.map((op,index)=>(
                    <option key={index} value={op.id}>{op.name}</option>
                ))}
            </Select>
            <Label>Phone number</Label>
            <Input type="text" placeholder="Phone number"   onChange={v=>setPhone(v.target.value)}/>
            <Label>Truck number</Label>
            <Input type="text" placeholder="Truck number"    onChange={v=>setTruckNumber(v.target.value)}/>
            <Label>Email</Label>
            <Input type="email" placeholder="Email"   onChange={v=>setEmail(v.target.value)}/>
            <SubmitDiv>
            <SubmitBtn color="#646b6e" onClick={()=>setShowModal(!showModal)}>Cancel</SubmitBtn>
            <SubmitBtn color="#68c6e3" onClick={()=>setUpDr()}>Add</SubmitBtn>
            </SubmitDiv>
        </Form>
    </Modal>
    );
  };



export const SetUpDispatcherModal = ({ showModal, setShowModal, SetUpDsp }) => {
    const [name, setName] = useState(null);
    
    const setUpDp = async ()=>{
        if (name !== null){
            const data = {
                name:name,
            }
            await SetUpDsp(data);
        }else{
            console.log('error');
        }
    }

    
    return(
    <Modal showModal={showModal} setShowModal={setShowModal} title="Set Up Dispatcher">
        <Form>
            <Label>Dispatcher name</Label>
            <Input type="text" placeholder="Driver name" onChange={v=>setName(v.target.value)} required/>
            <SubmitDiv>
            <SubmitBtn color="#646b6e" onClick={()=>setShowModal(!showModal)}>Cancel</SubmitBtn>
            <SubmitBtn color="#68c6e3" onClick={()=>setUpDp()}>Add</SubmitBtn>
            </SubmitDiv>
        </Form>
    </Modal>
    );
  };

  export const SetUpOperatorModal = ({ showModal, setShowModal, SetUpOpr }) => {
    const [name, setName] = useState(null);
    
    const setUpOp = async ()=>{
        if (name !== null){
            const data = {
                name:name,
            }
            await SetUpOpr(data);
        }else{
            console.log('error');
        }
    }
    return(
    <Modal showModal={showModal} setShowModal={setShowModal}  title="Set Up Operator">
        <Form>
            <Label>Operator name</Label>
            <Input type="text" placeholder="Operator name"  onChange={v=>setName(v.target.value)}/>
            <SubmitDiv>
            <SubmitBtn color="#646b6e" onClick={()=>setShowModal(!showModal)}>Cancel</SubmitBtn>
            <SubmitBtn color="#68c6e3" onClick={()=>setUpOp()}>Add</SubmitBtn>
            </SubmitDiv>
        </Form>
    </Modal>
    );
  };


export default SetUpDriverModal;




