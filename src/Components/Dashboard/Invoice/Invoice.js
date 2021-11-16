import styled from "styled-components";


export const Container = styled.div`
    height: 80px;
    background-color: #eee;
    margin-bottom: 3px;
    border-left: 5px solid ${props=>props.attached?"#32a852":"#a83232"};
`;