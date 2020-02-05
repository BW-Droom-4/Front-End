import React from 'react'
import styled from 'styled-components'

const Messages =() =>{


    const MessageContainer = styled.div`
    width: 300px;
    height: 600px;
    position: absolute;
    display: flex;
    left: 20px;
    top: 30%;
    `

    return(
        <MessageContainer>
            These are the messages!

        </MessageContainer>
        
    )
}

export default Messages