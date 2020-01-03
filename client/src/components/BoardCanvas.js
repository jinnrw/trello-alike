import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import List from './List';
import AddList from './AddList';
import { DragDropContext } from 'react-beautiful-dnd';

const BoardCanvas = () => {
    const [board, setBoard] = useState({
        cards: {},
        lists: {},
        listOrder: []
    });

    // componentDidmount, use [] as second argument to prevent looping
    useEffect(() => {
        fetch('/api/lists')
            .then(res => res.json())
            .then(data => {
                setBoard(data);
                // console.log(data);
            })
    }, [])

    useEffect(()=> {
        console.log('board is updating');
        
    },[board])

    // POST Method
    function postLists(listId, cardIds) {
        fetch('/api/updateLists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                listId: listId,
                cardIds: cardIds
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log("lists updated in db");
            })
            .catch((err) => console.log(err))
    }

    // Render multiple lists
    const renderBoard = board.listOrder.map((listId) => {
        const list = board.lists[listId];
        const cards = list.cardIds.map(cardId => board.cards[cardId]);

        // console.log(listId + ": cards ");
        // console.log(cards);
        
        return (<List
            key={list.id}
            listId={listId}
            list={list}
            cards={cards}
            board={board}
            setBoard={setBoard}
        />)
    })

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;
        // console.log(result);

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId && destination.index === source.index
        ) {
            return;
        }

        // Reorder within the same list
        if (source.droppableId === destination.droppableId) {
            const listId = source.droppableId;
            const cardIds = board.lists[listId].cardIds;
            const newCardIds = [...cardIds];
            const [removedCard] = newCardIds.splice(source.index, 1);
            newCardIds.splice(destination.index, 0, removedCard);

            postLists(listId, newCardIds);
            
            let newBoard = {...board};
            newBoard.lists[listId].cardIds = newCardIds;
            setBoard(newBoard);
            console.log("DRAG END");
        }

        // Reorder within the same list
        // if (sourceId === destinationId) {
        //     const newCards = Array.from(state[sourceId].cards);
        //     const [removedCard] = newCards.splice(sourceIndex, 1);
        //     newCards.splice(destinationIndex, 0, removedCard);
        //     return {
        //         ...state,
        //         [sourceId]: { ...state[sourceId], cards: newCards }
        //     };
        // }

        // const sourceCards = Array.from(state[sourceId].cards);
        // const [removedCard] = sourceCards.splice(sourceIndex, 1);
        // const destinationCards = Array.from(state[destinationId].cards);
        // destinationCards.splice(destinationIndex, 0, removedCard);
        // return {
        //     ...state,
        //     [sourceId]: { ...state[sourceId], cards: sourceCards },
        //     [destinationId]: { ...state[destinationId], cards: destinationCards }
        // };
    }

    const onDragStart = result => {
    }

    return (
        <StyledBoardCanvas id="board">
            <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
                {renderBoard}
                {<AddList
                    board={board}
                    setBoard={setBoard} />}
            </DragDropContext>
        </StyledBoardCanvas>
    )
}

const StyledBoardCanvas = styled.div`
            display: flex;
            user-select: none;
            white-space: nowrap;
            margin-bottom: 8px;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 8px;
            position: absolute;
            bottom: 0;
            left: 0;
            height: calc(100vh - 120px);
            width: calc(100% - 16px);
        `

export default BoardCanvas;