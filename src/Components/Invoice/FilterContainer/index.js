import React from 'react'
import { ButtonFilter, CalcItem, Container, FilterByContainer, ItemText, Text } from './FilterContainer';
import {MdOutlineRemove} from 'react-icons/md';
const FilterContainer = () =>{
    return (
        <Container>
            <FilterByContainer>
                <Text>Filter By</Text>
                <ButtonFilter>Dispatcher</ButtonFilter>
                <ButtonFilter>Loadboard</ButtonFilter>
            </FilterByContainer>
            <FilterByContainer>
                <Text>Calculate to Owner</Text>
                <CalcItem>
                    <MdOutlineRemove size={30} color="#054a48" />
                    <ItemText>DAT Fee</ItemText>
                </CalcItem>
                <CalcItem>
                    <MdOutlineRemove size={30} color="#054a48" />
                    <ItemText>AMZN Fee</ItemText>
                </CalcItem>
                <CalcItem>
                    <MdOutlineRemove size={30} color="#054a48" />
                    <ItemText>INSURANCE</ItemText>
                </CalcItem>
                <CalcItem>
                    <MdOutlineRemove size={30} color="#054a48" />
                    <ItemText>LogBook</ItemText>
                </CalcItem>
                <CalcItem>
                    <MdOutlineRemove size={30} color="#054a48" />
                    <ItemText>Fuel - 1</ItemText>
                </CalcItem>
                <ButtonFilter>Add Expences</ButtonFilter>
            </FilterByContainer>
            
        </Container>
    );
}

export default FilterContainer;