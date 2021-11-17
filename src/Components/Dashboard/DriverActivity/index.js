import React, { useState } from 'react'
import { Container, DriverTextContainer, DriverContainer, MidleContainer, TopContainer, TopText, Title, SubTitle, StatusText } from './DriverActivity';


const DateFormat = ({date_api}) =>{
    console.log(date_api);
    const date = new Date(date_api);
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
        <DriverTextContainer>
            <Title>{date.getDate() < 10? `0${date.getDate()}`:date.getDate()} / {date.getMonth() < 9? `0${date.getMonth()+1}`:date.getMonth()+1}</Title>
            <Title>{weekdays[date.getDay()]}</Title>
        </DriverTextContainer>
        
    );
}


const DriverActivity = ({drivers}) =>{
   
    return (
        <Container>
            <TopContainer>
                <TopText>Drivers Activity</TopText>
                <TopText>Schedule new</TopText>
            </TopContainer>
            <MidleContainer>
                {drivers.map((driver, index)=>(
                    <DriverContainer key={index} color={driver.status?.color}>
                        
                        <DateFormat date_api={driver.update_time}/>
                        <DriverTextContainer>
                            <Title>Driver</Title>
                            <SubTitle>{driver.name}</SubTitle>
                        </DriverTextContainer>
                        <DriverTextContainer>
                            <Title>Destination</Title>
                            <SubTitle>{driver.destination}</SubTitle>
                        </DriverTextContainer>
                        <DriverTextContainer bg={driver.status?.color}>
                            <StatusText>{driver.status?.name}</StatusText>
                        </DriverTextContainer>
                    </DriverContainer>
                ))}
                
            </MidleContainer>
        </Container>
    );
}

export default DriverActivity;