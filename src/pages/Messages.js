import React from 'react'
import styled from 'styled-components/macro';

export const MessageContainer = styled.div `
    width: 70%;
    height: 75%;
    background-color: #2A9D8F;
    background-image: linear-gradient(#2A9D8F, #63C7B2);
    border-radius: 10px;
    box-shadow: 25px 25px 0 0 #263D42;
    font-weight: bold;
    color: #263D42;
    text-shadow: 1px 1px #263D42; 
    letter-spacing: 1px;
    line-height: 1.5;
    font-size: .9rem;
    margin: 50px;
    padding: 0 20px 20px 20px;
   
`
const StyleH2 = styled.h2 `
    // background-color: #2A9D8F;
    // background-image: linear-gradient(#2A9D8F, #263D42);
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 10px;
`
const StyleH1 = styled.h1 `
    background-color: #F05D5E;
    background-image: linear-gradient(#F05D5E, #FF5A1E);
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 1.7rem;
    width: 100%;
    font-weight: bolder;
    text-shadow: 1.5px 1.5px #2A9D8F; 
    color: yellow;
`

const MatchItem = styled.div `
    width: 90%;
    
    border: 2px solid #263D42;
    border-radius: 10px;
    margin: 5px;
    background-color: rgba(129, 232, 210, 0.412);
    font-size: 1rem;
    color: white;
    
`
const AStyling = styled.a `
    width: 300px;
    font-size: 1.2rem;
    padding: 5px;
    text-decoration: none;
    color: #FF5A1E;
`
const ScrollDiv = styled.div `
    overflow-y: scroll;
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

`
const MessageLayout = styled.div `
    text-align: left;
    padding: 15px;
`


const dummydata2 = [
    {
        name: "Cigna",
        company_id: 1,
        job_title: "Web Developer",
        message: "We saw your resume and think you would be a great fit. When can we schedule an interview?"
    },
    {
        name: "Salesforce",
        company_id: 2,
        job_title: "Frontend Developer",
        message: "We were impressed by your credentials and would like to discuss the position further. Please reach out to our hiring manager at xxxxxxx@gmail.com to schedule a meeting."
    },
    {
        name: "Google",
        company_id: 3,
        job_title: "Frontend Developer",
        message: "Thank you for your application. Unfortunately we are have filled the position, but we will keep your resume on file."
    },

]
const Messages =() =>{
    return(
        <MessageContainer>
            <StyleH1>Your Messages</StyleH1>
            <ScrollDiv>
            {dummydata2.map(item =>{
                    return(
                        <MatchItem>
                            <MessageLayout>
                                <StyleH2><AStyling href="/Messages">{item.name} : {item.job_title}</AStyling></StyleH2>
                                <p>{item.message}</p>
                            </MessageLayout>
                        </MatchItem>
                        
                    );
                })}
            </ScrollDiv>

        </MessageContainer>
        
    )
}

export default Messages