import React from 'react';
import styled from "styled-components";

// The styled method works perfectly on all of your own or any third-party component, as long as they attach the passed className prop to a DOM element.
const HeaderDiv = ({className}) => {
    return (
        <header className={className}>
            <div>
                <img src="https://avatars0.githubusercontent.com/u/17697287?s=460&v=4" alt="" className="logo" />
            </div>
        </header>
    )
}

const Header = styled(HeaderDiv)`
    display: flex;
    justify-content: center;
    height: 32px;
    min-height: 40px;
    padding: 4px;
    background: rgba(0,0,0,.15);

    .logo {
        height: 100%;
    }
`

export default Header;