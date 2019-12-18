import React, { useRef, useState } from 'react';
import styled from "styled-components";
import CardLists from './CardLists';
import CardItems from './CardItems';
import CardComposer from './CardComposer';

const responseData = [{
    list_title: "To Do",
    list_items: [
        {
            title: "do this",
            completed: false,
        },
        {
            title: "do that",
            completed: false,
        },
        {
            title: "push to github",
            completed: false,
        }
    ]
}, {
    list_title: "Done",
    list_items: [
        {
            title: "buy milk",
            completed: false,
        },
        {
            title: "overcooked dinner",
            completed: false,
        },
        {
            title: "save your code",
            completed: false,
        }
    ]
}
]


const BoardCanvas = () => {
    let renderLists = responseData.map((list, index) => (
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