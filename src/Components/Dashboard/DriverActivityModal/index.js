import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background, CloseModalButton, DateItam, DriverDataContainer, ModalContent, ModalWrapper, StatusBtn, StatusBtnContainer, Text } from './styles';
import { MdOutlineLocalShipping, MdOutlineLocationOn, MdPersonOutline,  MdPhone } from "react-icons/md";



export default function DriverActivityModal ({ showModal, setShowModal, drStatus, driver, ChangeStatusDriver }){
  const modalRef = useRef();
  
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const Change_status = async (status, driver)=>{
      const data = {
          status:status,
          driver:driver
      }
      console.log(data);
    await ChangeStatusDriver(data)
  }

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );


  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <DriverDataContainer>
                    <DateItam>
                        <MdOutlineLocalShipping size={30} color="#fff"/>
                        <Text>Truck | {driver.track_number}</Text>
                    </DateItam>
                    <DateItam>
                        <MdPersonOutline size={30} color="#fff"/>
                        <Text>{driver.name}</Text>
                    </DateItam>
                    <DateItam>
                        <MdPhone size={29} color="#fff"/>
                        <Text>{driver.phone}</Text>
                    </DateItam>
                </DriverDataContainer>
                <div style={{display:'flex', justifyContent:'center', marginTop:"50px"}}>
                    <Text>Please update current status of driver: Mark</Text>
                </div>
                <StatusBtnContainer>
                    {drStatus.map((status,index)=>(
                        <StatusBtn bg={status.color}
                            onClick={()=>Change_status(status.id, driver.id)}
                            className={driver.status?.id === status.id?"active":"none"}
                            key={index}>{status.name}</StatusBtn>
                    ))}
                </StatusBtnContainer>
                <DateItam style={{justifyContent:'flex-end', margin:'20px'}}>
                    <Text>Destination : </Text>
                    <MdOutlineLocationOn size={26} color="#fff"/>
                    <Text>{driver.destination}</Text>
                </DateItam>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};