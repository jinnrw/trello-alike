import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import TextArea from "../styled-components/TextArea"
import { Button } from "../styled-components/Buttons"

const CardItems = (props) => {
    const cardItems = props.cardItems;
    const setCardItems = props.setCardItems;
    const [isEditingCard, setIsEditingCard] = useState(false);
    const [currentEditingIndex, setCurrentEditingIndex] = useState(null);

    let textareaRef = useRef();

    useEffect(() => {
        if (isEditingCard && !(currentEditingIndex === null)) {
            textareaRef.current.focus();
            textareaRef.current.value = cardItems[currentEditingIndex].title;
        }
    }, [currentEditingIndex])

    function editCardTitle(index) {
        if (!isEditingCard) {
            console.log(cardItems);
            
            setIsEditingCard(true);
            setCurrentEditingIndex(index);
        }
    }

    function updateCardItem(e) {
        textareaRef.current.value = e.target.value;
    }

    function onkeydownTextArea(e) {
        if (e.keyCode === 13) {
            saveEditor();
            e.preventDefault();
        } else if (e.keyCode === 27) { // Escape key
            cancelEditor();
            e.preventDefault();
        }
    }

    function saveEditor() {
        cardItems[currentEditingIndex].title = textareaRef.current.value;
        setCardItems(cardItems);
        reset();
    }

    function cancelEditor() {
        // return previous state
        setCardItems(prev => prev);
        reset();
    }

    function reset() {
        setIsEditingCard(false);
        setCurrentEditingIndex(null);
    }

    const singleCardItem = (item, index) =>
        (<div className="list-card" key={index} >
            <div className="list-card-detail">
                <div>{item.title}</div>
                <div className="edit-card"
                    onClick={() => {
                        editCardTitle(index);
                    }}>
                </div>
            </div>
        </div >)

    const quickEditor = (index) =>
        (<div className="quick-card-editor" key={index}>
            <TextArea
                ref={textareaRef}
                onChange={(e) => {
                    updateCardItem(e);
                }}
                onKeyDown={(e) => {
                    onkeydownTextArea(e);
                }} />
            <Button onClick={() => { saveEditor() }}>Save</Button>
        </div>)

    return (
        <StyledCardItems>
            {/* Return all card items*/}
            {
                cardItems.map((item, index) =>
                    (isEditingCard ?
                        (index === currentEditingIndex ?
                            quickEditor(index) :
                            singleCardItem(item, index)
                        )
                        : singleCardItem(item, index)
                    )
                )
            }
        </StyledCardItems>
    )
}

const StyledCardItems = styled.div`
    flex: 1 1 auto;
    margin-bottom: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 4px;
    z-index: 1;
    min-height: 0;

    .list-card {
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 0 rgba(9,30,66,.25);
        cursor: pointer;
        display: block;
        margin-bottom: 8px;
        max-width: 300px;
        min-height: 20px;
        position: relative;
        text-decoration: none;
        z-index: 0;

        &:hover {
            background-color: #f4f5f7;
        }

        &:hover .edit-card {
            display: block;
        }
    }

    .list-card-detail {
        display: flex;
        justify-content: space-between;
        padding: 6px 8px;
        margin: 0 0 4px;
        overflow: hidden;
        text-decoration: none;
        word-wrap: break-word;
    }

    .edit-card {
        display: none;
        width: 20px;
        height: 20px;
        background-color: #f4f5f7;
        background-clip: padding-box;
        background-origin: padding-box;
        border-radius: 3px;
        opacity: .8;
        padding: 4px;
        position: absolute;
        right: 2px;
        top: 2px;
        background: url(./icon-pencil.svg) 50% 50% no-repeat;
        background-size: 16px;

        &:hover {
            background-color: #ebecf0;
            opacity: 1;
        }
    }

    .quick-card-editor {
        overflow: hidden;
        overflow-wrap: break-word;
        resize: none;
        background: #ebecf0;
        
        button {
            margin: 8px;
        }
    }

`

export default CardItems;