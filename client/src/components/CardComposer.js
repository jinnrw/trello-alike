import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { Button, ButtonClose } from "../styled-components/Buttons"

const CardComposer = (props) => {
    const listId = props.listId;
    const listCards = props.listCards;
    const setListCards = props.setListCards;
    const isComposing = props.isComposing;
    
    let textareaRef = useRef();

    useEffect(() => {
        if (isComposing) {
            textareaRef.current.focus();
        }
    }, [isComposing])

    // POST Method
    function postAddCard(listId, card) {
        fetch('/api/addCard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                listId: listId,
                card: card
            })
        }).then((res) => res.json())
            .then((data) => {
                setListCards(data);
            })
            .catch((err) => console.log(err))
    }

    function closeComposer() {
        props.setIsComposing(false);
    }

    function addNewCard() {
        if (!(textareaRef.current.value === "")) {
            let newCard = {
                id: listCards[listCards.length - 1].id + 1,
                title: textareaRef.current.value,
                completed: false
            };
            postAddCard(listId, newCard);
            closeComposer();
        }
    }

    function onkeydownTextArea(e) {
        if (e.keyCode === 13) {
            addNewCard();
            e.preventDefault();
        } else if (e.keyCode === 27) { // Escape key
            closeComposer();
            e.preventDefault();
        }
    }

    return (
        <StyledCardComposer>
            <div className="list-card">
                <textarea
                    ref={textareaRef}
                    placeholder="Enter a title for this card…"
                    onKeyDown={(e) => { onkeydownTextArea(e) }}></textarea>
            </div>
            <div className="composer-controls">
                <Button onClick={addNewCard}>Add Card</Button>
                <ButtonClose onClick={closeComposer}>&#10006;</ButtonClose>
            </div>
        </StyledCardComposer>
    )
}

const StyledCardComposer = styled.div`
    padding: 0 4px;



    .list-card {
        padding: 5px;
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
    }

    textarea {
        width: 100%;
        resize: none;
        background: none;
        border: none;
        box-shadow: none;
        height: auto;
        margin-bottom: 4px;
        max-height: 162px;
        min-height: 54px;
        overflow-y: auto;
    }

    .composer-controls {
        display: flex;

        > * {
            margin-right: 6px;
        }
    }



`

export default CardComposer;