import styled from "styled-components";

const TextArea = styled.textarea`
    color: #172b4d;
    box-sizing: border-box;
    -webkit-appearance: none;
    border-radius: 3px;
    display: block;
    line-height: 20px;
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    padding: 6px 8px;
    margin: 0 0 4px;
    width: 100%;
    border: none;
    height: ${props => props.small ? "32px" : "90px"};
`

export default TextArea;