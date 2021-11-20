import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background, Button, DriverContainer, ModalContent, ModalWrapper, Title, TopBar, TruckContainer,InvoiceContainer, Text, LocationContainer, SubText, DetailContainer, DetailItem, DetailText, BottomContainer } from './InvoiceModal';
import { MdOutlineLocalShipping, MdPersonOutline, MdOutlineLocationOn } from "react-icons/md";

export function InvoiceModal ({ showModal, setShowModal}){
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
                  <TopBar>
                      <Title>Trip detail</Title>
                      <Button>Edit</Button>
                      <Button>Remove</Button>
                  </TopBar>
                  <InvoiceContainer>
                        <TruckContainer>
                            <MdOutlineLocalShipping  color="white" size={32}/>
                            <Text>Truck | 101</Text>
                        </TruckContainer>
                        <DriverContainer>
                            <MdPersonOutline  color="white" size={32}/>
                            <Text>Truck | 101</Text>
                        </DriverContainer>
                        <LocationContainer>
                            <TruckContainer style={{margin:"0px"}}>
                                <MdOutlineLocationOn  color="white" size={26}/>
                                <Text>Columbus, OH</Text>
                            </TruckContainer>
                            <SubText>Tuesday Aug 12, 2021  09:30am</SubText>
                        </LocationContainer>
                        <LocationContainer style={{alignItems:'end'}}>
                            <Text style={{fontSize:"20px", fontWeight:"600"}}>1600$</Text>
                            <SubText>3.25/per mile</SubText>
                        </LocationContainer>
                        <LocationContainer>
                            <TruckContainer style={{margin:"0px"}}>
                                <MdOutlineLocationOn  color="white" size={26}/>
                                <Text>Columbus, OH</Text>
                            </TruckContainer>
                            <SubText>Tuesday Aug 12, 2021  09:30am</SubText>
                        </LocationContainer>
                        <LocationContainer  style={{alignItems:'end', justifyContent:'center'}}>
                            <Text>Download PDF</Text>
                        </LocationContainer>
                  </InvoiceContainer>
                  <DetailContainer>
                        <DetailItem>
                            <DetailText>View Docs</DetailText>
                            <DetailText>No PDF attached</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Dispatcher Name</DetailText>
                            <DetailText>No PDF attached</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Load Board</DetailText>
                            <DetailText>No PDF attached</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Owner Name</DetailText>
                            <DetailText>No PDF attached</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Driver Name</DetailText>
                            <DetailText>No PDF attached</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Truck Number</DetailText>
                            <DetailText>No PDF attached</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Trailer Number</DetailText>
                            <DetailText>No PDF attached</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Dead Head </DetailText>
                            <DetailText>No PDF attached</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Loaded Miles</DetailText>
                            <DetailText>No PDF attached</DetailText>
                        </DetailItem>
                        <DetailItem>
                            <DetailText>Special Notes</DetailText>
                            <DetailText>No PDF attached</DetailText>
                        </DetailItem>
                        <BottomContainer>
                            <DetailText>Makropoınt requıred remınd to drıver to accept lınk</DetailText>
                        </BottomContainer>

                  </DetailContainer>
              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};