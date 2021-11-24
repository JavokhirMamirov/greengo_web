import React from 'react'
import { Board, BoardSumma, Container, Title } from './Summary';


const Summary = ({boards}) => {
    return (
        <Container>
            {boards?.map((board, index)=>(
                <Board key={index}>
                    <Title>{board.board} Load Board</Title>
                    <BoardSumma>{board.summa}$</BoardSumma>
                </Board>
            ))}
            
        </Container>

    );
}

export default Summary;