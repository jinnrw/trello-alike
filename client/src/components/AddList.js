import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { Button, ButtonClose } from "../styled-components/Buttons"
import TextArea from "../styled-components/TextArea"

const AddList = (props) => {
    const lists = props.lists;
    const setLists = props.setLists;

    const [isAddingList, setIsAddingList] = useState(false);
    const textareaRef = useRef();

    useEffect(() => {
        if (isAddingList)
            textareaRef.current.focus();
    }, [isAddingList])

    function saveAddList() {
        if (!(textareaRef.current.value === "")) {
            let newList = {
                list_id: lists[lists.length-1].list_id + 1,
                list_title: textareaRef.current.value,
                list_items: []
            };

            setLists([...lists, newList]);
            setIsAddingList(false);
            console.log(lists);
            
        }
    }

    function onkeydownTextArea(e) {
        if (e.keyCode === 13) {
            saveAddList();
            e.preventDefault();
        } else if (e.keyCode === 27) { // Escape key
            setIsAddingList(false);
            e.preventDefault();
        }
    }

    let addListEditor = () => (
        (<div className="add-list-editor">
            <TextArea
                small
                ref={textareaRef}
                placeholder="Enter list title..."
                onKeyDown={(e) => { onkeydownTextArea(e) }}></TextArea>
            <div className="add-list-controls">
                <Button onClick={saveAddList}>Add Card</Button>
                <ButtonClose onClick={() => {
                    setIsAddingList(false);
                }}>&#10006;</ButtonClose>
            </div>
        </div>)
    )

    return (
        <StyledAddList>
            <div className={`add-list-wrapper ${!isAddingList ? "is-idle" : ""}`}
                onClick={() => {
                    if (!isAddingList)
                        setIsAddingList(true);
                }}>
                {isAddingList ?
                    addListEditor()
                    :
                    (<div>+ Add another list</div>)
                }
            </div>
        </StyledAddList>
    )
}

const StyledAddList = styled.div`
    .add-list-wrapper {
        background-color: #ebecf0;
        border-radius: 3px;
        padding: 10px 8px;
        width: 272px;
        margin: 0 4px;
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
        white-space: nowrap;
        color: #fff;
        
        &.is-idle {
            background-color: hsla(0,0%,100%,.24);
            cursor: pointer;
            
            &:hover {
                background-color: hsla(0,0%,100%,.32);
            }
        }
    }

    .add-list-controls {
        display: flex;

        button {
            margin-right: 6px;
        }
    }

    .add-list-editor {

        textarea {
            margin-bottom: 8px;
            box-shadow: inset 0 0 0 2px #0079bf;
        }
    }
`

export default AddList;