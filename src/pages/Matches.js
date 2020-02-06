import React from 'react'
import styled from 'styled-components'

export const MessageContainer = styled.div `
    width: 70%;
    height: 75%;
    background-color: #2A9D8F;
    background-image: linear-gradient(#2A9D8F, #63C7B2);
    border-radius: 10px;
    box-shadow: 25px 25px 0 0 #263D42;
    font-weight: bold;
    color: #263D42;
    text-shadow: 1px 1px #2A9D8F; 
    letter-spacing: 1px;
    line-height: 1.5;
    font-size: .9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 50px;
    padding: 20px;
`
const StyleH2 = styled.h2 `
    font-size: 1.2rem;
    background-color: #F05D5E;
    background-image: linear-gradient(#F05D5E, #FF5A1E);
    border-radius: 10px;
    padding: 5px;
`
const MatchItem = styled.div `
    width: 80%;
    
`

const dummydata = [
    {name: "Cigna",
    company_id: 1,
    job_title: "Web Developer"},
    {name:"Salesforce",
    company_id: 2,
    job_title: "Frontend Developer"},
    {name:"Wegmans Food Markets",
    company_id: 3,
    job_title: "Backend Developer"},
    {name: "Workday",
    company_id: 4,
    job_title: "Web Developer II"},
    {name: "Boston Consulting Group",
    company_id: 5,
    job_title: "Android Developer"},
    {name: "Ultimate Software",
    company_id: 6,
    job_title: "Web Developer"},
    {name: "Edward Jones",
    company_id: 7,
    job_title: "Web Developer"}
]
const Matches = () =>{
    return(
        <MessageContainer>
            {dummydata.map(item =>{
                return(
                    <MatchItem>
                        <StyleH2>{item.name}</StyleH2>
                        <p>{item.job_title}</p>
                    </MatchItem>
                );
            })}
        </MessageContainer>
    )  
}
export default Matches;