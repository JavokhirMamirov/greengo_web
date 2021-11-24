import React from 'react'
import { Container, DateInput, FilterBtn, SubTitle, Title } from './TopFilter';
import { MdFilterList } from 'react-icons/md';



const  TopFilter = ({dateStart,setDateStart, dateEnd,setDateEnd, GetPreformance}) => {
    const Filter = ()=>{
        GetPreformance()
    }

    return (
        <Container>
            <Title>Preformance</Title>
            <SubTitle>Start</SubTitle>
            <DateInput type="date" value={dateStart}  onChange={v=>setDateStart(v.target.value)}/>
            <SubTitle>Start</SubTitle>
            <DateInput type="date" value={dateEnd}  onChange={v=>setDateEnd(v.target.value)}/>
            <FilterBtn onClick={Filter}><MdFilterList size={30} color="white"/></FilterBtn>
        </Container>

    );
}

export default TopFilter;