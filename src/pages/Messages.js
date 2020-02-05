import React from 'react'
import styled from 'styled-components/macro';

export const MessageContainer = styled.div `
    width: 50vw;
    height: 75vh;
    background-color: #2A9D8F;
    background-image: linear-gradient(#2A9D8F, #63C7B2);
    border-radius: 10px;
    box-shadow: 25px 25px 0 0 #263D42;
    font-weight: bold;
    color: #263D42;
    text-shadow: 1px 1px #2A9D8F; 
    letter-spacing: 1px;
    line-height: 1.5;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: space-around;
    flex-direction: column;
`

const Messages =() =>{


    return(
        <MessageContainer>
            These are the messages!

        </MessageContainer>
        
    )
}

export default Messages