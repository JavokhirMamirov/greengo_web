import React, { useState } from 'react'
import { Container, SingWindow,LeftSide, RightSide, Title, SubTitle,TitleSn, Input, Label, Form, SubmitBtn } from './SignIn';
import { MdPersonOutline,MdOutlineLock } from 'react-icons/md';
import Swal from 'sweetalert2'
import api from '../../api/api';

async function SignInHandler(username, password, setToken){
    const response = await api.get(`/login/?username=${username}&password=${password}`)
    if (response.data.success === true){
        const token = response.data.data.token
        setTokenSession(token)
        setToken(token)
    }else{
        Swal.fire({  
            title: 'Error!',  
            text: 'Username or password error.',
            icon: 'error'
          }); 
    }
}


function setTokenSession(token){
    localStorage.setItem('token',token)
}

const SignIn = ({setToken}) =>{
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    return (
        <Container>
            <SingWindow>
                <LeftSide>
                    <Title>Welcome Back!</Title>
                    <SubTitle>Log in to your personal profile to use the Greengo platform.</SubTitle>
                </LeftSide>
                <RightSide>
                    <TitleSn>Sign in to GreenGo</TitleSn>
                    <Form>
                        <Label>Username</Label>
                        <MdPersonOutline size={24} style={{position:"absolute", color:"#666666", marginTop:"32px", marginLeft:"3px"}} />
                        <Input type="text" onChange={username => setUsername(username.target.value)} placeholder="Username"/>
                        <Label>Password</Label>
                        <MdOutlineLock size={24} style={{position:"absolute", color:"#666666", marginTop:"102px", marginLeft:"3px"}} />
                        <Input type="password" onChange={password => setPassword(password.target.value)} placeholder="Password"/>
                        <SubmitBtn onClick={()=>SignInHandler(username, password, setToken)}>Sign In</SubmitBtn>
                    </Form>
                </RightSide>
            </SingWindow>
        </Container>
    );
}

export default SignIn;