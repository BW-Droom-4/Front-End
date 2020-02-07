import React from 'react'
import styled from 'styled-components/macro';

export const MatchesContainer = styled.div `
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
    background-color: #2A9D8F;
    background-image: linear-gradient(#2A9D8F, #263D42);
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
    width: 300px;
    height: 150px;
    border: 2px solid #263D42;
    border-radius: 10px;
    margin: 10px;
    background-color: rgba(42, 157, 144, 0.475);
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
        <MatchesContainer>
            <StyleH1>You Have A Match!</StyleH1>
            <ScrollDiv>
                {dummydata.map(item =>{
                    return(
                        
                        <MatchItem>
                            <StyleH2><AStyling href="/Messages">{item.name}</AStyling></StyleH2>
                            <p>{item.job_title}</p>
                        </MatchItem>
                        
                    );
                })}
            </ScrollDiv>
            
        </MatchesContainer>
    )  
}
export default Matches;