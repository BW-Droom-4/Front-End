import React from 'react'

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