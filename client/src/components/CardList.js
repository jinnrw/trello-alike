import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import CardItem from './CardItem';
import CardComposer from './CardComposer';

import { Droppable } from 'react-beautiful-dnd';

const CardList = (props) => {
    let list_id = props.list_id;
    let list_title = props.list_title;
    let list_items = props.list_items;

    const [isComposing, setIsComposing] = useState(false);
    const [cardItems, setCardItems] = useState(list_items);

    function openCardComposer() {
        if (!isComposing) {
            setIsComposing(true);
        }
    }

    // Render multiple cards
    let renderCardItems = cardItems.map((item, index) => (
        <CardItem
            item={item}
            index={index}
            key={index} />
    ))

    return (
        <StyledCardList>
            <div className="list-wrapper">
                <div className="list-content">
                    <div className="list-header">
                        <div className="list-header-title">{list_title}</div>
                    </div>
                    <div className="list-cards">
                        <Droppable droppableId={`${list_id}`}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {renderCardItems}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                    {
                        isComposing ?
                            <CardComposer
                                isComposing={isComposing}
                                setIsComposing={setIsComposing}
                                cardItems={cardItems}
                                setCardItems={setCardItems} /> :
                            (<div className="card-composer-container" onClick={openCardComposer}>
                                <span>+ Add another card</span>
                            </div>)
                    }
                </div>
            </div>
        </StyledCardList>
    )
}

const StyledCardList = styled.div`
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

const StyledList = styled.div`
`

export default CardList;