import React, { useEffect, useState } from 'react'
import api from '../../../api/api';
import { GetDriverStatus } from '../../../api/requests';
import DriverActivityModal from '../DriverActivityModal';
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

const token = localStorage.getItem('token')
const DriverActivity = ({drivers, get_drivers}) =>{
   const [showModal, setShowModal] = useState(false);
   const [drStatus, setDrStatus] = useState([]);
   const [drData, setDrData] = useState({})

    const get_driver_status = async () =>{
        const response = await GetDriverStatus();
        setDrStatus(response)
    }

   useEffect(()=>{
    get_driver_status()
    console.log(drStatus);
  },[]);

  const ChangeStatusDriver = async (data) =>{
    console.log(data);
    const response = await api.post('/driver-activity/', data,{
        headers: {
            'Authorization': `Token ${token}` 
          }
    })
    console.log(response);
    if (response.data.success === true){
        get_drivers()
        setShowModal(false)
    }
    
  }

  const openActiveModal = (driver) =>{
      setDrData(driver)
      setShowModal(!showModal)
  }

    return (
        <Container>
            <TopContainer>
                <TopText>Drivers Activity</TopText>
                <TopText>Schedule new</TopText>
            </TopContainer>
            <MidleContainer>
                {drivers.map((driver, index)=>(
                    <DriverContainer key={index} 
                        color={driver.status?.color} 
                        onClick={()=>openActiveModal(driver)}>
                        
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
            <DriverActivityModal 
                setShowModal={setShowModal} 
                showModal={showModal} 
                driver={drData}
                drStatus={drStatus}
                ChangeStatusDriver={ChangeStatusDriver}
                />
        </Container>
    );
}

export default DriverActivity;