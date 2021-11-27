import React, { useState } from 'react'
import { Modal } from '../../Carrier/Modal';
import { Form, Input, Label, Select, SubmitBtn, SubmitDiv } from '../../Carrier/SetUpDriver/SetUpDriver';



const DocAddModal = ({showModal, setShowModal, SetUpDoc}) =>{
    const [name, setName] = useState('')
    const [type, setType] = useState(1)

    const SubmitHandler = async()=>{
        if (name !== ""){
            let data = {
                name:name,
                type:type
            }
            await SetUpDoc(data);
            setShowModal(false)
            setType(1)
        }

    }

    return (
        <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            title="Add Document"
        >
            <Form>
                <Label>Name</Label>
                <Input type="text" placeholder="Doc name" onChange={v=>setName(v.target.value)}/>
                <Label>Type</Label>
                <Select onChange={v=>setType(v.target.value)}>
                    <option value={1}>Documents</option>
                    <option value={2}>Drivers Aplications</option>
                    <option value={3}>Existing Trucks Docs</option>
                </Select>
                <SubmitDiv>
                    <SubmitBtn color="#646b6e" onClick={()=>setShowModal(!showModal)}>Cancel</SubmitBtn>
                    <SubmitBtn color="#68c6e3" onClick={SubmitHandler} >Add</SubmitBtn>
            </SubmitDiv>
        </Form>
        </Modal>
    );
}

export default DocAddModal;