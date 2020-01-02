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
                console.log(data);
            })
    }, [])

    // POST Method
    function postLists(newLists) {
        fetch('/api/updateLists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newLists)
        }).then((res) => res.json())
            .then((data) => {
                setBoard(data);
                console.log("set lists");

            })
            .catch((err) => console.log(err))
    }

    // Render multiple lists
    const renderBoard = board.listOrder.map((listId) => {
        const list = board.lists[listId];
        const cards = list.cardIds.map(cardId => board.cards[cardId]);

        console.log("cards");
        console.log(cards);
        
        return (<List
            key={list.id}
            listId={listId}
            list={list}
            cards={cards}
        />)
    })

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;
        console.log(result);

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
        // if (source.droppableId === destination.droppableId) {
        //     const list = lists[source.droppableId];
        //     const newListCards = Array.from(list.listCards);
        //     const [removedCard] = newListCards.splice(source.index, 1);
        //     newListCards.splice(destination.index, 0, removedCard);

        //     console.log(newListCards);

        //     const newList = { ...list, listCards: newListCards };
        //     const newLists = [...lists];
        //     newLists[source.droppableId] = newList;

        //     console.log(newLists);

        //     postLists(newLists);
        //     // setBoard(newLists);
        // }
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
        console.log(result);

    }

    return (
        <StyledBoardCanvas id="board">
            <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
                {renderBoard}
                {/* {renderListCards} */}
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