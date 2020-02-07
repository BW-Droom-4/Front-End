import React from 'react';
import styled from 'styled-components';

const StyledCompanyCard = styled.div`
    height: 100%;
    display: grid;
    place-items: center;
    padding: 2rem;
    h2 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    p {
        padding-bottom: 0.3rem;
    }
    .sector {
        font-weight: bold;
    }
`;

const CompanyCard = ({ company }) => {
    
    return company.profile ? (
        <StyledCompanyCard>
            <div>
                <h2>{company.companyName}</h2>
                <p className="sector">Sector: {company.profile.sector}</p>
                <p className="about">{company.profile.about_company}</p>
            </div>
        </StyledCompanyCard>
    ) : null;
};

export default CompanyCard;
