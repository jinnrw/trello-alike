import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import CardLists from './CardLists';
import CardItems from './CardItems';
import CardComposer from './CardComposer';

const BoardCanvas = () => {
    const [lists, setLists] = useState([]);

    // componentDidmount, use [] as second argument
    useEffect(() => {
        fetch('/api/lists')
            .then(res => res.json())
            .then(data => {
                setLists(data);
            })
    }, [])

    let renderLists = lists.map((list, index) => (
        <CardLists
            list_title={list.list_title}
            list_items={list.list_items}
            key={index} />

    ))

    return (
        <StyledBoardCanvas id="board">
            {renderLists}
        </StyledBoardCanvas>
    )
}

const StyledBoardCanvas = styled.div`
    display: flex;
    padding: 8px 4px 4px 8px;
`

export default BoardCanvas;