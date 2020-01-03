import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Card from './Card';
import CardComposer from './CardComposer';

import { Droppable } from 'react-beautiful-dnd';

const List = (props) => {
    const board = props.board;
    const setBoard = props.setBoard;
    const listId = props.listId;
    const list = props.list;
    const [cards, setCards] = useState(props.cards);

    const [isComposing, setIsComposing] = useState(false);

    // Sync props when parent props changed
    useEffect(()=> {
        setCards(props.cards);
    }, [props.cards])

    // useEffect(()=> {
    //     console.log('CARD is updating');
    // }, [cards])


    function openCardComposer() {
        if (!isComposing) {
            setIsComposing(true);
        }
    }

    // Render multiple cards
    const renderListCards = props.cards.map((card, index) => {
        // console.log("CARDS: " + index);
        // console.log(card);
        
        return (<Card
            card={card}
            cards={cards}
            cardId={card.id}
            setCards={setCards}
            index={index}
            key={card.id}
        />)
    })

    return (
        <StyledList>
            <div className="list-wrapper">
                <div className="list-content">
                    <div className="list-header">
                        <div className="list-header-title">{list.title}</div>
                    </div>
                    <div className="list-cards">
                        <Droppable droppableId={list.id}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {renderListCards}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                    {
                        isComposing ?
                            (<CardComposer
                                listId={listId}
                                isComposing={isComposing}
                                setIsComposing={setIsComposing}
                                board={board}
                                setBoard={setBoard}
                            />) :
                            (<div className="card-composer-container" onClick={openCardComposer}>
                                <span>+ Add another card</span>
                            </div>)
                    }
                </div>
            </div>
        </StyledList>
    )
}

const StyledList = styled.div`
    .list-wrapper {
        width: 272px;
        margin: 0 4px;
        height: 100%;
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
        white-space: nowrap;
    }

    .list-content {
        padding: 8px;
        background-color: #ebecf0;
        border-radius: 3px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        position: relative;
        white-space: normal;
    }

    .list-header {
        flex: 0 0 auto;
        margin-bottom: 10px;
        padding: 0 8px;
        position: relative;
        min-height: 20px;
    }

    .list-header-title {
        font-size: 14px;
        line-height: 20px;
        color: #172b4d;
        font-weight: 600;
    }

    .board-title {
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        line-height: 32px;
        padding: 0 12px;
    }

    .list-cards {
        padding-bottom: 10px;
    }

    .card-composer-container {
        color: #5e6c84;
        border-radius: 3px;
        flex-grow: 1;
        margin: 5px;
        padding: 5px 8px;
        cursor: pointer;

        &:hover {
            background-color: rgba(9,30,66,.08);
            color: #172b4d;
        }
    }

`

export default List;