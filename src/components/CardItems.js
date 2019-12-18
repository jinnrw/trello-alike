import React from 'react';
import styled from "styled-components";

// The styled method works perfectly on all of your own or any third-party component, as long as they attach the passed className prop to a DOM element.
const CardItems = (props) => {
    const cardItems = props.cardItems.map((item, index) => 
        (<div className="list-card" key={index}>
            <div className="list-card-detail">{item.title}</div>
        </div>)
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
    }

    .list-card-detail {
        padding: 6px 8px;
        margin: 0 0 4px;
        overflow: hidden;
        text-decoration: none;
        word-wrap: break-word;
    }

`

export default CardItems;