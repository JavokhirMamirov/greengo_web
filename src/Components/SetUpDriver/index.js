import React from 'react';
import { Modal } from '../Modal';
import {Form, Input, Label, Select,SubmitBtn, SubmitDiv} from './SetUpDriver';


const SetUpDriverModal = ({ showModal, setShowModal }) => {
    return(
    <Modal showModal={showModal} setShowModal={setShowModal} title="Set Up Driver">
        <Form>
            <Label>Driver name</Label>
            <Input type="text" placeholder="Driver name"  required/>
            <Label>Owner</Label>
            <Select>
                <option>owner 1</option>
                <option>owner 2</option>
            </Select>
            <Label>Phone number</Label>
            <Input type="text" placeholder="Phone number" required/>
            <Label>Truck number</Label>
            <Input type="text" placeholder="Truck number"  required/>
            <Label>Email</Label>
            <Input type="email" placeholder="Email"/>
            <SubmitDiv>
            <SubmitBtn color="#646b6e" onClick={()=>setShowModal(!showModal)}>Cancel</SubmitBtn>
            <SubmitBtn color="#68c6e3">Add</SubmitBtn>
            </SubmitDiv>
        </Form>
    </Modal>
    );
  };



export const SetUpDispatcherModal = ({ showModal, setShowModal }) => {
    return(
    <Modal showModal={showModal} setShowModal={setShowModal} title="Set Up Dispatcher">
        <Form>
            <Label>Dispatcher name</Label>
            <Input type="text" placeholder="Driver name"  required/>
            <SubmitDiv>
            <SubmitBtn color="#646b6e" onClick={()=>setShowModal(!showModal)}>Cancel</SubmitBtn>
            <SubmitBtn color="#68c6e3">Add</SubmitBtn>
            </SubmitDiv>
        </Form>
    </Modal>
    );
  };

  export const SetUpOperatorModal = ({ showModal, setShowModal }) => {
    return(
    <Modal showModal={showModal} setShowModal={setShowModal}  title="Set Up Operator">
        <Form>
            <Label>Operator name</Label>
            <Input type="text" placeholder="Operator name"  required/>
            <SubmitDiv>
            <SubmitBtn color="#646b6e" onClick={()=>setShowModal(!showModal)}>Cancel</SubmitBtn>
            <SubmitBtn color="#68c6e3">Add</SubmitBtn>
            </SubmitDiv>
        </Form>
    </Modal>
    );
  };


export default SetUpDriverModal;




