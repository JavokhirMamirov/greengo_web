import React from 'react'
import { Container, SingWindow,LeftSide, RightSide, Title, SubTitle,TitleSn, Input, Label, Form, SubmitBtn } from './SignIn';
import { MdPersonOutline,MdOutlineLock } from 'react-icons/md';

const SignIn = () =>{
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
                        <Input type="text" placeholder="Username"/>
                        <Label>Password</Label>
                        <MdOutlineLock size={24} style={{position:"absolute", color:"#666666", marginTop:"102px", marginLeft:"3px"}} />
                        <Input type="password" placeholder="Password"/>
                        <SubmitBtn>Sign In</SubmitBtn>
                    </Form>
                </RightSide>
            </SingWindow>
        </Container>
    );
}

export default SignIn;