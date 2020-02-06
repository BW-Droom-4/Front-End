import React from 'react'
import styled from 'styled-components'

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
        <div>
            {dummydata.map(item =>{
                return(
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.job_title}</p>
                    </div>
                );
            })}
        </div>
    )  
}

export default Matches