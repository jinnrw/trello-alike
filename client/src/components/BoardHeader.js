import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

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
            boardTitleRef.current.focus();
            document.addEventListener("mousedown", editBoardTitle);
        } else {
            setBoard(prev => prev);
            document.removeEventListener("mousedown", editBoardTitle);
        }
    }, [isEditingTitle])

    //  Fetch API
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
                let newBoard = {...board};
                newBoard.boardTitle = e.target.value;
                postBoardTitle(newBoard);
            }
        }
    }

    return (
        <div className={className}>
            <div>
                {!isEditingTitle ?
                    <span
                        className="board-title"
                        onClick={() => {
                            setIsEditingTitle(true);
                        }}>{board.boardTitle}</span> :
                    <div>
                        <input
                            ref={boardTitleRef}
                            defaultValue={board.boardTitle}
                            onChange={(e) => {
                                handleBoardTitle(e);
                            }}
                            onKeyDown={(e) => {
                                onkeydown(e);
                            }}></input>
                    </div>
                }
            </div>
        </div>
    )
}

const BoardHeader = styled(BoardHeaderDiv)`
    display: flex;
    padding: 8px 4px 4px 8px;

    .board-title {
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        line-height: 32px;
        padding: 0 12px;
        cursor: pointer;
    }
`

export default BoardHeader;