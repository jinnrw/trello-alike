import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Input from "../styled-components/Input"

// The styled method works perfectly on all of your own or any third-party component, as long as they attach the passed className prop to a DOM element.
const BoardHeaderDiv = ({ className }) => {
    const [board, setBoard] = useState({});
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const boardTitleRef = useRef();

    // componentDidmount, use [] as second argument
    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(data => {
                setBoard(data);
            })
    }, [])

    useEffect(() => {
        if (isEditingTitle) {
            boardTitleRef.current.select();
            document.addEventListener("mousedown", editBoardTitle);
        } else {
            setBoard(prev => prev);
            document.removeEventListener("mousedown", editBoardTitle);
        }
    }, [isEditingTitle])

    //getBoard  Fetch API
    function postBoardTitle(newBoard) {
        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBoard)
        }).then((res) => res.json())
            .then((data) => {
                setBoard(data);
            })
            .catch((err) => console.log(err))
    }

    const editBoardTitle = e => {
        if (boardTitleRef.current && boardTitleRef.current.contains(e.target)) {
            setIsEditingTitle(true);
        } else {
            setIsEditingTitle(false);
        }
    }

    function handleBoardTitle(e) {
        boardTitleRef.current.value = e.target.value;
    }

    function onkeydown(e) {
        if (e.keyCode === 13 || e.keyCode === 27) {
            e.preventDefault();
            setIsEditingTitle(false);
            setBoard(prev => prev);

            if (e.keyCode === 13) {
                let newBoard = { ...board };
                newBoard.boardTitle = e.target.value;
                postBoardTitle(newBoard);
            }
        }
    }

    return (
        <div className={className}>
            <div className={`board-title ${isEditingTitle ? "is-editing" : ""}`}>
                {!isEditingTitle ?
                    <span
                        onClick={() => {
                            setIsEditingTitle(true);
                        }}>{board.boardTitle}</span> :
                    <Input
                        ref={boardTitleRef}
                        defaultValue={board.boardTitle}
                        onChange={(e) => {
                            handleBoardTitle(e);
                        }}
                        onKeyDown={(e) => {
                            onkeydown(e);
                        }}></Input>
                }
            </div>
        </div>
    )
}

const BoardHeader = styled(BoardHeaderDiv)`
    display: flex;
    padding: 8px 12px;
        
    .board-title {
        background: transparent;
        cursor: pointer;
        font-size: 18px;
        font-weight: 700;
        line-height: 32px;
        color: #fff;
        padding: 0 12px;
        text-decoration: none;
        max-width: calc(100% - 24px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: 3px;
    
        &:hover {
            background-color: hsla(0,0%,100%,.32);
        }

        &.is-editing {
            color: #000;
            background-color: #fff;
            border: 0;
            font-weight: 700;
            font-size: 18px;
            height: 32px;
            margin: 0;
            box-shadow: inset 0 0 0 2px #dfe1e6;
            cursor: default;
        }

        input {
            font-size: 18px;
            font-weight: 700;
        }
    }
`

export default BoardHeader;