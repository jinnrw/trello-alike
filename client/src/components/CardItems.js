import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import TextArea from "../styled-components/TextArea"
import { Button } from "../styled-components/Buttons"

const CardItems = (props) => {
    // init states
    const [isEditingCard, setIsEditingCard] = useState(false);
    const [currentEditingIndex, setCurrentEditingIndex] = useState(null);
    const [newCardItems, setNewCardItems] = useState([...props.cardItems]);

    useEffect(() => {
        if (isEditingCard && !(currentEditingIndex === null)) {
            quickEditorTextarea.current.focus();
            quickEditorTextarea.current.value = props.cardItems[currentEditingIndex].title;
        }
    }, [currentEditingIndex])

    let quickEditorTextarea = useRef();

    function editCardTitle(index) {
        if (!isEditingCard) {
            setIsEditingCard(true);
            setCurrentEditingIndex(index);
        }
    }

    function updateCardItem(e) {
        quickEditorTextarea.current.value = e.target.value;
    }

    function onkeydownTextArea(e, index) {
        if (e.keyCode === 13) {
            saveEditor();
            e.preventDefault();
        } else if (e.keyCode === 27) { // Escape key
            cancelEditor();
            e.preventDefault();
        }

    }

    function saveEditor() {
        newCardItems[currentEditingIndex].title = quickEditorTextarea.current.value
        setNewCardItems(newCardItems);
        setIsEditingCard(false);
        setCurrentEditingIndex(null);
    }

    function cancelEditor() {
        // return previous state
        setNewCardItems(prev => prev);
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
                ref={quickEditorTextarea}
                onChange={(e) => {
                    updateCardItem(e);
                }}
                onKeyDown={(e) => {
                    onkeydownTextArea(e)
                }} />
            <Button onClick={() => { saveEditor() }}>Save</Button>
        </div>)


    // Return all card items
    const cardItems = props.cardItems.map((item, index) =>
        (isEditingCard ?
            (index === currentEditingIndex ?
                quickEditor(index) :
                singleCardItem(item, index)
            )
            : singleCardItem(item, index)
        )
    )

    return (
        <StyledCardItems>
            {cardItems}
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