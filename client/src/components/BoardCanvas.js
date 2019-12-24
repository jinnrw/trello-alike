import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import CardList from './CardList';
import AddList from './AddList';


const BoardCanvas = () => {
    const [lists, setLists] = useState([]);

    // componentDidmount, use [] as second argument to prevent looping
    useEffect(() => {
        fetch('/api/lists')
            .then(res => res.json())
            .then(data => {
                setLists(data);
            })
    }, [])

    // Render multiple lists
    let renderLists = lists.map((list, index) => (
        <CardList
            list_id={list.list_id}
            list_title={list.list_title}
            list_items={list.list_items}
            key={index} />
    ))

    return (
        <StyledBoardCanvas id="board">
            {renderLists}
            {<AddList 
                lists={lists}
                setLists={setLists}/>}
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