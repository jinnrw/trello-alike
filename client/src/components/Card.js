import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import TextArea from "../styled-components/TextArea"
import { Button } from "../styled-components/Buttons"
import { Draggable } from 'react-beautiful-dnd';

const Card = (props) => {
    const cardId = props.cardId;
    const cards = props.cards;
    const setCards = props.setCards;
    const [card, setCard] = useState(props.card);
    const [index, setIndex] = useState(props.index);

    const [isEditingCard, setIsEditingCard] = useState(false);
    const [currentEditingIndex, setCurrentEditingIndex] = useState(null);

    const [isPropsChanged, setIsPropsChanged] = useState(false);

    let textareaRef = useRef();

    // useEffect(() => {
    //     // setIsPropsChanged(true);
    //     // if (content.title !== props.content.title) {
    //         // setContent(props.content);
    //         console.log('content: '+content.title);
    //         console.log(props.content.title);
    //         setLisCards(props.cards);
    //     // }
    //     // setIndex(props.index);
    // }, [props.cards])

    // useEffect(() => {
    //     if (isPropsChanged) {
    //         // do something
    //         setIsPropsChanged(false);
    //     }
    // }, [isPropsChanged])

    useEffect(() => {
        if (isEditingCard && !(currentEditingIndex === null)) {
            textareaRef.current.focus();
            textareaRef.current.value = cards[currentEditingIndex].content;
        }
    }, [currentEditingIndex])

    // POST Method
    function postCardTitle(content) {
        fetch('/api/editcard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: cardId,
                content: content
            })
        }).then((res) => res.json())
            .then((data) => {
                let newCards = [...cards];
                for (let i = 0; i < newCards.length; i++) {
                    if (newCards[i].id === data.id) {
                        newCards[i].content = data.content;
                    }
                }
                setCards(newCards);
            })
            .catch((err) => console.log(err))
    }

    function editCardTitle(index) {
        if (!isEditingCard) {
            setIsEditingCard(true);
            setCurrentEditingIndex(index);
        }
    }

    function UpdateCard(e) {
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
        postCardTitle(textareaRef.current.value);
        reset();
    }

    function cancelEditor() {
        // return previous state
        setCards(prev => prev);
        reset();
    }

    function reset() {
        setIsEditingCard(false);
        setCurrentEditingIndex(null);
    }

    const quickEditor = (index) => (
        <div className="quick-card-editor" key={index}>
            <TextArea
                ref={textareaRef}
                onChange={(e) => {
                    UpdateCard(e);
                }}
                onKeyDown={(e) => {
                    onkeydownTextArea(e);
                }} />
            <Button onClick={() => { saveEditor() }}>Save</Button>
        </div>
    )

    return (
        <StyledCard>
            {isEditingCard ?
                (quickEditor(index))
                :
                // (<Draggable
                //     draggableId={content.id}
                //     index={index}
                // >
                //     {(provided, snapshot) => (
                //         <div
                //             className="list-card"
                //             {...provided.draggableProps}
                //             {...provided.dragHandleProps}
                //             ref={provided.innerRef}
                //         >
                //             <div className="list-card-detail">
                //                 <div>{content.title}</div>
                //                 <div>{content.id}</div>
                //                 <div className="edit-card"
                //                     onClick={() => {
                //                         editCardTitle(index);
                //                     }}>
                //                 </div>
                //             </div>
                //         </div>
                //     )}
                // </Draggable>)
                // (isPropsChanged ?
                //     (<div className="list-card">
                //         <div className="list-card-detail">
                //             <div>{content.title}</div>
                //             <div>{content.id}</div>
                //             <div className="edit-card"
                //                 onClick={() => {
                //                     editCardTitle(index);
                //                 }}>
                //             </div>
                //         </div>
                //     </div>)
                //     :
                //     (<Draggable
                //         draggableId={content.id}
                //         index={index}
                //     >
                //         {(provided, snapshot) => (
                //             <div
                //                 className="list-card"
                //                 {...provided.draggableProps}
                //                 {...provided.dragHandleProps}
                //                 ref={provided.innerRef}
                //             >
                //                 <div className="list-card-detail">
                //                     <div>{content.title}</div>
                //                     <div>{content.id}</div>
                //                     <div className="edit-card"
                //                         onClick={() => {
                //                             editCardTitle(index);
                //                         }}>
                //                     </div>
                //                 </div>
                //             </div>
                //         )}
                //     </Draggable>)
                // )
                (<Draggable
                    draggableId={card.id}
                    index={index}>
                    {(provided, snapshot) => (
                        <div
                            className="list-card"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            <div className="list-card-detail">
                                <div>{card.content}</div>
                                <div>{card.id}</div>
                                <div className="edit-card"
                                    onClick={() => {
                                        editCardTitle(index);
                                    }}>
                                </div>
                            </div>
                        </div>
                    )}
                </Draggable>)
            }
        </StyledCard>
    )
}

const StyledCard = styled.div`
    flex: 1 1 auto;
    margin-bottom: 0;
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

export default Card;