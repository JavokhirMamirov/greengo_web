import React from 'react'
import { ChartContainer, ChartDataContainer, ChartSpan, Container, ItemContainer, Name, Title, UserContainer } from './Chart';
import { MdAccountCircle } from "react-icons/md";

const PreformanceChart = ({title, color, datas}) =>{
    const get_avarege = (avrage, datas)=>{
        let max_av = avrage
        for(var dt of datas){
            if (dt.avrage > max_av){
                max_av = dt.avrage;
            }
        }
        return (max_av/avrage)*80
    }
    return (
        <Container>
            <Title>{title}</Title>
            <ChartContainer>
                {datas?.map((data, index)=>(
                    <ItemContainer key={index}>
                        <UserContainer>
                            <MdAccountCircle size={28} color="#666"/>
                            <Name>{data.name}</Name>
                        </UserContainer>
                        <ChartDataContainer>
                            <ChartSpan color={color} width={get_avarege(data.avrage, datas)}>Miles:{data.miles} |
                             Gross: {data.gross}$ |  Avrage: {data.avrage}$ </ChartSpan>
                        </ChartDataContainer>
                    </ItemContainer>
                ))}
                
                
            </ChartContainer>
        </Container>
    );
}

export default PreformanceChart;