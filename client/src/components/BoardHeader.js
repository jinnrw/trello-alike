import React, {useState, useEffect} from 'react';
import styled from "styled-components";

// The styled method works perfectly on all of your own or any third-party component, as long as they attach the passed className prop to a DOM element.
const BoardHeaderDiv = ({ className }) => {
    const [res, setRes] = useState({});

    // componentDidmount, use [] as second argument
    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(data => {
                setRes(data);
            })
    }, [])

    return (
        <div className={className}>
            <div>
                <span className="board-title">{res.title}</span>
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
    }
`

export default BoardHeader;