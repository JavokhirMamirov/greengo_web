import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import PreformanceChart from '../Components/Preformance/Chart';
import Summary from '../Components/Preformance/Summary';
import TopFilter from '../Components/Preformance/TopFilter';
import api from '../api/api';


const Preformance = () =>{
    const new_date_end = new Date();
    const new_date_start = new Date(new_date_end.getFullYear(),new_date_end.getMonth(), new_date_end.getDate()-3);
    const date_end = `${new_date_end.getFullYear()}-${new_date_end.getMonth()+1}-${new_date_end.getDate()}`
    const date_start = `${new_date_start.getFullYear()}-${new_date_start.getMonth()+1}-${new_date_start.getDate()}`
    const [dateStart, setDateStart] = useState(date_start);
    const [dateEnd, setDateEnd] = useState(date_end);
    const [preformancrData, setPreformanceData] = useState({});



    const GetPreformance = async()=>{
        const response = await api.get(`/preformance/?date_start=${dateStart}&date_end=${dateEnd}`)
        console.log(response);
        if (response.data){
            setPreformanceData(response.data)
        }
    }
    useEffect(() => {
        GetPreformance();
    }, [])


    return (
        <Container>
            <TopFilter 
                dateStart={dateStart}
                setDateStart={setDateStart}
                dateEnd={dateEnd}
                setDateEnd={setDateEnd}
                GetPreformance={GetPreformance}
                />
            <Summary boards={preformancrData.board}/>
            <PreformanceChart title="Dispatcher's Preformance" datas={preformancrData.dispatcher} />
            <PreformanceChart 
                title="Driver's Preformance" 
                datas={preformancrData.driver}
                color="#1467ef"
                />
        </Container>
    );
}

export default Preformance;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px;
    margin-left: 240px;
    margin-right: 30px;
    @media (max-width:968px){
        margin-left: 30px;
    }
`;